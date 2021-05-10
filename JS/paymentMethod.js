const paypal = document.getElementById('paypal');
const order = document.getElementById('order');
const creditValue = document.getElementById('credit');
const creditCardInfo = document.getElementById('credit-card-info');
console.log(paypal);

creditValue.addEventListener('click', () => {
  if (creditValue.checked) {
    creditCardInfo.style.display = 'block';
    order.innerHTML = 'Submit Order';
  } else {
    creditCardInfo.style.display = 'none';
  }
});

paypal.addEventListener('click', () => {
  if (paypal.checked) {
    creditCardInfo.style.display = 'none';
    order.innerHTML = 'PayPal';
  } else {
    creditCardInfo.style.display = 'block';
  }
});
