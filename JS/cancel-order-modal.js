const openModalButtonssss = document.querySelectorAll('[data-modal-target]');
const closeModalButtonssss = document.querySelectorAll('[data-close-button]');
const overlayssss = document.getElementById('overlay');

openModalButtonssss.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtonssss.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-cancel-order'); //select parent element html
    closeModal(modal);
  });
});

overlayssss.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-cancel-order.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

function openModal(modal) {
  // if(modal == null){
  //     return
  // }
  if (modal == null) return;
  modal.classList.add('active');
  overlayssss.classList.add('active');
}

function closeModal(modal) {
  // if(modal == null){
  //     return
  // }
  if (modal == null) return;
  modal.classList.remove('active');
  overlayssss.classList.remove('active');
}
