SOAP tutorial with schema

<?php


$soapClient = new SoapClient('schemas.ericsson.com/ema/UserProvisioning/HSS', array(
	'location' => 'http://loacalhost/SOAP/soapServer.php',
	'uri' => 'urn://loacalhost/SOAP/soapServer.php',
	'trace'    => 1,
));

/* */

$requestParams = array(
    'MOType' => self::moType,
    'MOId' => array('subscriptionId' => [] ),
    'MOAttributes' => array(
    	'createESMSubscription' => array(
    		'subscriptionId' => [],
    		'user' => array('a' => 'A')
    	)
	)
);

$soapClient->__soapCall('Create', $requestParams);
