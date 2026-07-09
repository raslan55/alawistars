<?php
require_once __DIR__ . '/../db.php';

if ($method === 'GET') {
    $all = isset($_GET['all']) && $_GET['all'] === 'true';
    $sql = "SELECT * FROM partners";
    if (!$all) {
        $sql .= " WHERE active = 1";
    }
    $sql .= " ORDER BY sort_order ASC";
    
    $stmt = $pdo->query($sql);
    $items = $stmt->fetchAll();
    
    // Convert active to boolean for JSON consistency with Node
    foreach ($items as &$item) {
        $item['active'] = (bool)$item['active'];
    }
    sendJson($items);

} elseif ($method === 'POST') {
    $b = getJsonBody();
    $newId = createId();
    $stmt = $pdo->prepare("INSERT INTO partners (id, name, image, sort_order, active) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([
        $newId,
        $b['name'] ?? '',
        $b['image'] ?? '',
        $b['sort_order'] ?? 0,
        isset($b['active']) ? (int)$b['active'] : 1
    ]);
    sendJson(["id" => $newId], 201);

} elseif ($method === 'PUT' && $id) {
    $b = getJsonBody();
    $stmt = $pdo->prepare("SELECT * FROM partners WHERE id = ?");
    $stmt->execute([$id]);
    $item = $stmt->fetch();
    if (!$item) sendJson(["error" => "Partner not found"], 404);

    $image = !empty($b['image']) ? $b['image'] : $item['image'];
    
    $stmt = $pdo->prepare("UPDATE partners SET name=?, image=?, sort_order=?, active=? WHERE id=?");
    $stmt->execute([
        $b['name'] ?? $item['name'],
        $image,
        $b['sort_order'] ?? $item['sort_order'],
        isset($b['active']) ? (int)$b['active'] : $item['active'],
        $id
    ]);
    sendJson(["id" => $id]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $pdo->prepare("DELETE FROM partners WHERE id = ?");
    $stmt->execute([$id]);
    sendJson(["message" => "Deleted successfully"]);
}
?>
