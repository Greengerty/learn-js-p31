// Берем по id нашу голерею, и записываем ее в переменную
var gallery = document.getElementById("gallery");
// Записываем в переменную по id отображение картинки
var show = document.getElementById("show");

gallery.addEventListener("mousemove", function(e) {
    // проверяем тип обьекта
    if ( e.target.nodeName == 'IMG' ) {
        // отображаем блок картинки
        show.style.display = "block";
        // задаем позицию
        show.style.top = e.y + 10 + "px";
        show.style.left = e.x + 10 + "px";

        // выбираем изображение из блока c id="show"
        var image = show.querySelector('img');
        // переписываю путь к картинке
        image.src = e.target.attributes.src.nodeValue;
    }
    // функция отвода мыши с блока gallery
    e.target.addEventListener("mouseout",function (j) {
        show.style.display = "none"
    }, false)
}, false);




/**
 * Tеория learn.javascript.ru
 * Основы работы с событиями
 * События в деталях
 * Формы, элементы управления
 * Создание графических компонентов
 *
 * 1. Игра парные карты http://igroflot.ru/logic/flash_game_2470/
 * 2. Если картинка снизу экрана выводить ее над курсором
 * 3. Drag & drop http://www.elated.com/res/File/articles/development/javascript/jquery/drag-and-drop-with-jquery-your-essential-guide/card-game.html
 */



