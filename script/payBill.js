document.getElementById("pay-bill-btn").addEventListener("click", function() {
    document.getElementById("pay-bill-section").classList.remove("hidden");
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("send-money-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
});

document.getElementById("pay-bill-btn-main").addEventListener("click", function() {
    if (document.getElementById("select-pay-bill").value === "Select Back") {
        alert("Please select a bill type.");
        return;
    }

    if (document.getElementById("biller-account-number").value === "") {
        alert("Please enter a biller account number.");
        return;
    }
    else if (document.getElementById("biller-account-number").value.length !== 11) {
        alert("Biller account number must be 11 digits.");
        return;
    }

    if (document.getElementById("amount-to-pay").value === "") {
        alert("Please enter an amount to pay.");
        return;
    }
    else if (isNaN(document.getElementById("amount-to-pay").value)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (document.getElementById("pin-for-pay-bill").value.length !== 4) {
        alert("Pin number must be 4 digits.");
        return;
    }
    else if (document.getElementById("pin-for-pay-bill").value !== "1234") {
        alert("Invalid pin number.");
        return;
    }

    document.getElementById("current-balance").innerText = "$" + (
        parseFloat(document.getElementById("current-balance").innerText.replace("$", "")) -
        parseFloat(document.getElementById("amount-to-pay").value)
    );

    alert("Pay Bill successful!");
});
