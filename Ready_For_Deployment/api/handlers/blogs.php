<?php
require_once __DIR__ . '/../db.php';

// Helper: Make Unique Slug
function makeUniqueSlug($pdo, $baseSlug, $currentId = null) {
    $slug = $baseSlug;
    $index = 2;
    while (true) {
        $stmt = $pdo->prepare("SELECT id FROM blogs WHERE slug = ?");
        $stmt->execute([$slug]);
        $existing = $stmt->fetch();
        if (!$existing || ($currentId && $existing['id'] === $currentId)) {
            break;
        }
        $slug = $baseSlug . '-' . $index;
        $index++;
    }
    return $slug;
}

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
        $stmt = $pdo->prepare("SELECT * FROM blogs WHERE slug = ?");
        $stmt->execute([$slug]);
        $blog = $stmt->fetch();
        if (!$blog) {
            sendJson(["error" => "Blog not found"], 404);
        }
        // Decode JSON fields
        $blog['title'] = json_decode($blog['title'] ?? '{}');
        $blog['excerpt'] = json_decode($blog['excerpt'] ?? '{}');
        $blog['content'] = json_decode($blog['content'] ?? '{}');
        $blog['metaTitle'] = json_decode($blog['metaTitle'] ?? '{}');
        $blog['metaDescription'] = json_decode($blog['metaDescription'] ?? '{}');
        sendJson($blog);
    } else {
        // Get all
        $stmt = $pdo->query("SELECT * FROM blogs ORDER BY date DESC");
        $blogs = $stmt->fetchAll();
        foreach ($blogs as &$b) {
            $b['title'] = json_decode($b['title'] ?? '{}');
            $b['excerpt'] = json_decode($b['excerpt'] ?? '{}');
            $b['content'] = json_decode($b['content'] ?? '{}');
            $b['metaTitle'] = json_decode($b['metaTitle'] ?? '{}');
            $b['metaDescription'] = json_decode($b['metaDescription'] ?? '{}');
        }
        sendJson($blogs);
    }
} elseif ($method === 'POST') {
    $body = getJsonBody();
    if (empty($body['title']['en'])) {
        sendJson(["error" => "Title is required"], 400);
    }
    $blogId = $body['id'] ?? createId();
    $baseSlug = $body['slug'] ?? generateSlug($body['title']['en']);
    $slug = makeUniqueSlug($pdo, $baseSlug);

    $stmt = $pdo->prepare("INSERT INTO blogs (id, slug, date, image, category, title, excerpt, content, metaTitle, metaDescription, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $blogId,
        $slug,
        $body['date'] ?? date('Y-m-d'),
        $body['image'] ?? '',
        $body['category'] ?? '',
        json_encode($body['title'] ?? []),
        json_encode($body['excerpt'] ?? []),
        json_encode($body['content'] ?? []),
        json_encode($body['metaTitle'] ?? []),
        json_encode($body['metaDescription'] ?? []),
        $body['status'] ?? 'published'
    ]);
    
    sendJson(["id" => $blogId, "slug" => $slug], 201);

} elseif ($method === 'PUT' && $id) {
    $body = getJsonBody();
    $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
    $stmt->execute([$id]);
    $blog = $stmt->fetch();
    if (!$blog) sendJson(["error" => "Blog not found"], 404);

    $slug = $blog['slug'];
    if (isset($body['slug']) && $body['slug'] !== $slug) {
        $slug = makeUniqueSlug($pdo, $body['slug'], $id);
    }
    
    $image = !empty($body['image']) ? $body['image'] : $blog['image'];

    $stmt = $pdo->prepare("UPDATE blogs SET slug=?, date=?, image=?, category=?, title=?, excerpt=?, content=?, metaTitle=?, metaDescription=?, status=? WHERE id=?");
    $stmt->execute([
        $slug,
        $body['date'] ?? $blog['date'],
        $image,
        $body['category'] ?? $blog['category'],
        isset($body['title']) ? json_encode($body['title']) : $blog['title'],
        isset($body['excerpt']) ? json_encode($body['excerpt']) : $blog['excerpt'],
        isset($body['content']) ? json_encode($body['content']) : $blog['content'],
        isset($body['metaTitle']) ? json_encode($body['metaTitle']) : $blog['metaTitle'],
        isset($body['metaDescription']) ? json_encode($body['metaDescription']) : $blog['metaDescription'],
        $body['status'] ?? $blog['status'],
        $id
    ]);
    sendJson(["id" => $id]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
    $stmt->execute([$id]);
    sendJson(["message" => "Deleted successfully"]);
}
?>
