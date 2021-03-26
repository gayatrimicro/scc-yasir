


<?php
// var_dump($_FILES);
// die();

include "../mailer/vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;


	/*---------*/
	 $fname = $_POST["sFname"];
	 $lname = $_POST["sLname"];
 	 $emailid  = $_POST["sEmail"];
	 $pnumber= $_POST["sTelphone"];
	 $mbox= $_POST["sMessage"];


	
	
	$from_mail = "fe@gmicro.us";
	$doc_mail = "Dr. Yasir Yaqub";

	$message= "<table border='0' cellpadding='4' cellspacing='4' width='100%'>

				  <tr><td style='font-size:1.3em;' colspan='2'><strong>Appointment details</strong></td></tr>
				   <tr>
					   <td align='left' width='35%'><strong>Name :</strong></td>
					   <td align='left' width='60%'>
					   ".  $fname." - ".  $lname ."</td>
					 </tr>

					  <tr>
					   <td align='left' width='35%'><strong>Email Address :</strong></td>
					   <td align='left' width='60%'>
					   ".  $emailid ."</td>
					 </tr>

					 <tr>
					   <td align='left' width='35%'><strong>Phone Number :</strong></td>
					   <td align='left' width='60%'>
					   ".  $pnumber ."</td>
					 </tr>


					 <tr>
					   <td align='left' width='35%'><strong>Message:</strong></td>
					   <td align='left' width='60%'>
					    ".  $mbox ."</td>
					 </tr>

					

					 
				   </table>";


				   

$mail = new PHPMailer(true);

try {
//From email address and name
$mail->From = $from_mail;
$mail->FromName = $doc_mail;

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
$mail->Body = $message;

	$mail->send();
	 // $location = $_POST["location"];

	 
	
	// $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
	// $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";
	
		 
				  
		//if(mail("content@gmicro.us, fe@gmicro.us", $subject, $message, $headers))
		echo "Your enquiry has been sent successfully..";
	} catch (Exception $e) {
		echo $e;
		echo "Something went wrong";	 
		}

		
		//$msg = "Your enquiry has been sent successfully.";
		
	
?>