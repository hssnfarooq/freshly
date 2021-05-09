const cartBtn = document.getElementById('cart-btn-resp');
console.log(cartBtn);
const specialCart = document.getElementById('special-cart-section');
console.log(specialCart);

let btn = true;

cartBtn.addEventListener('click', () => {
  if (btn) {
    specialCart.style.display = 'block';
    return (btn = false);
  }
  specialCart.style.display = 'none';
  return (btn = true);
});
