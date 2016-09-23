var player = document.getElementById("player");
var list = document.getElementById("list");

list.addEventListener("click", function(e) {
    if (e.target.nodeName == "LI") {
        console.log(e.target.dataset.src);
        player.src = e.target.dataset.src;
        player.play();
    }
}, false);

/*
* Доработать аудио проигрыватель
* сделать прогресс бар, перемотку, регулятор громкости
* поставить иконки play, pause, stop https://www.iconfinder.com/
* */
