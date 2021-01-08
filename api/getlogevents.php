<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("GET"): //Post data;
        header("Access-Control-Allow-Origin: *");

        $sessionId = $_GET["sessionId"];

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

        $sql = "SELECT * FROM eventlog WHERE SESSION_ID='$sessionId' ORDER BY TIMESTAMP DESC";
        $result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));        

        $resultArray = array();
        while($row =mysqli_fetch_assoc($result))
        {
            $resultArray[] = $row;
        }
        echo json_encode($resultArray);

        $conn->close();

        break;
    default: //Reject any non GET or OPTIONS requests.
        header("Allow: GET", true, 405);
        exit;
}

?>