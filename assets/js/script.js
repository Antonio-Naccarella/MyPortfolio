function sendMail(){
    var params = {
        name: document.getElementById("name").value ,    
        email: document.getElementById("email").value ,    
        message: document.getElementById("message").value , 
    }
    
    emailjs.send("service_w9vls7i", "template_4alwtft", params).then(alert("Messaggio inviato!"));
}