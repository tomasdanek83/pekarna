<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Post data;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $sessionId = $params->sessionId;
        $locationId = $params->locationId;
        $view = $params->view;
        $event = $params->event;
        $details = $params->details;
        $userAgent = $params->userAgent;

        $servername = "wm136.wedos.net";
        $dbname = "d22429_pekarna";
        $username = "w22429_pekarna";
        $password = "gMJEv6rF";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
                
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        if (!$conn->set_charset('utf8')) {
          printf("Error loading character set utf8: %s\n", $conn->error);
        }        

        $sql = "INSERT INTO eventlog (SESSION_ID, LOCATION_ID, VIEW, EVENT, DETAILS, USER_AGENT)
        VALUES ('$sessionId', '$locationId', '$view', '$event', '$details', '$userAgent')";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

?>