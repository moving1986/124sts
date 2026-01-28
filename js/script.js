document.addEventListener('DOMContentLoaded', function() {
    const contactModal = document.querySelector('.contact-modal');
    const contPhone = document.querySelector('.cont-phone');
        contPhone.addEventListener('click', () => {
                contactModal.classList.toggle('hidden');
        });


    const catProduct = document.querySelector('.cat-products');
    const modalCatalog = document.querySelector('.modal-catalog');

    catProduct.addEventListener('click', () => {
        modalCatalog.classList.toggle('hidden');
    });
});