const calculateChange = function(total, cash) {
  let change = {}; 
  let difference = cash - total; 

  if (difference >= 2000) {
    change.twentyDollar = parseInt(difference / 2000); 
    difference -= change.twentyDollar * 2000 
  }

  if (difference >= 1000) {
    change.tenDollar = parseInt(difference / 1000); 
    difference -= change.tenDollar * 1000 
  }

  if (difference >= 500) {
    change.fiveDollar = parseInt(difference / 500); 
    difference -= change.fiveDollar * 500
  }

  if (difference >= 200) {
    change.twoDollar = parseInt(difference / 200); 
    difference -= change.twoDollar * 200
  }

  if (difference >= 100) {
    change.oneDollar = parseInt(difference / 100); 
    difference -= change.oneDollar * 100
  }

  if (difference >= 25) {
    change.quarter = parseInt(difference / 25); 
    difference -= change.quarter * 25
  }

  if (difference >= 10) {
    change.dime = parseInt(difference / 10); 
    difference -= change.dime * 10
  }

  if (difference >= 5) {
    change.nickel = parseInt(difference / 5); 
    difference -= change.nickel * 5
  }

  if (difference >= 1) {
    change.penny = parseInt(difference / 1); 
    difference -= change.penny * 1
  }

  return change; 
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//Expected output 

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }