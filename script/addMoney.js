const addMoneyBtn = PayooUtils.byId("add-money-btn");
const addMoneyMainBtn = PayooUtils.byId("add-money-btn-main");

addMoneyBtn.addEventListener("click", () => {
  PayooUtils.toggleSection("add-money-section");
});

addMoneyMainBtn.addEventListener("click", () => {
  if (!PayooUtils.validateSelection("select", ["Select Bank"], "Please select a bank.")) return;

  const accountNo = PayooUtils.validateFixedDigits(
    "bank-account-number",
    "Bank account number",
    PayooUtils.ACCOUNT_NUMBER_LENGTH
  );
  if (accountNo === null) return;

  const amount = PayooUtils.validateAmount("amount-to-add", "add");
  if (amount === null) return;

  if (!PayooUtils.validatePin("pin-for-add-money")) return;

  PayooUtils.updateBalance(amount);
  alert("Money added successfully!");
});
