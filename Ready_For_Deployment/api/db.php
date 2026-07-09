<?php
// Enable CORS for API requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Configuration
// Update these variables with your Bluehost Database details
$db_host = getenv('MYSQL_HOST') ?: 'localhost';
$db_port = getenv('MYSQL_PORT') ?: '3306';
$db_name = getenv('MYSQL_DATABASE') ?: 'alawistars_db'; // Change this
$db_user = getenv('MYSQL_USER') ?: 'alawistars_user'; // Change this
$db_pass = getenv('MYSQL_PASSWORD') ?: 'password'; // Change this

try {
    $dsn = "mysql:host=$db_host;port=$db_port;dbname=$db_name;charset=utf8mb4";
    $pdo = new PDO($dsn, $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    // If database connection fails, return 500 error
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Helper function to generate IDs
function createId() {
    return time() . '-' . rand(1000, 9999);
}

// Helper function to get JSON body
function getJsonBody() {
    return json_decode(file_get_contents('php://input'), true) ?: [];
}

// Helper function to send JSON response
function sendJson($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
?>
