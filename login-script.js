document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('loginEmail').value;
    const savedEmail = localStorage.getItem('userEmail'); // We need to make sure we saved this during registration!

    if (emailInput === savedEmail) {
        document.getElementById('loginMessage').innerText = "Login Successful! Welcome back.";
        document.getElementById('loginMessage').style.color = "green";
    } else {
        document.getElementById('loginMessage').innerText = "User not found. Please register first.";
        document.getElementById('loginMessage').style.color = "red";
    }
});
