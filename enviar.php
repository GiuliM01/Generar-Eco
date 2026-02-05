<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/mailer/src/PHPMailer.php';
require_once __DIR__ . '/mailer/src/SMTP.php';
require_once __DIR__ . '/mailer/src/Exception.php';

header('Content-Type: application/json; charset=utf-8');

// Seguridad
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Datos
$nombre = trim($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$organizacion = trim($_POST['organizacion'] ?? 'No especificada');
$motivo = trim($_POST['motivo'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

// Validación
if (!$nombre || !$email || !$motivo || !$mensaje) {
    echo json_encode(['success' => false, 'message' => 'Faltan campos obligatorios']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

//  CONFIGURACIÓN SMTP HOSTINGER
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;

    //  Credenciales del cliente
    $mail->Username = 'UN_MAIL';
    $mail->Password = 'CONTRASEÑA_MAIL';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Remitente y destinatario
    $mail->setFrom('UN_MAIL', 'Formulario Web - Generar Eco');
    $mail->addAddress('UN_MAIL_DEST');
    $mail->addReplyTo($email, $nombre);

    // Contenido
    $mail->CharSet = 'UTF-8';
    //$mail->Subject = "Nuevo contacto - $motivo";
    $mail->Subject = mb_encode_mimeheader("Nuevo contacto - $motivo", "UTF-8");
    $mail->Body =
        "Nombre: $nombre\n" .
        "Email: $email\n" .
        "Organización: $organizacion\n" .
        "Motivo: $motivo\n\n" .
        "Mensaje:\n$mensaje";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error SMTP: ' . $mail->ErrorInfo]);
}



/*

<?php
// Mantén estas líneas para que el JSON nunca se rompa, quietarlas en el caso de que los emails no lleguen para saber el error 
/*
error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json; charset=utf-8');

$destinatario = "MAIL_DEST";

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(array("success" => false, "message" => "Metodo no permitido"));
    exit;
}

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$organizacion = isset($_POST['organizacion']) ? $_POST['organizacion'] : 'No especificada';
$motivo = isset($_POST['motivo']) ? $_POST['motivo'] : '';
$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

if (empty($nombre) || empty($email) || empty($motivo) || empty($mensaje)) {
    echo json_encode(array("success" => false, "message" => "Faltan campos obligatorios"));
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(array("success" => false, "message" => "Email no valido"));
    exit;
}

$asunto = "Nuevo contacto desde Generar-Eco - " . $motivo;
$cuerpo = "Nombre: " . $nombre . "\n";
$cuerpo .= "Email: " . $email . "\n";
$cuerpo .= "Organizacion: " . $organizacion . "\n";
$cuerpo .= "Motivo: " . $motivo . "\n\n";
$cuerpo .= "Mensaje:\n" . $mensaje;

// --- CAMBIO PARA EVITAR SPAM EN HOSTINGER ---
$headers = "From: no-reply@correo\r\n"; // Un correo de tu propio dominio
$headers .= "Reply-To: " . $email . "\r\n";      // Permite responder directamente a l cliente
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (@mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo json_encode(array("success" => true, "message" => "Gracias! Tu mensaje ha sido enviado correctamente."));
} else {
    echo json_encode(array("success" => true, "message" => "Formulario procesado correctamente (email no enviado en localhost)."));
}
?>
*/

