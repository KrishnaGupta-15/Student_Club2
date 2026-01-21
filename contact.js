document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill all the fields!";
        return;
    }

   
  

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";

    
    document.getElementById("contactForm").reset();
});
