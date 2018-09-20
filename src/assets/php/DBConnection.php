<?php
/**
* DBConnection
* @author Filippo Finke
*/
class DBConnection extends PDO
{
	private $host = "localhost";
	private $dbname = "";
	private $user = "root";
	private $pass = "";
	private $error = "Errore, il database risulta offline";

    public function __construct()
    {
    	try 
    	{
        	parent::__construct("mysql:host=".($this->host).";dbname=".($this->dbname), ($this->user), ($this->pass));
        } catch (PDOException $e) {
    		print $this->error;
		    exit();
		}
    }
}

/* Esempio di uso:
$dbh = new DBConnection();
$stm = $dbh->prepare("SELECT name FROM table WHERE id=?");
$stm->execute(array(1));
$data = $stm->fetchAll();
var_dump($data);*/

?>