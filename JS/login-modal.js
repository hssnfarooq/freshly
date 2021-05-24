const openModalButtonss = document.querySelectorAll('[data-modal-target]');
const closeModalButtonss = document.querySelectorAll('[data-close-button]');
const overlayss = document.getElementById('overlay');

openModalButtonss.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtonss.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-login'); //select parent element html
    closeModal(modal);
  });
});

overlayss.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-login.active');
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
  overlayss.classList.add('active');
}

function closeModal(modal) {
  // if(modal == null){
  //     return
  // }
  if (modal == null) return;
  modal.classList.remove('active');
  overlayss.classList.remove('active');
}
