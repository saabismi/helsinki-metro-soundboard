//const {Howl, Howler} = require('howler');
//const { app, globalShortcut } = require('electron')

var kaisaniemi = new Howl({
    src: ["app/audio/kaisaniemi.mp3"]
});


// Main line
var ruoholahti_paateasema_kaantoraide = new Howl({
    src: ["app/audio/ruoholahti_paateasema_kaantoraide.mp3"]
});

var rautatientori = new Howl({
    src: ["app/audio/rautatientori.mp3"]
});

var rastila = new Howl({
    src: ["app/audio/rastila_clear.mp3"]
});

var rastila_paateasema = new Howl({
    src: ["app/audio/rastila_paateasema_clear.mp3"]
});

var puotila = new Howl({
    src: ["app/audio/puotila_clear.mp3"]
})

var itakeskus_paateasema = new Howl({
    src: ["app/audio/itakeskus_paateasema_rautatieasemalleraiteelta3_vuosaareenraiteelta1.mp3"]
});

var itakeskus_mellunmakeen = new Howl({
    src: ["app/audio/itakeskus_tamajunamellunmakeen_samaltaraiteelta.mp3"]
});

var itakeskus_vuosaareen = new Howl({
    src: ["app/audio/itakeskus_tamajunavuosaareen_samaltaraiteelta.mp3"]
});


// Southern branch
var siilitie = new Howl({
    src: ["app/audio/siilitie.mp3"]
});

var mellunmaki_paateasema = new Howl({
    src: ["app/audio/mellunmaki_paateasema.mp3"]
});

var mellunmaki_paateasema_kaantoraide = new Howl({
    src: ["app/audio/mellunmaki_paateasema_kaantoraide.mp3"]
});

// Northern branch
var kalasatama = new Howl({
    src: ["app/audio/kalasatama.mp3"]
});

var vuosaari_paateasema = new Howl({
    src: ["app/audio/vuosaari_paateasema.mp3"]
});

var vuosaari_paateasema_kaantoraide = new Howl({
    src: ["app/audio/vuosaari_paateasema_kaantoraide.mp3"]
});


// Other announcements



// Play a sound, insert the sound's name as parameter
function playSound(name) {
    name.play();
}

// Stop playback of all sounds
function stopPlayback() {
    Howler.stop();
}

//globalShortcut.register("CommandOrControl+5", playSound(kaisaniemi));


//let kaisaniemiBtn = document.getElementById("kaisaniemiBtn");

//kaisaniemiBtn.addEventListener("click", playSound(kaisaniemi));