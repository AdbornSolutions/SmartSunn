<?php
/**
 * SmartSun – contact form -> email
 * Upload with the site (Vite copies /public into the build, so it ends up at
 * https://your-domain.com/contact.php).  Needs PHP hosting with mail() enabled.
 *
 * EDIT THESE TWO LINES:
 */
const TO_EMAIL   = 'matrixinfotech.ngp@gmail.com';   // where enquiries are delivered
const FROM_EMAIL = 'no-reply@shubhvaasturuchii.com'; // must be an address on YOUR domain, or mail is rejected/spammed

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

// text only, no line breaks (blocks email header injection), length-limited
function one_line($value, int $max): string {
    $value = is_string($value) ? $value : '';
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\r\n\t]+/', ' ', $value);
    return mb_substr($value, 0, $max);
}
function multi_line($value, int $max): string {
    $value = is_string($value) ? $value : '';
    return mb_substr(trim(strip_tags($value)), 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    $data = $_POST;
}

// spam trap: bots fill the hidden "website" field
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

$name     = one_line($data['name'] ?? '', 100);
$phone    = preg_replace('/\D/', '', (string)($data['phone'] ?? ''));
$email    = one_line($data['email'] ?? '', 150);
$location = one_line($data['location'] ?? '', 120);
$message  = multi_line($data['message'] ?? '', 3000);

if (mb_strlen($name) < 2 || !preg_match('/^[6-9]\d{9}$/', $phone) || mb_strlen($message) < 10) {
    respond(422, ['ok' => false, 'error' => 'Please fill in all required fields correctly.']);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Invalid email address.']);
}

$body  = "New solar enquiry from the website\n";
$body .= "----------------------------------\n";
$body .= "Name:     $name\n";
$body .= "Phone:    $phone\n";
$body .= "Email:    " . ($email ?: '-') . "\n";
$body .= "Location: " . ($location ?: '-') . "\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: SmartSun Website <" . FROM_EMAIL . ">\r\n";
if ($email !== '') {
    $headers .= "Reply-To: $email\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$subject = '=?UTF-8?B?' . base64_encode("New solar enquiry from $name") . '?=';

if (!mail(TO_EMAIL, $subject, $body, $headers)) {
    respond(500, ['ok' => false, 'error' => 'Could not send the email.']);
}

respond(200, ['ok' => true]);
