const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlays = document.getElementById('overlay');

openModalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-get'); //select parent element html
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-get.active');
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
  overlays.classList.add('active');
}

function closeModal(modal) {
  // if(modal == null){
  //     return
  // }
  if (modal == null) return;
  modal.classList.remove('active');
  overlays.classList.remove('active');
}
