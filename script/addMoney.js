document.getElementById("add-money-btn").addEventListener("click", function() {
    document.getElementById('add-money-section').classList.remove("hidden");
    document.getElementById('cashout-section').classList.add("hidden");
    document.getElementById('send-money-section').classList.add("hidden");
    document.getElementById('get-bonus-section').classList.add("hidden");
    document.getElementById('pay-bill-section').classList.add("hidden");


});

document.getElementById("add-money-btn-main").addEventListener("click", function() {
    if(document.getElementById('select').value === "Select Bank") {
        alert("Please select a bank.");
        return;
    }
    
    if(document.getElementById("bank-account-number").value === "") {
        alert("Please enter a bank account number.");
        return;
    }

    else if(document.getElementById("bank-account-number").value.length !== 11) {
        alert("Bank account number must be 11 digits.");
        return;
    }
   
    if(document.getElementById("amount-to-add").value === "") {
        alert("Please enter an amount to add.");
        return;
    }
    else if(isNaN(document.getElementById("amount-to-add").value)) {
        alert("Please enter a valid amount.");
        return;
    }

       
 if(document.getElementById("pin-for-add-money").value.length !== 4) {
        alert("Pin number must be 4 digits.");
        return;
    }
    else if(document.getElementById("pin-for-add-money").value !== '1234') {
        alert("Invalid pin number.");
        return;
    }
 

    document.getElementById("current-balance").innerText = "$" + (parseFloat(document.getElementById("current-balance").innerText.replace("$", "")) + parseFloat(document.getElementById("amount-to-add").value));
    alert("Money added successfully!");
   

});