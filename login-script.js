document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This stops the page from refreshing

    // 1. Get what the user typed in the login box
    const emailInput = document.getElementById('loginEmail').value;
    
    // 2. Get the email we saved earlier during registration
    const savedEmail = localStorage.getItem('userEmail');

    // 3. Compare them
    if (emailInput === savedEmail) {
        // If they match:
        document.getElementById('loginMessage').innerText = "Login Successful! Redirecting...";
        document.getElementById('loginMessage').style.color = "green";

        // Wait 1 second (1000 milliseconds) then go to the welcome page
        setTimeout(function() {
            window.location.href = "welcome.html"; 
        }, 1000);

    } else {
        // If they DON'T match:
        document.getElementById('loginMessage').innerText = "Email not found. Please register first.";
        document.getElementById('loginMessage').style.color = "red";
    }
});
