<?php
// Mantén estas líneas para que el JSON nunca se rompa, quietarlas en el caso de que los emails no lleguen para saber el error 
error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json; charset=utf-8');

$destinatario = "Info@Generareco.org.ar";

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
$headers = "From: no-reply@generareco.org.ar\r\n"; // Un correo de tu propio dominio
$headers .= "Reply-To: " . $email . "\r\n";      // Permite responder directamente a l cliente
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (@mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo json_encode(array("success" => true, "message" => "Gracias! Tu mensaje ha sido enviado correctamente."));
} else {
    echo json_encode(array("success" => true, "message" => "Formulario procesado correctamente (email no enviado en localhost)."));
}
?>