let mySound;
let thunderSound;
let hailSound;
let windSound;
let soundVolume;
function preload(){
soundFormats('mp3');
mySound = loadSound('rain.mp3');
thunderSound = loadSound('thunder.mp3');
hailSound = loadSound('hail.mp3');
windSound = loadSound('wind.mp3');
}

function setup(){
soundVolume = 0.5;
mySound.setVolume(soundVolume);
thunderSound.setVolume(soundVolume);
hailSound.setVolume(soundVolume);
windSound.setVolume(soundVolume);
}

function keyTyped(){
if (key == 'r'){
mySound.play();
loop;
}
else if (key == 't') {
thunderSound.play();
}
else if (key == 'h') {
hailSound.play();
}
else if (key == 'w') {
windSound.play();
}
else if (key == 'a'){
soundVolume = soundVolume + 0.1;
mySound.setVolume(soundVolume);
}
else if (key == 'd') {
soundVolume = soundVolume - 0.1;
mySound.setVolume(soundVolume);
}
else if (key == 'p') {
mySound.pause();
thunderSound.pause();
hailSound.pause();
windSound.pause();
}
}
