document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-field");
  const previousWithdrawAmount = getElementValueById("withdraw-total");
  const previousBalance = getElementValueById("balance-total");
  const newBalanceTotal = previousBalance - newWithdrawAmount;
  if (newWithdrawAmount > previousBalance) {
    alert("you do not have sufficiant balance");
    return;
  }
  const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  setTextElementValueById("balance-total", newBalanceTotal);
});

// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   const withdrawField = document.getElementById("withdraw-field");
//   const newWithdrawAmountString = withdrawField.value;
//   const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//   const withdrawTotalElement = document.getElementById("withdraw-total");
//   const previousWithdrawTotalString = withdrawTotalElement.innerText;
//   const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);

//   const previousBalanceTotalElement = document.getElementById("balance-total");
//   const previousBalanceTotalString = previousBalanceTotalElement.innerText;
//   const previousBalance = parseFloat(previousBalanceTotalString);
//   withdrawField.value = "";

//   const currentBalance = previousBalance - newWithdrawAmount;

//   if (newWithdrawAmount > previousBalance) {
//     alert("taka nai");
//     return;
//   }
//   const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
//   withdrawTotalElement.innerText = currentWithdrawAmount;
//   previousBalanceTotalElement.innerText = currentBalance;
// });
