/// <reference path="jquery.d.ts"/>
var billAmount;
var tipPercent;
var tipAmount;
var totalAmount;
function calculate() {
    // Load info
    this.loadInput();
    if(this.billAmount && this.tipPercent) {
        // Calculate totals and print values if amounts are valid
        this.calculateTipTotal();
        $("#tipAmountText").val(this.tipAmount.toFixed(2).toString());
        $("#totalText").val(this.totalAmount.toFixed(2).toString());
    } else {
        // Nothing or NaN results
        $("#tipAmountText").val("--");
        $("#totalText").val("--");
    }
}
function loadInput() {
    // Load the bill amount
    this.billAmount = parseFloat($("#billAmountText").val());
    // Load the tip %
    this.tipPercent = parseFloat($("#tipPercentText").val());
}
function calculateTipTotal() {
    this.tipAmount = this.billAmount * (0.01 * this.tipPercent);
    this.totalAmount = this.billAmount + this.tipAmount;
}
//@ sourceMappingURL=calculator.js.map
