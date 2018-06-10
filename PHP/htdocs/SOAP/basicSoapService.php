<?php

include './basicSoapClient.php';

$requestParams = array('greetant' => 'David');
echo $bclient->sayHello($requestParams);

?>
