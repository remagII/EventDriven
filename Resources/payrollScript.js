// EARNINGS SECTION

$("#regular-pay").change(function () {
  callGrossEarnings();
});

$("#overtime-pay").change(function () {
  callGrossEarnings();
});

var regularPay = $("#regular-pay");
var overtimePay = $("#overtime-pay");
var grossEarnings = $("#gross-earnings");

var totalGrossEarnings = 0;

function callGrossEarnings() {
  if (regularPay.val() == "") {
    return false;
  } else if (overtimePay.val() == "") {
    return false;
  } else {
    totalGrossEarnings = Number(regularPay.val()) + Number(overtimePay.val());

    grossEarnings.val(totalGrossEarnings.toFixed(2));
  }
}

// DEDUCTIONS SECTION

$("#other-deduction").change(function () {
  callTotalDeduction();
  callNetPay();
});

var otherDeduction = $("#other-deduction");
var totalDeductions = $("#total-deductions");
var deductions = 0;

function callTotalDeduction() {
  if (otherDeduction.val() == "") {
    return false;
  } else {
    deductions =
      totalGrossEarnings * 0.115 + 500 + Number(otherDeduction.val());

    totalDeductions.val(deductions.toFixed(2));
  }
}

// NET PAY SECTION

var netPay = $("#net-pay");
var netPayFormula = 0;

function callNetPay() {
  if (totalDeductions.val() == "") {
    return false;
  } else {
    netPayFormula = totalGrossEarnings - deductions;
    netPay.val(netPayFormula.toFixed(2));
    console.log(netPayFormula);
  }
}
4;
