function calculate() {
  // Get input values
  const buyPrice = parseFloat(document.getElementById("buyPrice").value);
  const sellPrice = parseFloat(document.getElementById("sellPrice").value);
  const quantity = parseFloat(document.getElementById("quantity").value);
  const brokerageRate =
    parseFloat(document.getElementById("brokerage").value) / 100;
  const taxRate = parseFloat(document.getElementById("taxRate").value) / 100;

  // Validate inputs
  if (isNaN(buyPrice) || isNaN(sellPrice) || isNaN(quantity)) {
    alert(
      "Please enter valid numbers for Buy Price, Sell Price, and Quantity."
    );
    return;
  }

  // Calculate gross profit/loss
  const grossProfit = (sellPrice - buyPrice) * quantity;

  // Calculate brokerage fee
  const brokerageFee = (buyPrice + sellPrice) * quantity * brokerageRate;

  // Calculate tax amount
  const taxAmount = grossProfit > 0 ? grossProfit * taxRate : 0;

  // Calculate net profit/loss
  const netProfit = grossProfit - brokerageFee - taxAmount;

  // Display results
  document.getElementById("grossResult").textContent = `₹${grossProfit.toFixed(
    2
  )}`;
  document.getElementById(
    "brokerageResult"
  ).textContent = `₹${brokerageFee.toFixed(2)}`;
  document.getElementById("taxResult").textContent = `₹${taxAmount.toFixed(2)}`;
  document.getElementById("netResult").textContent = `₹${netProfit.toFixed(2)}`;
}
