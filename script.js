// 1. Link HTML elements to JavaScript variables
const form = document.getElementById('regForm');
const messageBox = document.getElementById('message');
const passwordInput = document.getElementById('password');
const toggleCheckbox = document.getElementById('togglePassword');

// 2. Run this as soon as the app opens
window.onload = function() {
    const savedName = localStorage.getItem('registeredUser');
    if (savedName) {
        messageBox.innerText = "Welcome back, " + savedName + "!";
    }
};

// 3. Password Show/Hide Toggle
toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// 4. Handle Registration Form Submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from refreshing

    const name = document.getElementById('username').value;
    
    // Save to Phone Memory (LocalStorage)
    localStorage.setItem('registeredUser', name);

    messageBox.innerText = "Registration successful! Welcome, " + name + ".";
    form.reset();
});

// 5. Function to delete the memory
function clearData() {
    localStorage.clear();
    location.reload(); // Refresh screen
}
passwordInput.addEventListener('input', function() {
    const val = passwordInput.value;
    const meter = document.getElementById('strength-meter');
    const text = document.getElementById('strength-text');
    
    if (val.length === 0) {
        meter.style.width = "0%";
        text.innerText = "";
    } else if (val.length <= 4) {
        meter.style.width = "30%";
        meter.style.background = "red";
        text.innerText = "Weak";
        text.style.color = "red";
    } else if (val.length <= 8) {
        meter.style.width = "60%";
        meter.style.background = "orange";
        text.innerText = "Medium";
        text.style.color = "orange";
    } else {
        meter.style.width = "100%";
        meter.style.background = "green";
        text.innerText = "Strong";
        text.style.color = "green";
    }
});
