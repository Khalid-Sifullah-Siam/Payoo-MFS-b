const getBonusBtn = PayooUtils.byId("get-bonus-btn");
const getBonusMainBtn = PayooUtils.byId("get-bonus-btn-main");

getBonusBtn.addEventListener("click", () => {
  PayooUtils.toggleSection("get-bonus-section");
});

getBonusMainBtn.addEventListener("click", () => {
  const coupon = PayooUtils.byId("bonus-coupon").value.trim();
  if (!coupon) {
    alert("Please enter a bonus coupon.");
    return;
  }

  alert("Bonus coupon applied!");
});
