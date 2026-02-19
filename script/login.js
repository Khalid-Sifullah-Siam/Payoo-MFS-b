document.getElementById("login-btn").addEventListener('click', () => {
    
    if(document.getElementById('mobile-number').value === '12345678901' && document.getElementById('4-digit-pin').value === '1234') {
        alert("Login successful!");
        location.assign('home.html')
    } else {
        alert("Invalid mobile number or PIN.");
    }
   
})