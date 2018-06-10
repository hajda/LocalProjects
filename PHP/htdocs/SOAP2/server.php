<?php

class server
{
	public function __construct()
	{

	}

	public function getStudentName($id_array)
	{
		return 'Sam';
	}
}


$server = new SoapServer(NULL, array(
	'uri' => 'loacalhost/SOAP2/server.php'
));
$server->setClass('server');
$server->handle();


?>