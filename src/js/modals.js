export function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggerModalCallback = document.querySelectorAll(triggerSelector);
    const modalCallback = document.querySelector(modalSelector);
    const buttonClose = document.querySelector(closeSelector);
    //.js-modal-callback-trigger
    //.js-modal-callback
    //.js-button-close
    triggerModalCallback.forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
          modalCallback.style.display = 'flex';
          document.body.classList.add('js-modal-open')
        }
      });
    });
    buttonClose.addEventListener('click', function () {
      modalCallback.style.display = 'none';
      document.body.classList.remove('js-modal-open')
    });
    modalCallback.addEventListener('click', function (e) {
      if (e.target === modalCallback) {
        modalSelector.style.display = 'none';
        document.body.classList.remove('js-modal-open')
      }
    });
  }
  bindModal('.js-modal-callback-trigger', '.js-modal-callback', '.js-button-close')
}