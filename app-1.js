function calculateVAT(price) {
  if (typeof price !== "number" || isNaN(price) || price <= 0) {
    return "Invalid";
  } else {
    const totalAmount = price * 7.5;
    const totalVat = totalAmount / 100;
    return totalVat;
  }
}

const price = calculateVAT(1500);
console.log(price);

/* function calculateVAT(price) {
  if (typeof price === "number" && !isNaN(price) && price > 0) {
    const totalAmount = price * 7.5;
    const totalVat = totalAmount / 100;
    return totalVat;
  } else {
    return "Invalid";
  }
}

const totalPrice = calculateVAT(200);
console.log(totalPrice); */
