<?php
header('Content-Type: application/json; charset=utf-8');

// =========================
// 🌐 CORS (DEV + PROD)
// =========================
$allowedOrigins = [
    'http://localhost:3000',
    'https://smbmmatricschool.com'
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// =========================
// 📦 PHPMailer
// =========================
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// =========================
// 🔐 ENV CONFIG
// =========================
$smtpUser = getenv('SMTP_USER') ?: 'info@smbmmatricschool.com';
$smtpPass = getenv('SMTP_PASS') ?: 'your_email_password';

// =========================
// 🎓 ACADEMIC YEAR LOGIC
// =========================
$year = date('Y');

$year = date('Y');
$academicYear = date('Y') . '-' . (date('Y') + 1);

try {
    // =========================
    // 📥 INPUT
    // =========================
    $input = file_get_contents('php://input');
    $data  = json_decode($input, true);

    if (!$data) {
        throw new Exception('Invalid JSON');
    }

    // =========================
    // 🛡️ VALIDATION
    // =========================
    if (
        empty($data['parentName']) ||
        empty($data['email']) ||
        !filter_var($data['email'], FILTER_VALIDATE_EMAIL)
    ) {
        throw new Exception('Invalid form data');
    }

    // =========================
    // 🛡️ HONEYPOT
    // =========================
    if (!empty($data['website'])) {
        throw new Exception('Spam detected');
    }

    // =========================
    // 🛡️ TIME CHECK
    // =========================
    if (isset($data['formTime'])) {
        $timeTaken = (microtime(true) * 1000) - (float)$data['formTime'];
        if ($timeTaken < 3000) {
            throw new Exception('Form submitted too quickly');
        }
    }

    // =========================
    // 🛡️ RATE LIMIT
    // =========================
    $ip = $_SERVER['REMOTE_ADDR'];
    $rateFile = sys_get_temp_dir() . '/enquiry_' . md5($ip);

    if (file_exists($rateFile)) {
        $lastTime = (int)file_get_contents($rateFile);
        if ((time() - $lastTime) < 60) {
            throw new Exception('Too many requests. Try again later.');
        }
    }

    file_put_contents($rateFile, time(), LOCK_EX);

    // =========================
    // ✉️ MAIL SETUP
    // =========================
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'mail.smbmmatricschool.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->Timeout    = 10;

    $mail->isHTML(true);

    // Unique enquiry ID
    $enquiryId = uniqid('ENQ-');

    // =========================
    // 📩 SEND TO SCHOOL
    // =========================
    $mail->setFrom('info@smbmmatricschool.com', 'SMBM Matric School');

    $mail->addAddress('info@smbmmatricschool.com', "Admissions {$academicYear}");
    //$mail->addAddress('smbmatricschooldgl@gmail.com', "Admissions {$academicYear}");

    // Reply goes to parent
    $mail->addReplyTo($data['email'], $data['parentName']);

    $mail->Subject = "New Admission Enquiry ({$enquiryId}) - {$academicYear}";

    $body = "
    <h2>New Admission Enquiry</h2>
    <p><strong>ID:</strong> {$enquiryId}</p>
    <p><strong>Academic Year:</strong> {$academicYear}</p>

    <table border='1' cellpadding='8' cellspacing='0'>
        <tr><td><strong>Student</strong></td><td>" . htmlspecialchars($data['studentName'] ?? '-') . "</td></tr>
        <tr><td><strong>Parent</strong></td><td>" . htmlspecialchars($data['parentName']) . "</td></tr>
        <tr><td><strong>Email</strong></td><td>" . htmlspecialchars($data['email']) . "</td></tr>
        <tr><td><strong>Phone</strong></td><td>" . htmlspecialchars($data['phone'] ?? '-') . "</td></tr>
        <tr><td><strong>Class</strong></td><td>" . htmlspecialchars($data['grade'] ?? '-') . "</td></tr>
        <tr><td><strong>Message</strong></td><td>" . nl2br(htmlspecialchars($data['message'] ?? '-')) . "</td></tr>
        <tr><td><strong>IP</strong></td><td>" . $_SERVER['REMOTE_ADDR'] . "</td></tr>
        <tr><td><strong>Device</strong></td><td>" . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "</td></tr>
    </table>
    ";

    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();

    // =========================
    // ✉️ CONFIRMATION MAIL
    // =========================
    $mail->clearAddresses();
    $mail->clearReplyTos();

    $mail->addAddress($data['email'], $data['parentName']);
    $mail->Subject = "Enquiry Received ({$enquiryId}) - {$academicYear}";

    $mail->Body = "
    <p>Dear {$data['parentName']},</p>
    <p>Thank you for contacting SMBM Matric School.</p>
    <p>Your enquiry has been received successfully.</p>
    <p><strong>Reference ID:</strong> {$enquiryId}</p>
    <p><strong>Academic Year:</strong> {$academicYear}</p>
    <br>
    <p>We will contact you shortly.</p>
    <br>
    <p>Regards,<br>SMBM Matric School</p>
    ";

    $mail->AltBody = "Thank you. Ref ID: {$enquiryId} ({$academicYear})";

    $mail->send();

    // =========================
    // ✅ RESPONSE
    // =========================
    echo json_encode([
        'success' => true,
        'message' => 'Enquiry sent successfully'
    ]);

} catch (Exception $e) {
    error_log("Mail Error: " . $e->getMessage());

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Something went wrong'
    ]);
}
