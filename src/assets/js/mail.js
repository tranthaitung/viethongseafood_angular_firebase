function sendEmail() {
var fullname = document.forms["submit"]["username"].value;
var email = document.forms["submit"]["email"].value;
var phone = document.forms["submit"]["phone"].value;
var subject = document.forms["submit"]["subject"].value;
var message = document.forms["submit"]["message"].value;

  const emailTemplate = `
      <p>Dear Sir / Madam,</p>
      <br>
      <p>You have a new message from Yew Construction website:</p>
      <br>
      <p><strong>Name</strong>: ${fullname}</p>
      <p><strong>Email</strong>: ${email}</p>
      <p><strong>Phone</strong>: ${phone}</p>
      <p><strong>Enquiry</strong>: ${message}</p>
      <br>
      <p>Regards, </p>
      <p>Do_Not_Reply</p>`;

	Email.send({
	Host: "smtp.gmail.com",
	Username : "yewconstruction@gmail.com",
	Password : "yewconst123",
	To : 'yewconstruction@gmail.com, kieu.hang@yewconstruction.com.au',
	From : "yewconstruction@gmail.com",
	Subject :subject,
	Body : emailTemplate,
	}).then(
		message => alert("Mail Sent Successfully")
	);
}

function sendEmail2() {
var fullname = document.forms["submit"]["username"].value;
var email = document.forms["submit"]["email"].value;
var phone = document.forms["submit"]["phone"].value;
var subject = "Customer Enquiry";
var message = document.forms["submit"]["message"].value;

 // get the reference for the body
  const emailTemplate = `
      <p>Dear Sir / Madam,</p>
      <br>
      <p>You have a new message from Yew Construction website:</p>
      <br>
      <p><strong>Name</strong>: ${fullname}</p>
      <p><strong>Email</strong>: ${email}</p>
      <p><strong>Phone</strong>: ${phone}</p>
      <p><strong>Enquiry</strong>: ${message}</p>
      <br>
      <p>Regards, </p>
      <p>Do_Not_Reply</p>`;

	Email.send({
	Host: "smtp.gmail.com",
	Username : "yewconstruction@gmail.com",
	Password : "yewconst123",
	To : 'yewconstruction@gmail.com, kieu.hang@yewconstruction.com.au',
	From : "yewconstruction@gmail.com",
	Subject :subject,
	Body : emailTemplate,
	}).then(
		message => alert("Mail Sent Successfully")
	);
}