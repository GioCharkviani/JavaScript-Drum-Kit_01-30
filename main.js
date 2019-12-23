var audios = document.querySelectorAll("audio");
var clickDivs = document.querySelectorAll(".click-div");

document.addEventListener("keydown", function(e) {
    var kickedKeyCode = e.keyCode;

    findKey(kickedKeyCode);
});

function findKey(kickedKeyCode) {
    for(var i = 0; i < audios.length; i++) {
        if(kickedKeyCode == audios[i].id) {
            audios[i].pause();
            audios[i].currentTime = 0;
            audios[i].play();
            clickDivs[i].classList.add("click-effect");
            removeClass(i);
        }
    }
}

function removeClass(i) {
    setTimeout(function() {
        clickDivs[i].classList.remove("click-effect");
    }, 200);
}