<?php
require_once __DIR__ . '/../db.php';

if ($method === 'GET') {
    $all = isset($_GET['all']) && $_GET['all'] === 'true';
    $sql = "SELECT * FROM services";
    if (!$all) {
        $sql .= " WHERE active = 1";
    }
    $sql .= " ORDER BY sort_order ASC";
    
    $stmt = $pdo->query($sql);
    $items = $stmt->fetchAll();
    
    foreach ($items as &$item) {
        $item['active'] = (bool)$item['active'];
    }
    sendJson($items);

} elseif ($method === 'POST') {
    $b = getJsonBody();
    $newId = createId();

    $stmt = $pdo->prepare("INSERT INTO services (id, title_en, title_ar, description_en, description_ar, icon_name, sort_order, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $newId,
        $b['title_en'] ?? '',
        $b['title_ar'] ?? '',
        $b['description_en'] ?? '',
        $b['description_ar'] ?? '',
        $b['icon_name'] ?? 'FaTools',
        $b['sort_order'] ?? 0,
        isset($b['active']) ? (int)$b['active'] : 1
    ]);
    sendJson(["id" => $newId], 201);

} elseif ($method === 'PUT' && $id) {
    $b = getJsonBody();
    $stmt = $pdo->prepare("SELECT * FROM services WHERE id = ?");
    $stmt->execute([$id]);
    $item = $stmt->fetch();
    if (!$item) sendJson(["error" => "Service not found"], 404);
    
    $stmt = $pdo->prepare("UPDATE services SET title_en=?, title_ar=?, description_en=?, description_ar=?, icon_name=?, sort_order=?, active=? WHERE id=?");
    $stmt->execute([
        $b['title_en'] ?? $item['title_en'],
        $b['title_ar'] ?? $item['title_ar'],
        $b['description_en'] ?? $item['description_en'],
        $b['description_ar'] ?? $item['description_ar'],
        $b['icon_name'] ?? $item['icon_name'],
        $b['sort_order'] ?? $item['sort_order'],
        isset($b['active']) ? (int)$b['active'] : $item['active'],
        $id
    ]);
    sendJson(["id" => $id]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $pdo->prepare("DELETE FROM services WHERE id = ?");
    $stmt->execute([$id]);
    sendJson(["message" => "Deleted successfully"]);
}
?>
