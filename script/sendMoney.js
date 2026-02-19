document.getElementById("send-money-btn").addEventListener("click", function() {
    document.getElementById("send-money-section").classList.remove("hidden");
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
});

document.getElementById("send-money-btn-main").addEventListener("click", function() {
    if(document.getElementById('user-account-number').value === "") {
        alert("Please enter a user account number.");
        return;
    }
    else if(document.getElementById('user-account-number').value.length !== 11) {
        alert("User account number must be 11 digits.");
        return;
    }

       if(document.getElementById("amount-to-send").value === "") {
        alert("Please enter an amount to send.");
        return;
    }
    else if(isNaN(document.getElementById("amount-to-send").value)) {
        alert("Please enter a valid amount.");
        return;
    }

         
 if(document.getElementById("pin-for-send-money").value.length !== 4) {
        alert("Pin number must be 4 digits.");
        return;
    }
    else if(document.getElementById("pin-for-send-money").value !== '1234') {
        alert("Invalid pin number.");
        return;
    }

       document.getElementById("current-balance").innerText = "$" + (parseFloat(document.getElementById("current-balance").innerText.replace("$", "")) - parseFloat(document.getElementById("amount-to-send").value));
   
    alert('Send Money successful!');
});