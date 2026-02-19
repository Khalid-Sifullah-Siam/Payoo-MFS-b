const cashoutBtn = PayooUtils.byId("cashout-btn");
const cashoutMainBtn = PayooUtils.byId("cashout-btn-main");

cashoutBtn.addEventListener("click", () => {
  PayooUtils.toggleSection("cashout-section");
});

cashoutMainBtn.addEventListener("click", () => {
  const agentNo = PayooUtils.validateFixedDigits(
    "agent-number",
    "Agent number",
    PayooUtils.ACCOUNT_NUMBER_LENGTH
  );
  if (agentNo === null) return;

  const amount = PayooUtils.validateAmount("amount-to-cashout", "cash out");
  if (amount === null) return;

  if (!PayooUtils.validatePin("pin-for-cashout")) return;

  if (!PayooUtils.updateBalance(-amount)) return;
  alert("Cashout successful!");
});
