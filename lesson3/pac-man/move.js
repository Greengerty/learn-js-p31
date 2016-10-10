var player = document.getElementById("player");
var block = document.getElementById("block1");
//var SPEED = 5;

var STEP = 5;

document.onkeydown = function(e) {

    // down 40
    if(e.keyCode == 40) {

        if(!isBlock("down"))
            player.style.top = player.offsetTop + STEP + "px";

    }
    // up 38
    if(e.keyCode == 38) {

        if(!isBlock("up"))
            player.style.top = player.offsetTop - STEP + "px";

    }

    // left 37

    if(e.keyCode == 37) {

        if(isBlock("left")) {
            return;
        }

        player.style.left = player.offsetLeft - STEP + "px";

    }

    // right 39
    if(e.keyCode == 39) {

        if(!isBlock("right"))
            player.style.left = player.offsetLeft + STEP + "px";

    }
}


var isBlock = function(move) {

    switch(move) {
        case "up":

            if(
                (block.offsetTop + block.offsetHeight + STEP >= player.offsetTop &&
                block.offsetTop <= player.offsetTop) &&
                (block.offsetLeft <= player.offsetLeft + player.offsetWidth &&
                block.offsetLeft + block.offsetWidth >= player.offsetLeft
                    )
            ) {
                return true;
            }
            break;

        case "down":
            if(
                (block.offsetTop + block.offsetHeight + STEP >= player.offsetTop + player.offsetHeight &&
                block.offsetTop >= player.offsetTop) &&
                (block.offsetLeft <= player.offsetLeft + player.offsetWidth &&
                block.offsetLeft + block.offsetWidth >= player.offsetLeft
                )
            ) {
                return true;
            }
            break
    }

};



/**
 * Сделать игры
 * 1. Sneak
 * 2. Pac-man
 * 3. Лабиринт
 *
 *
 * - Разработать короткий алгоритм и структуру для определения стенок и препятствий.
 * - Сделать рефакторинг кода
 */