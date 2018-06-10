<?php

class MyServer
{
	private $storage = [];

	public function __construct()
	{

	}

	public function greet($params)
	{
		$name = 'Human';

		if ($params != NULL) {
			$name = $params['greetant'];
		}

		return 'Greetings, '.$name.'!';
	}

	public function Create($item) {
		array_push($storage, $item); 
		return $storage;
	}
}


$server = new SoapServer(NULL, array(
	'uri' => 'loacalhost/SOAP/soapServer.php'
));
$server->setClass('MyServer');
$server->handle();

?>



