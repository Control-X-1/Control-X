document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos del carrusel
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.card-product');
    const itemCount = items.length;
    
    // Asume que todos los elementos tienen el mismo tamaño
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    let currentIndex = 0;
    
    // Ajusta el ancho total del carrusel
    function updateCarouselWidth() {
        carousel.style.width = `${itemWidth * itemCount}px`;
    }

    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function showNext() {
        if (currentIndex < itemCount - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    // Ajusta el tamaño del carrusel cuando se redimensiona la ventana
    window.addEventListener('resize', () => {
        // Recálcula el ancho del item y el ancho total del carrusel
        updateCarouselWidth();
        updateCarousel();
    });

    // Ajusta el ancho del carrusel al inicio
    updateCarouselWidth();
    updateCarousel();
});

