<?php
require_once __DIR__ . '/../db.php';

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM site_stats ORDER BY sort_order ASC");
    $items = $stmt->fetchAll();
    sendJson($items);

} elseif ($method === 'PUT' && $id) {
    $b = getJsonBody();
    $stmt = $pdo->prepare("SELECT * FROM site_stats WHERE id = ?");
    $stmt->execute([$id]);
    $item = $stmt->fetch();
    if (!$item) sendJson(["error" => "Stat not found"], 404);
    
    $stmt = $pdo->prepare("UPDATE site_stats SET stat_key=?, value=?, label_en=?, label_ar=?, icon_color=?, sort_order=? WHERE id=?");
    $stmt->execute([
        $b['stat_key'] ?? $item['stat_key'],
        $b['value'] ?? $item['value'],
        $b['label_en'] ?? $item['label_en'],
        $b['label_ar'] ?? $item['label_ar'],
        $b['icon_color'] ?? $item['icon_color'],
        $b['sort_order'] ?? $item['sort_order'],
        $id
    ]);
    sendJson(["id" => $id]);
}
?>
