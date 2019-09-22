<?php
$operator = $_GET["operator"] == " "? "+" : $_GET["operator"];
$op1 = $_GET["op1"];
$op2 = $_GET["op2"];
switch($operator) {
    case "+":
    echo $op1 + $op2;
    break;
    case "-":
    echo $op1 - $op2;
    break;
    case "*":
    echo $op1 * $op2;
    break;
    case "/":
    echo ($op2 != 0)? $op1 / $op2 : "ERROR";
    break;
}
?>