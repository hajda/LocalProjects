<?php

echo "phpversion()<br><br>";

/* simplest closure */

$closure = function ($message) {
    echo "$message";
};

$closure('Hello!<br><br>');
    
/* Closure = anonymus functions */


function operate($operate, $leftOperand, $rightOperand) {
    echo 'operate!<br>';
    echo " ==> {$operate($leftOperand, $rightOperand)}<br><br>";
}

$add = function ($leftOperand, $rightOperand) {
    echo "add $leftOperand and $rightOperand";
    return $leftOperand + $rightOperand;
};

operate($add, 6, 3);

operate(
    function ($leftOperand, $rightOperand) {
        echo "multiply $leftOperand by $rightOperand";
        return $leftOperand * $rightOperand;
    },
    6,
    3
);



/* two examples at once: do some >mapping with a >generator */

function map($mapping) {
    function dataSet() {
        for ($i = 0; $i < 100; $i++) {
            echo "yield $i --> ";
            yield $i;
        }
    }

    forEach (dataSet() as $dataPiece) {
        $mapping($dataPiece);
    }
}

map(function ($element) {
    echo "map this element: $element<br>";
});

// function as a variable

$closureFunction = function ($arg) {
    return closureFunction($arg);
};
function closureFunction($arg) {
    echo "call $arg...<br>";
}

closureFunction('the function');
$closureFunction('its reference');


// // module pattern

function myModule($limit) {
    $progress = [];
    echo "initialize module with limit $limit<br>";

    return function ($elem) use ($progress, $limit) {
        array_push($progress, $elem);
        echo '<pre>'.var_dump($progress).'</pre>';
    };
}

$seek = myModule(100);
$seek('forward');
$seek('forward');
$seek('forward');
$seek('backward');
$seek('backward');
$seek('backward');
$seek('backward');
$seek('backward');
$seek('backward');
$seek('forward');
$seek('forward');
$seek('forward');
$seek('forward');
$seek('forward');
$seek('forward');
$seek('forward');
$seek('forward');
$seek('forward');

?>




<?php
class App
{   
    protected $routes = array();
    protected $responseStatus = '200 OK';
    protected $responseContentType = 'text/html';
    protected $responseBody = 'Hello world';
    protected $monitor = 'MoNiToR';
    
    public function addRoute($routePath, $routeCallback)
    {
        $this->routes[$routePath] = $routeCallback->bindTo($this, __CLASS__);
    }
    
    public function dispatch($currentPath)
    {
        foreach ($this->routes as $routePath => $callback) {
            if ($routePath === $currentPath) {
                $callback();
            }
        }
    
        // header('HTTP/1.1 ' . $this->responseStatus);
        // header('Content-type: ' . $this->responseContentType);
        // header('Content-length: ' . mb_strlen($this->responseBody));
        // echo $this->responseBody;
    }
}

$app = new App();
$app->addRoute('util/greet', function() {
    echo "<br>HELLO!<br>";
});

$app->addRoute('util/monitor', function() {
    echo $this->monitor.'<br>';
    $this->monitor = 'Ugy baszom szet ahogy akarom!<br>';
    echo $this->monitor;
});

$app->dispatch('sdaffa');
$app->dispatch('util/greet');
$app->dispatch('util/monitor');

?>