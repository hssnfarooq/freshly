const openModalButtonsss = document.querySelectorAll('[data-modal-target]');
const closeModalButtonsss = document.querySelectorAll('[data-close-button]');
const overlaysss = document.getElementById('overlay');

openModalButtonsss.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtonsss.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-subscription'); //select parent element html
    closeModal(modal);
  });
});

overlaysss.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-subscription.active');
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
  overlaysss.classList.add('active');
}

function closeModal(modal) {
  // if(modal == null){
  //     return
  // }
  if (modal == null) return;
  modal.classList.remove('active');
  overlaysss.classList.remove('active');
}
