<?php

class client
{
    public function __construct()
    {
        $params = array(
            'location' => 'http://127.0.0.1/SOAP/soapServer.php',
            'uri' => 'urn://127.0.0.1/SOAP/soapServer.php',
            'trace' => 1
        );

        $this->instance = new SoapClient(NULL, $params);
    }

    public function sayHello($params)
    {
        return $this->instance->__soapCall('greet', $params);
        // return $this->instance->hello('greet', $params);
    }
}

$bclient = new client;



// $soapClient->__soapCall('hello', $requestParams);
// $soapClient->hello($requestParams);

?>