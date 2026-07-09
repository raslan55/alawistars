<?php
require_once __DIR__ . '/../db.php';

function generateSlug($title) {
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9-_]/', '', str_replace(' ', '-', $slug));
    $slug = preg_replace('/-+/', '-', $slug);
    return trim($slug, '-');
}

if ($method === 'GET') {
    $slug = $id ?? ($_GET['slug'] ?? null);
    if ($slug) {
        // Get by slug
        $stmt = $pdo->prepare("SELECT * FROM products WHERE slug = ?");
        $stmt->execute([$slug]);
        $item = $stmt->fetch();
        if (!$item) sendJson(["error" => "Product not found"], 404);
        
        $item['features'] = json_decode($item['features'] ?? '[]');
        $item['active'] = (bool)$item['active'];
        sendJson($item);
    } else {
        // Get all
        $all = isset($_GET['all']) && $_GET['all'] === 'true';
        $sql = "SELECT * FROM products";
        if (!$all) {
            $sql .= " WHERE active = 1";
        }
        $sql .= " ORDER BY sort_order ASC";
        
        $stmt = $pdo->query($sql);
        $items = $stmt->fetchAll();
        
        foreach ($items as &$item) {
            $item['features'] = json_decode($item['features'] ?? '[]');
            $item['active'] = (bool)$item['active'];
        }
        sendJson($items);
    }
} elseif ($method === 'POST') {
    $b = getJsonBody();
    $newId = createId();
    $slug = $b['slug'] ?? generateSlug($b['title_en'] ?? 'product');

    $stmt = $pdo->prepare("INSERT INTO products (id, title_en, title_ar, slug, image, description_en, description_ar, features, active, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $newId,
        $b['title_en'] ?? '',
        $b['title_ar'] ?? '',
        $slug,
        $b['image'] ?? '',
        $b['description_en'] ?? '',
        $b['description_ar'] ?? '',
        json_encode($b['features'] ?? []),
        isset($b['active']) ? (int)$b['active'] : 1,
        $b['sort_order'] ?? 0
    ]);
    sendJson(["id" => $newId], 201);

} elseif ($method === 'PUT' && $id) {
    $b = getJsonBody();
    $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
    $stmt->execute([$id]);
    $item = $stmt->fetch();
    if (!$item) sendJson(["error" => "Product not found"], 404);

    $image = !empty($b['image']) ? $b['image'] : $item['image'];
    
    $stmt = $pdo->prepare("UPDATE products SET title_en=?, title_ar=?, slug=?, image=?, description_en=?, description_ar=?, features=?, active=?, sort_order=? WHERE id=?");
    $stmt->execute([
        $b['title_en'] ?? $item['title_en'],
        $b['title_ar'] ?? $item['title_ar'],
        $b['slug'] ?? $item['slug'],
        $image,
        $b['description_en'] ?? $item['description_en'],
        $b['description_ar'] ?? $item['description_ar'],
        isset($b['features']) ? json_encode($b['features']) : $item['features'],
        isset($b['active']) ? (int)$b['active'] : $item['active'],
        $b['sort_order'] ?? $item['sort_order'],
        $id
    ]);
    sendJson(["id" => $id]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
    $stmt->execute([$id]);
    sendJson(["message" => "Deleted successfully"]);
}
?>
