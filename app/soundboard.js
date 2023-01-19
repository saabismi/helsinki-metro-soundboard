//const {Howl, Howler} = require('howler');
//const { app, globalShortcut } = require('electron')

let kaisaniemi = new Howl({
    src: ["app/audio/kaisaniemi.mp3"]
});


// Main line
let ruoholahti_paateasema_kaantoraide = new Howl({
    src: ["app/audio/ruoholahti_paateasema_kaantoraide.mp3"]
});

let rautatientori = new Howl({
    src: ["app/audio/rautatientori.mp3"]
});

let rastila = new Howl({
    src: ["app/audio/rastila_clear.mp3"],
    volume: 0.55
});

let rastila_paateasema = new Howl({
    src: ["app/audio/rastila_paateasema_clear.mp3"],
    volume: 0.55
});

let puotila = new Howl({
    src: ["app/audio/puotila_clear.mp3"],
    volume: 0.55
})

let itakeskus_paateasema = new Howl({
    src: ["app/audio/itakeskus_paateasema_rautatieasemalleraiteelta3_vuosaareenraiteelta1.mp3"],
    volume: 0.55
});

let itakeskus_mellunmakeen = new Howl({
    src: ["app/audio/itakeskus_tamajunamellunmakeen_samaltaraiteelta.mp3"],
    volume: 0.55
});

let itakeskus_vuosaareen = new Howl({
    src: ["app/audio/itakeskus_tamajunavuosaareen_samaltaraiteelta.mp3"],
    volume: 0.55
});


// Southern branch
let siilitie = new Howl({
    src: ["app/audio/siilitie.mp3"]
});

let mellunmaki_paateasema = new Howl({
    src: ["app/audio/mellunmaki_paateasema.mp3"],
    volume: 0.55
});

let mellunmaki_paateasema_kaantoraide = new Howl({
    src: ["app/audio/mellunmaki_paateasema_kaantoraide.mp3"],
    volume: 0.55
});

// Northern branch
let kalasatama = new Howl({
    src: ["app/audio/kalasatama.mp3"]
});

let vuosaari_paateasema = new Howl({
    src: ["app/audio/vuosaari_paateasema.mp3"],
    volume: 0.55
});

let vuosaari_paateasema_kaantoraide = new Howl({
    src: ["app/audio/vuosaari_paateasema_kaantoraide.mp3"],
    volume: 0.55
});


// Other announcements
let ovet_suljetaan = new Howl({
    src: ["app/audio/ovet_suljetaan.mp3"]
});

let pyoraily = new Howl({
    src: ["app/audio/pyoraily.mp3"]
});

var tupakointi = new Howl({
    src: ["app/audio/tupakointi.mp3"]
});

var taynna = new Howl({
    src: ["app/audio/tama_juna_on_taynna.mp3"]
});

var olemme_kaantoraiteella = new Howl({
    src: ["app/audio/olemme_kaantoraiteella.mp3"]
});

var jatkamme_matkaa = new Howl({
    src: ["app/audio/jatkamme_matkaa.mp3"]
});

var junanvaihto = new Howl({
    src: ["app/audio/junanvaihto.mp3"]
});


// Train sounds
var ovet_kiinni = new Howl({
    src: ["app/audio/ovet_kiinni.mp3"]
});

var kiihdytys1 = new Howl({
    src: ["app/audio/kiihdytys1.mp3"]
});

var kiihdytys2 = new Howl({
    src: ["app/audio/kiihdytys2.mp3"]
});

var jarrutus_ovet = new Howl({
    src: ["app/audio/jarrutus_ovet.mp3"]
});

var jarrutus_eiovia = new Howl({
    src: ["app/audio/jarrutus_eiovia.mp3"]
});





// First stop all existing sounds, then play a new sound, insert the sound's name as parameter
function playSound(name) {
    Howler.stop();
    name.play();
}

// Stop playback of all sounds
function stopPlayback() {
    Howler.stop();
}

let setNewVolume = document.getElementById("volumeSelector");
let numericalVolume = document.getElementById("numericalVolume")
function setVolume() {
    let registeredVolume = setNewVolume.value / 100;
    console.log("Volume set to " + registeredVolume);
    Howler.volume(registeredVolume);
    numericalVolume.innerText = "Volume: " + setNewVolume.value;
}

//globalShortcut.register("CommandOrControl+5", playSound(kaisaniemi));


//let kaisaniemiBtn = document.getElementById("kaisaniemiBtn");

//kaisaniemiBtn.addEventListener("click", playSound(kaisaniemi));