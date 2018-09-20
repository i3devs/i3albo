<?php
/**
* Controllo sessioni.
* @author Filippo Finke
*/
session_start();
if(!isset($_SESSION['logged'])) {
	header("Location: https://".$_SERVER['SERVER_NAME']."/index.php");
	exit;
}

if (isset($_SESSION['time'])) {
    if($_SESSION['time'] < time() - 600)
    {
    	//rigenero id
    	session_regenerate_id();
    	$_SESSION['time'] = time();
    }
}
?>