document.getElementById("btn-deposite").addEventListener("click", function () {
  const newDepositeAmount = getInputValueById("deposite-field");
  const previousDepositeAmount = getElementValueById("deposite-total");
  const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
  setTextElementValueById("deposite-total", newDepositeTotal);

  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});

// document.getElementById("btn-deposite").addEventListener("click", function () {
//   const depositeField = document.getElementById("deposite-field");
//   const newDepositeAmountString = depositeField.value;
//   const newDepositeAmount = parseFloat(newDepositeAmountString);

//   const depositeTotalElement = document.getElementById("deposite-total");
//   const previousDepositeTotalString = depositeTotalElement.innerText;
//   const previousDepositeAmount = parseFloat(previousDepositeTotalString);

//   const currentDepositeTotal = previousDepositeAmount + newDepositeAmount;
//   depositeTotalElement.innerText = currentDepositeTotal;

//   const previousBalanceTotalElement = document.getElementById("balance-total");
//   const previousBalanceTotalString = previousBalanceTotalElement.innerText;
//   const previousBalance = parseFloat(previousBalanceTotalString);

//   const currentBalance = previousBalance + newDepositeAmount;
//   previousBalanceTotalElement.innerText = currentBalance;
//   depositeField.value = "";
// });
