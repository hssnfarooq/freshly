const cartBtn = document.getElementById('cart-btn-resp');
const specialCart = document.getElementById('special-cart-section');

let btn = true;

cartBtn.addEventListener('click', () => {
  if (btn) {
    console.log('hello');
    specialCart.style.display = 'block';
    return (btn = false);
  }
  specialCart.style.display = 'none';
  return (btn = true);
});

// window.onload = function(){
//   document.onclick = function(e){
//     if(e.target.id !== 'special-cart-section'){
//       specialCart.style.display = 'none';
//     }
//   };
// };
