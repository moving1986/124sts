document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const phone = document.querySelector('.cont-phone');
    const modal = document.querySelector('.contact-modal');
    const catalog = document.querySelector('.cat-products');
    const catalogModal = document.querySelector('.modal-catalog');

    const contactModal = document.querySelector('.ico-call-header');
    const contactModalAdaptive = document.querySelector('.modal-contact-overlay-adaptive');
    const closeContactModal = document.querySelector('.modal-contact-close-adaptive');

    const adaptMainMenu = document.querySelector('.ico-main-menu');
    const adaptiveMainMenuModal = document.querySelector('.modal-main-menu-overlay-adaptive');
    const closeMainMenuModal = document.querySelector('.modal-main-menu-close-adaptive');

    const buttonAdaptCatlogModal = document.querySelector('.button-cut-product-adaptive');
    const adaptCatalogModal = document.querySelector('.modal-catalog-overlay-adaptive');
    const closeAdaptCatalog = document.querySelector('.modal-close-adaptive');




    if (!phone || !modal || !catalog || !catalogModal || !adaptCatalogModal || !closeContactModal) {
        console.warn('Не все элементы найдены');
        return;
    }


    function closeAllModals() {
        modal.classList.add('hidden');
        catalogModal.classList.add('hidden');
    }

    // Обработчик для телефона
    phone.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        catalogModal.classList.add('hidden'); // закрываем каталог
        modal.classList.toggle('hidden'); // открываем/закрываем контакты
    });

    // Обработчик для каталога
    catalog.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        modal.classList.add('hidden'); // закрываем контакты
        catalogModal.classList.toggle('hidden'); // открываем/закрываем каталог
    });


    // Обработчик для каталога адаптив
    buttonAdaptCatlogModal.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        adaptiveMainMenuModal.classList.add('hidden');
        adaptCatalogModal.classList.toggle('hidden');
    });

    // Обработчик для главного меню адаптив
    adaptMainMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        adaptiveMainMenuModal.classList.toggle('hidden');
    });

    // Обработчик для контактов адаптив
    contactModal.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        contactModalAdaptive.classList.toggle('hidden');
    });


    // Закрытие модального окна контактов при клике на крестик 
    closeContactModal.addEventListener('click', () => {
        contactModalAdaptive.classList.add('hidden');
    });


    // Закрытие модального окна каталога при клике на крестик 
    closeAdaptCatalog.addEventListener('click', () => {
        adaptCatalogModal.classList.add('hidden');
    });


    // Закрытие модального окна главного меню при клике на крестик 
    closeMainMenuModal.addEventListener('click', () => {
        adaptiveMainMenuModal.classList.add('hidden');
    });


    // Закрытие при клике вне модальных окон
    document.addEventListener('click', function (e) {
        if (!modal.contains(e.target) && !phone.contains(e.target)) {
            modal.classList.add('hidden');
        }
        if (!catalogModal.contains(e.target) && !catalog.contains(e.target)) {
            catalogModal.classList.add('hidden');
        }
    });

    // Предотвращаем закрытие при клике внутри модальных окон
    modal.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    catalogModal.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});