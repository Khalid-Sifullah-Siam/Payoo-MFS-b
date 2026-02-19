const sendMoneyBtn = PayooUtils.byId("send-money-btn");
const sendMoneyMainBtn = PayooUtils.byId("send-money-btn-main");

sendMoneyBtn.addEventListener("click", () => {
  PayooUtils.toggleSection("send-money-section");
});

sendMoneyMainBtn.addEventListener("click", () => {
  const accountNo = PayooUtils.validateFixedDigits(
    "user-account-number",
    "User account number",
    PayooUtils.ACCOUNT_NUMBER_LENGTH
  );
  if (accountNo === null) return;

  const amount = PayooUtils.validateAmount("amount-to-send", "send");
  if (amount === null) return;

  if (!PayooUtils.validatePin("pin-for-send-money")) return;

  if (!PayooUtils.updateBalance(-amount)) return;
  alert("Send Money successful!");
});
