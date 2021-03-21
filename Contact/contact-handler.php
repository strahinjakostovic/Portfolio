<?php 

$name = $_POST['firstname'];
$lname = $_POST['lastname']
$visitor_email = $_POST['email'];
$visitor_country =$_POST['country'];
$message = $_POST['message'];


$email_subject = "New Form Submission";
$email_body = "User Name: $name. \n",
                "User Last Name: $lname. \n",
                "User Email: $visitor_email.\n",
                "User Country: $visitor_country. \n",
                "User Message: $message. \n";

$to = "strax1337shiet@yahoo.com";

$headers = "From: $visitor_email \n\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>