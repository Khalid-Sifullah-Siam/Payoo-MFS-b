document.getElementById("cashout-btn").addEventListener("click", function() {
    document.getElementById('cashout-section').classList.remove("hidden");   
    document.getElementById('add-money-section').classList.add("hidden");   
    document.getElementById('send-money-section').classList.add("hidden");
    document.getElementById('get-bonus-section').classList.add("hidden");
    document.getElementById('pay-bill-section').classList.add("hidden");



});

document.getElementById("cashout-btn-main").addEventListener("click", function() {
    if(document.getElementById('agent-number').value === "") {
        alert("Please enter an agent number.");
        return;
    }
    else if(document.getElementById('agent-number').value.length !== 11) {
        alert("Agent number must be 11 digits.");
        return;
    }
   
    if(document.getElementById("amount-to-cashout").value === "") {
        alert("Please enter an amount to cashout.");
        return;
    }
    else if(isNaN(document.getElementById("amount-to-cashout").value)) {
        alert("Please enter a valid amount.");
        return;
    }

       
 if(document.getElementById("pin-for-cashout").value.length !== 4) {
        alert("Pin number must be 4 digits.");
        return;
    }
    else if(document.getElementById("pin-for-cashout").value !== '1234') {
        alert("Invalid pin number.");
        return;
    }
 

   document.getElementById("current-balance").innerText = "$" + (parseFloat(document.getElementById("current-balance").innerText.replace("$", "")) - parseFloat(document.getElementById("amount-to-cashout").value));
   
   alert('Cashout successful!');
});