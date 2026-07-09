<?php
require_once __DIR__ . '/../db.php';

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM site_settings");
    $items = $stmt->fetchAll();
    
    $map = [];
    foreach ($items as $item) {
        $map[$item['setting_key']] = [
            'value_en' => $item['value_en'],
            'value_ar' => $item['value_ar']
        ];
    }
    sendJson($map);

} elseif ($method === 'POST') {
    // Bulk upsert settings
    $entries = getJsonBody(); // { key: { value_en, value_ar } }
    $updatedCount = 0;
    
    foreach ($entries as $key => $val) {
        $stmt = $pdo->prepare("SELECT id FROM site_settings WHERE setting_key = ?");
        $stmt->execute([$key]);
        $existing = $stmt->fetch();
        
        $val_en = $val['value_en'] ?? '';
        $val_ar = $val['value_ar'] ?? '';
        
        if ($existing) {
            $stmt = $pdo->prepare("UPDATE site_settings SET value_en=?, value_ar=? WHERE id=?");
            $stmt->execute([$val_en, $val_ar, $existing['id']]);
        } else {
            $stmt = $pdo->prepare("INSERT INTO site_settings (id, setting_key, value_en, value_ar) VALUES (?, ?, ?, ?)");
            $stmt->execute([createId(), $key, $val_en, $val_ar]);
        }
        $updatedCount++;
    }
    
    sendJson(["updated" => $updatedCount]);
}
?>
