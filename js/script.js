document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const phone = document.querySelector('.cont-phone');
    const modal = document.querySelector('.contact-modal');
    const catalog = document.querySelector('.cat-products');
    const catalogModal = document.querySelector('.modal-catalog');
    const adaptCatalogModal = document.querySelector('.ico-cat-menu');
    
    if (!phone || !modal || !catalog || !catalogModal || !adaptCatalogModal) {
        console.warn('Не все элементы найдены');
        return;
    }
    
  
    function closeAllModals() {
        modal.classList.add('hidden');
        catalogModal.classList.add('hidden');
    }
    
    // Обработчик для телефона
    phone.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        catalogModal.classList.add('hidden'); // закрываем каталог
        modal.classList.toggle('hidden'); // открываем/закрываем контакты
    });
    
    // Обработчик для каталога
    catalog.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        modal.classList.add('hidden'); // закрываем контакты
        catalogModal.classList.toggle('hidden'); // открываем/закрываем каталог
    });

    adaptCatalogModal.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        modal.classList.add('hidden'); // закрываем контакты
        catalogModal.classList.toggle('hidden'); // открываем/закрываем каталог
    });
    
    // Закрытие при клике вне модальных окон
    document.addEventListener('click', function(e) {
        if (!modal.contains(e.target) && !phone.contains(e.target)) {
            modal.classList.add('hidden');
        }
        if (!catalogModal.contains(e.target) && !catalog.contains(e.target)) {
            catalogModal.classList.add('hidden');
        }
    });
    
    // Предотвращаем закрытие при клике внутри модальных окон
    modal.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    catalogModal.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});