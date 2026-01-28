document.addEventListener('DOMContentLoaded', function() {
    const contactModal = document.querySelector('.contact-modal');
    const contPhone = document.querySelector('.cont-phone');
        contPhone.addEventListener('click', () => {
                contactModal.classList.toggle('hidden');
        });


});