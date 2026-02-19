(() => {
  const SECTION_IDS = [
    "add-money-section",
    "cashout-section",
    "send-money-section",
    "get-bonus-section",
    "pay-bill-section",
  ];

  const BALANCE_ID = "current-balance";
  const VALID_PIN = "1234";
  const ACCOUNT_NUMBER_LENGTH = 11;
  const PIN_LENGTH = 4;

  function byId(id) {
    return document.getElementById(id);
  }

  function toggleSection(activeSectionId) {
    SECTION_IDS.forEach((sectionId) => {
      const section = byId(sectionId);
      if (!section) return;
      section.classList.toggle("hidden", sectionId !== activeSectionId);
    });
  }

  function parseAmount(value) {
    const amount = Number(value);
    return Number.isFinite(amount) ? amount : NaN;
  }

  function getBalance() {
    const text = byId(BALANCE_ID)?.innerText || "$0";
    const numericText = text.replace(/[^0-9.-]/g, "");
    const amount = parseAmount(numericText);
    return Number.isFinite(amount) ? amount : 0;
  }

  function setBalance(amount) {
    byId(BALANCE_ID).innerText = `$${amount.toFixed(2)}`;
  }

  function updateBalance(delta) {
    const nextBalance = getBalance() + delta;
    if (nextBalance < 0) {
      alert("Insufficient balance.");
      return false;
    }
    setBalance(nextBalance);
    return true;
  }

  function requiredValue(inputId, message) {
    const value = byId(inputId)?.value.trim() || "";
    if (!value) {
      alert(message);
      return null;
    }
    return value;
  }

  function validateFixedDigits(inputId, fieldName, length) {
    const value = requiredValue(inputId, `Please enter ${fieldName}.`);
    if (value === null) return null;
    if (!new RegExp(`^\\d{${length}}$`).test(value)) {
      alert(`${fieldName} must be ${length} digits.`);
      return null;
    }
    return value;
  }

  function validateAmount(inputId, actionName) {
    const value = requiredValue(inputId, `Please enter an amount to ${actionName}.`);
    if (value === null) return null;
    const amount = parseAmount(value);
    if (!Number.isFinite(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return null;
    }
    return amount;
  }

  function validatePin(inputId) {
    const pin = validateFixedDigits(inputId, "Pin number", PIN_LENGTH);
    if (pin === null) return false;
    if (pin !== VALID_PIN) {
      alert("Invalid pin number.");
      return false;
    }
    return true;
  }

  function validateSelection(selectId, disallowedValues, message) {
    const value = byId(selectId)?.value || "";
    if (!value || disallowedValues.includes(value)) {
      alert(message);
      return false;
    }
    return true;
  }

  window.PayooUtils = {
    ACCOUNT_NUMBER_LENGTH,
    byId,
    toggleSection,
    updateBalance,
    validateAmount,
    validateFixedDigits,
    validatePin,
    validateSelection,
  };
})();
