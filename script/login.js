const loginBtn = document.getElementById("login-btn");
const mobileInput = document.getElementById("mobile-number");
const pinInput = document.getElementById("4-digit-pin");

const DEMO_MOBILE = "12345678901";
const DEMO_PIN = "1234";

loginBtn.addEventListener("click", () => {
  const mobile = mobileInput.value.trim();
  const pin = pinInput.value.trim();

  if (mobile === DEMO_MOBILE && pin === DEMO_PIN) {
    alert("Login successful!");
    location.assign("home.html");
    return;
  }

  alert("Invalid mobile number or PIN.");
});
