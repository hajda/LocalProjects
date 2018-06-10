
<?php
    function verifyServiceDown($ping) {
    	$totalLoss = '(100% loss)';
    	$hostNotFound = '(Ping request could not find host)';
    	return verifyServiceDownCriterium($totalLoss, $ping) || verifyServiceDownCriterium($hostNotFound, $ping);
    }

    function verifyServiceDownCriterium($criterium, $ping) {
    	return preg_match($criterium, $ping, $matches);
    }

    // // $ping = shell_exec("ping 10.75.108.132");
    // // $ping = shell_exec("ping nomasnsland.hu");
    // $ping = shell_exec("ping google.com");
    // $isServiceDown = verifyServiceDown($ping);
    // if ($isServiceDown) {
    //  $serviceStatus = 'service-down';
    // } else {
    //     $serviceStatus = 'service-online';
    // }
    // echo $serviceStatus;
    
    function isAssoc($arr)
    {
        return array_keys($arr) !== range(0, count($arr) - 1);
    }

    function echoPingResult($output)
    {
        if (verifyServiceDown($output)) {
            echo 'service-down';
        } else {
            echo 'service-online';
        }
    }

    function getLastElement($array)
    {
        return $array[count($array) - 1];
    }

    function echoOutput($output)
    {
        echo "OUTPUT:";
        for ($i = 0; $i < count($output); $i++) {
            echo "\n$i : $output[$i]";
        }
    }

    // $host = '10.75.108.132';
    $host = 'google.com';
    $command = "ping $host";
    exec($command, $output , $return_var );

    if (isAssoc($output)) {
        // echo 'ASSOC';
        // foreach($output as $member) {
        //     echo("MEMBER: $member");
        // }
    } else if (is_array($output)) {
        // echoOutput($output);
        echoPingResult(getLastElement($output));
    } else {
        echoPingResult($output);
    }
?>
