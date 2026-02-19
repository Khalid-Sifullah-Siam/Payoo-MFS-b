const payBillBtn = PayooUtils.byId("pay-bill-btn");
const payBillMainBtn = PayooUtils.byId("pay-bill-btn-main");

payBillBtn.addEventListener("click", () => {
  PayooUtils.toggleSection("pay-bill-section");
});

payBillMainBtn.addEventListener("click", () => {
  if (
    !PayooUtils.validateSelection(
      "select-pay-bill",
      ["Select Back", "Select Bank", "Select Bill"],
      "Please select a bill type."
    )
  ) {
    return;
  }

  const accountNo = PayooUtils.validateFixedDigits(
    "biller-account-number",
    "Biller account number",
    PayooUtils.ACCOUNT_NUMBER_LENGTH
  );
  if (accountNo === null) return;

  const amount = PayooUtils.validateAmount("amount-to-pay", "pay");
  if (amount === null) return;

  if (!PayooUtils.validatePin("pin-for-pay-bill")) return;

  if (!PayooUtils.updateBalance(-amount)) return;
  alert("Pay Bill successful!");
});
