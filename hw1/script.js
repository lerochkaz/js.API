// Отслеживание изменения ориентации экрана:
// Напишите код, который отслеживает изменение ориентации экрана устройства 
// (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице.

// Предупреждение о несохраненных данных:
// Создайте веб-форму с текстовым полем. Реализуйте функционал, 
// при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, 
// но несохраненных данных.

"use strict";

const widthSize = document.querySelector('.width');
const heightSize = document.querySelector('.height');
const orientationWindow = document.querySelector('.orientation')

window.addEventListener("resize", () => {
    widthSize.textContent = `Ширина окна: ${window.innerWidth} px`;
    heightSize.textContent = `Высота окна: ${window.innerHeight} px`;
    if (window.innerWidth < window.innerHeight) {
        orientationWindow.textContent= "Портретная ориентация";
    } else {
        orientationWindow.textContent = "Альбомная ориентация";
    }
})

window.onbeforeunload = () => {
    return "Есть несохранённые изменения. Всё равно уходим?";
};
