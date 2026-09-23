function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seating) {
  let total = quantity * basePrice;

  if (seating === 'premium') {
    total = total * 1.50;
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };