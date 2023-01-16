//const {Howl, Howler} = require('howler');
//const { app, globalShortcut } = require('electron')

var kaisaniemi = new Howl({
    src: ["app/audio/kaisaniemi.mp3"]
});

var kalasatama = new Howl({
    src: ["app/audio/kalasatama.mp3"]
});

function playSound(name) {
    name.play();
}

//globalShortcut.register("CommandOrControl+5", playSound(kaisaniemi));


//let kaisaniemiBtn = document.getElementById("kaisaniemiBtn");

//kaisaniemiBtn.addEventListener("click", playSound(kaisaniemi));