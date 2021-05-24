const leftSide = document.querySelector('.parent-sides .child-left-side');
const calenderSub = document.querySelector('.calender-sub');
const backBtn = document.querySelector('.back-btn');
const rightSide = document.querySelector('.parent-sides .child-right-side');

calenderSub.addEventListener('click', () => {
  rightSide.style.display = 'block';
  leftSide.style.display = 'none';
});

backBtn.addEventListener('click', () => {
  rightSide.style.display = 'none';
  leftSide.style.display = 'block';
});
