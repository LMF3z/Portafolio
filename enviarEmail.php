<?php

$name_contac = $_POST['name_contac'];
$lastname_contac = $_POST['lastname_contac'];
$name_enterprise = $_POST['name_enterprise'];
$correo_enterprise = $_POST['correo_enterprise'];

$mensaje = $_POST['mensaje']."\r\n";
$mensaje.= $name_contac."\r\n";
$mensaje.= $lastname_contac."\r\n";
$mensaje.= $name_enterprise."\r\n";

$miCorreo = "moisesfreites3.com";

$header = "From: ".$miCorreo."\r\n";
$header.= "Reply-To: moisesfreites3.com"."\r\n";
$header.= "X-Mailer: PHP/".phpversion();
$email = @mail($miCorreo, $correo_enterprise, $mensaje, $header);

if($email){
  echo json_encode('Enviado Exitosamente');
}
