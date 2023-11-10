<?php
session_start();
require_once 'form_handler_contr.inc.php';
require '../vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] = 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $topic = htmlspecialchars($_POST['topic']);
    $message = htmlspecialchars($_POST['message']);

    $errors = [];

    if (is_input_empty($name, $email, $topic, $message)) {
        $errors['input_empty'] = 'Uzupełnij wszystkie pola';
    }

    if (is_email_correct($email)) {
        $errors['invalid_email'] = 'Niepoprawny adres mailowy';
    }

    if ($errors) {
        $_SESSION['form_errors'] = $errors;

    } else {
        $secretKey = '6Lf-6AopAAAAALXamjqK50pYT_aH-FrKlAEzc5l7';
        $recaptchaToken = $_POST['recaptcha_token'];

        $verifyURL = "https://www.google.com/recaptcha/api/siteverify";
        $data = [
            'secret' => $secretKey,
            'response' => $recaptchaToken,
        ];

        $options = [
            'http' => [
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query($data),
            ],
        ];

        $context = stream_context_create($options);
        $response = file_get_contents($verifyURL, false, $context);
        $result = json_decode($response);

        if ($result->success && $result->score >= 0.5) {
            $mail = new PHPMailer\PHPMailer\PHPMailer();

            $mail->isSMTP();
            $mail->Host = getenv('SMTPHOST');
            $mail->SMTPAuth = getenv('SMTPAUTH');
            $mail->Username = getenv('SMTPUSER');
            $mail->Password = getenv('SMTPPASS');
            $mail->SMTPSecure = getenv('SMTPSECURE');
            $mail->Port = getenv('SMTPPORT');

            $mail->setFrom($email, $name);
            $mail->addCC($email);
            $mail->addAddress('m.gzella.kontakt@gmail.com', 'Michal');
            $mail->Subject = $topic;
            $mail->Body = $message;


            if ($mail->send()) {
                $_SESSION['email_sent'] = 'E-mail został wysłany, dziękuję za kontakt!';

            } else {
                $_SESSION['email_sent_error'] = 'Wystąpił błąd podczas wysyłania wiadomości.' . $mail->ErrorInfo;
            }
        } else {
            $_SESSION['email_sent_error'] = 'Wystąpił błąd podczas wysyłania wiadomości. 2';
        }

    }
    header('Location: ../index.php#contact');
    die();

} else {
    header('Location: ../index.php#contact');
    die();
}