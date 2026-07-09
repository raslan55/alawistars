<?php
require_once 'db.php';

// Parse the request URL
$request = isset($_GET['request']) ? $_GET['request'] : '';
$requestParts = explode('/', trim($request, '/'));

$resource = isset($requestParts[0]) ? $requestParts[0] : '';
$id = isset($requestParts[1]) ? $requestParts[1] : null;

$method = $_SERVER['REQUEST_METHOD'];

// Route to the appropriate handler
switch ($resource) {
    case 'blogs':
        require_once 'handlers/blogs.php';
        break;
    case 'testimonials':
        require_once 'handlers/testimonials.php';
        break;
    case 'partners':
        require_once 'handlers/partners.php';
        break;
    case 'stats':
        require_once 'handlers/stats.php';
        break;
    case 'settings':
        require_once 'handlers/settings.php';
        break;
    case 'products':
        require_once 'handlers/products.php';
        break;
    case 'services':
        require_once 'handlers/services.php';
        break;
    case 'setup':
        // The setup script will be accessed directly via /api/setup.php, 
        // but if someone hits /api/setup due to rewrite, we can handle it or block it.
        sendJson(["error" => "Access setup.php directly."], 403);
        break;
    default:
        sendJson(["error" => "Endpoint not found"], 404);
        break;
}
?>
