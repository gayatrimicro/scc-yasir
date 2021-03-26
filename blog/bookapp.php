


<?php
// var_dump($_FILES);
// die();

include "mailer/vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;


	/*---------*/
	 $sbname = $_POST["namebook"];
	 $sbmail = $_POST["emailbook"];
 	 $spbook  = $_POST["phonebook"];
	 $symbox= $_POST["symtombook"];


	
	
	$from_smail = "fe@gmicro.us";
	$doc_smail = "Dr. Yasir Yaqub";

	$smessage= "<table border='0' cellpadding='4' cellspacing='4' width='100%'>

				  <tr><td style='font-size:1.3em;' colspan='2'><strong>Appointment details</strong></td></tr>
				   <tr>
					   <td align='left' width='35%'><strong>Name :</strong></td>
					   <td align='left' width='60%'>
					   ".  $sbname."</td>
					 </tr>

					  <tr>
					   <td align='left' width='35%'><strong>Email Address :</strong></td>
					   <td align='left' width='60%'>
					   ".  $sbmail ."</td>
					 </tr>

					 <tr>
					   <td align='left' width='35%'><strong>Phone Number :</strong></td>
					   <td align='left' width='60%'>
					   ".  $spbook ."</td>
					 </tr>


					 <tr>
					   <td align='left' width='35%'><strong>Message:</strong></td>
					   <td align='left' width='60%'>
					    ".  $symbox ."</td>
					 </tr>

					

					 
				   </table>";


				   

$mail = new PHPMailer(true);

try {
//From email address and name
$mail->From = $from_smail;
$mail->FromName = $doc_smail;

//To address and name
// $mail->addAddress("kalpesh@specialtycareclinics.com", "User Details");
$mail->addAddress("content@gmicro.us", "User Details");
// $mail->addAddress("seo@gmicro.us", "User Details");

	// var_dump($_POST);
	// exit();
//$mail->isSMTP();                                            // Send using SMTP
$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
$mail->Username   = 'fe@gmicro.us';                     // SMTP username
$mail->Password   = 'Ibridge@gws55';                               // SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
$mail->Port       = 587;
	 
$mail->isHTML(true);
$mail->Subject = "Referral Form";
$mail->Body = $smessage;

	$mail->send();
	 // $location = $_POST["location"];

	 
	
	// $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
	// $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";
	
		 
				  
		//if(mail("content@gmicro.us, fe@gmicro.us", $subject, $smessage, $headers))
		echo "Your enquiry has been sent successfully..";
	} catch (Exception $e) {
		echo $e;
		echo "Something went wrong";	 
		}

		
		//$msg = "Your enquiry has been sent successfully.";
		
	
?>