function numberToAccountingString(number) {
  if (number == null) return;
  return number < 0 
  ? `(${Math.abs(number)})` 
  : number.toString();
}
console.log(numberToAccountingString(null));
console.log(numberToAccountingString());
console.log(numberToAccountingString(5));
console.log(numberToAccountingString(-5));
