<?php
require_once __DIR__ . '/../db.php';

if ($method === 'GET') {
    $all = isset($_GET['all']) && $_GET['all'] === 'true';
    $sql = "SELECT * FROM testimonials";
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

    $stmt = $pdo->prepare("INSERT INTO testimonials (id, name_en, name_ar, location_en, location_ar, text_en, text_ar, image, sort_order, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $newId,
        $b['name_en'] ?? '',
        $b['name_ar'] ?? '',
        $b['location_en'] ?? '',
        $b['location_ar'] ?? '',
        $b['text_en'] ?? '',
        $b['text_ar'] ?? '',
        $b['image'] ?? '',
        $b['sort_order'] ?? 0,
        isset($b['active']) ? (int)$b['active'] : 1
    ]);
    sendJson(["id" => $newId], 201);

} elseif ($method === 'PUT' && $id) {
    $b = getJsonBody();
    $stmt = $pdo->prepare("SELECT * FROM testimonials WHERE id = ?");
    $stmt->execute([$id]);
    $item = $stmt->fetch();
    if (!$item) sendJson(["error" => "Testimonial not found"], 404);

    $image = !empty($b['image']) ? $b['image'] : $item['image'];
    
    $stmt = $pdo->prepare("UPDATE testimonials SET name_en=?, name_ar=?, location_en=?, location_ar=?, text_en=?, text_ar=?, image=?, sort_order=?, active=? WHERE id=?");
    $stmt->execute([
        $b['name_en'] ?? $item['name_en'],
        $b['name_ar'] ?? $item['name_ar'],
        $b['location_en'] ?? $item['location_en'],
        $b['location_ar'] ?? $item['location_ar'],
        $b['text_en'] ?? $item['text_en'],
        $b['text_ar'] ?? $item['text_ar'],
        $image,
        $b['sort_order'] ?? $item['sort_order'],
        isset($b['active']) ? (int)$b['active'] : $item['active'],
        $id
    ]);
    sendJson(["id" => $id]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $pdo->prepare("DELETE FROM testimonials WHERE id = ?");
    $stmt->execute([$id]);
    sendJson(["message" => "Deleted successfully"]);
}
?>
