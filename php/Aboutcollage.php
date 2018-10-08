<?php
include_once('dbConnection.php');

	 class AboutCollage{

	 	public $link;

	 	function __construct(){
	 		$db_connection = new dbConnection();
	 		$this->link = $db_connection->connect();
	 		return $this->link;
	 	}
         
         function addAnswer($Q1,$Q2,$Q3,$Q4,$Q5,$Q6,$Q7,$course,$year,$academicyear,$suggestion,$name){
	 		$query = $this->link->prepare("INSERT INTO test(name,course,Q1,Q2,Q3,Q4,Q5,Q6,Q7,year,academicyear,suggestion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
	 		$values = array($name,$course,$Q1,$Q2,$Q3,$Q4,$Q5,$Q6,$Q7,$year,$academicyear,$suggestion);
	 		$query->execute($values);
	 		$counts = $query->rowCount();
	 		return $counts;
	 	}
         
        function getData(){
             return $result = $this->link->query("Select * from test")->fetchAll();
                
        }
     }
?>