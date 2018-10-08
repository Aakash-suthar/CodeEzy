<?php

class dbConnection{
	protected $db_conn;
	public $db_name = 'a141f558a_main';
	public $db_user = 'a141f558a';
	public $db_pass = 'Codezy@host!123';
	public $db_host = 'localhost:3306';

	function connect(){
		try{
			$this->db_conn = new PDO("mysql:host=$this->db_host;dbname=$this->db_name",$this->db_user,$this->db_pass);
			return $this->db_conn;
            
		}
		catch(PDOException $e){
			return $e->getMessage();
		}
	}
}
?>