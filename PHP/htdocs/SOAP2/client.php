
<?php

class client
{
    public function __construct()
    {
        $params = array(
            'location' => 'http://127.0.0.1/SOAP2/server.php',
            'uri' => 'urn://127.0.0.1/SOAP2/server.php',
            'trace' => 1
        );

        $this->instance = new SoapClient(NULL, $params);
    }

    public function getName($id_array)
    {
        return $this->instance->__soapCall('getStudentName', $id_array);
        // return $this->instance->getStudentName($id_array);
    }
}

$client = new client;

?>