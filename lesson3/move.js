var block = document.getElementById("block");
var kv = document.getElementById("kv");


document.onkeydown = function(e) {

    // down 40
    if(e.keyCode == 40) {

        if(kv.offsetTop >= 540) {
            return;
        }
        kv.style.top = kv.offsetTop + 10 + "px";

    }
    // up 38
    if(e.keyCode == 38) {

        if(kv.offsetTop <= 0) {
            return;
        }
        kv.style.top = kv.offsetTop - 10 + "px";

    }

    // left 37

    if(e.keyCode == 37) {

        if(kv.offsetLeft <= 0) {
            return;
        }

        kv.style.left = kv.offsetLeft - 10 + "px";

    }

    // right 39
    if(e.keyCode == 39) {

        if(kv.offsetLeft >= 740) {
            return;
        }

        kv.style.left = kv.offsetLeft + 10 + "px";

    }
}

/**
 * Сделать игры
 * 1. Sneak
 * 2. Pac-man
 * 3. Лабиринт
 */