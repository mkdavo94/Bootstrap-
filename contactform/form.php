<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

if (mail("cobysshack@gmail.com", "COBYSSHACK", "Name".$name.". E-mail: ".$email."Message:".$message ,"From: examp@mail.ru \r\n"))
{     echo "The message has been sent ";
} else {
    echo "The message has not sent";
}?>