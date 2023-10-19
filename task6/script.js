const trafficLightGr = document.querySelector('#trafficLightGreen');
const trafficLightYe = document.querySelector('#trafficLightYellow');
const trafficLightRe = document.querySelector('#trafficLightRed');

function makeRed() {
    trafficLightRe.style.background = ('red');
    trafficLightYe.style.background = ('black');
    trafficLightGr.style.background = ('black');
    trafficLightRe.removeEventListener('click', makeRed);
    trafficLightGr.removeEventListener('click', makeRed);
    trafficLightYe.removeEventListener('click', makeRed);
    trafficLightGr.addEventListener('click', makeGreen);
    trafficLightYe.addEventListener('click', makeGreen);
    trafficLightRe.addEventListener('click', makeGreen);


}
trafficLightRe.addEventListener('click', makeRed);

function makeYellow() {
    trafficLightYe.style.background = ('yellow');
    trafficLightRe.style.background = ('black');
    trafficLightGr.style.background = ('black');
    trafficLightYe.removeEventListener('click', makeYellow);
    trafficLightGr.removeEventListener('click', makeYellow);
    trafficLightRe.removeEventListener('click', makeYellow);
    trafficLightGr.addEventListener('click', makeRed);
    trafficLightYe.addEventListener('click', makeRed);
    trafficLightRe.addEventListener('click', makeRed);

}
trafficLightYe.addEventListener('click', makeYellow);


function makeGreen() {
    trafficLightGr.style.background = ('green');
    trafficLightYe.style.background = ('black');
    trafficLightRe.style.background = ('black');
    trafficLightGr.removeEventListener('click', makeGreen);
    trafficLightYe.removeEventListener('click', makeGreen);
    trafficLightRe.removeEventListener('click', makeGreen);
    trafficLightGr.addEventListener('click', makeYellow);
    trafficLightYe.addEventListener('click', makeYellow);
    trafficLightRe.addEventListener('click', makeYellow);

}
trafficLightGr.addEventListener('click', makeGreen);