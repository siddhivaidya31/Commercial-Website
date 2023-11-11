function SendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "patilabhishekn@gmail.com",
        Password : "Abhishek@123",
        To : "patilabhishekn@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );  
}    