<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = "pekarna@dankovi.org"; // $params->email;
        $name = "pekarna.dankovi.org";  //$params->name;
        $message = $params->message;

        $recipient = 'tomasdanek83@gmail.com';
        $subject = 'Pekárna žije!';
        $headers = "From: $name <$email>" . "\r\n";
        $headers .= "Content-Type: text/html; charset=\"UTF-8\"; format=flowed \r\n";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

?>