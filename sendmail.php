<?php
if(isset($_POST['email'])) {

    // Paramètres de l'e-mail
    $to = "benoitdelpontnew@gmail.com";
    $subject = "Formulaire de contact";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Construction du message
    $body = "Nom : " . $name . "\n\n";
    $body .= "Email : " . $email . "\n\n";
    $body .= "Message :\n" . $message . "\n";

    // Envoi de l'e-mail
    mail($to, $subject, $body);

    // Message de confirmation
    echo "Merci de nous avoir contacté, nous vous répondrons dès que possible.";

}
?>
