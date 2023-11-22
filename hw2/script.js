// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.
// Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое,
// и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const btnNext = document.querySelector('.btnNext');
const btnPrevious = document.querySelector('.btnPrevious');
btnNext.textContent = "Вперед";
btnPrevious.textContent = "Назад";

const slider = document.querySelector('.slide');
const slideItems = Array.from(slider.children);

slideItems.forEach((slide, index) => {
    if (index!==0) {
        slide.classList.add('hidden');
    }
    slide.dataset.index=index;
    slideItems[0].setAttribute('data-active', '');

    slide.addEventListener('click',() => showNextSlide("next"));

})

btnNext.addEventListener('click', () => showNextSlide("next"))
btnPrevious.addEventListener('click', () => showNextSlide("previous"))

function showNextSlide(direction) {
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;

    if (direction === "next") {
        nextSlideIndex = currentSlideIndex + 1 === slideItems.length ?  0 : currentSlideIndex + 1;
    } else if (direction === "previous"){
        nextSlideIndex = currentSlideIndex === 0 ?  slideItems.length-1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}