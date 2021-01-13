let offset = 0; // Позиция в слайдере
const sliderLine = document.querySelector('.slider-line'); // Полоса с картинками


// Для переключателя next
document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

// Для переключателя prev
document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});
