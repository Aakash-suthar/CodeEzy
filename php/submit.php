<?php
include_once('dbConnection.php');

$db_connection = new dbConnection();
$link = $db_connection->connect();
         
        $First = $_POST['f'];
        $Last = $_POST['l'];
        $Mail = $_POST['e'];
        $Help = $_POST['h'];
    if(!(empty($First) && empty($Last) && empty($Mail) && empty($Help))){
   
            $query = $link->prepare("INSERT INTO Contact(firstname,lastname,email,help) VALUES (?,?,?,?)");
	 		$values = array($First,$Last,$Mail,$Help);
	 		$query->execute($values);
	 		$counts = $query->rowCount();
	 		if($counts==1){
                echo "true";
            }
            else{ echo "Failedinside"; }
    }
    else{  echo "Failedoutside";}

?>