function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBody = document.querySelector("body");
const buttonElStart = document.querySelector("button[data-start]");
const buttonElStop = document.querySelector("button[data-stop]");
function clickButtonStart(){
    buttonElStart.disabled = true;
    buttonElStop.disabled = false;
const set = setInterval(()=>{
    colorBody.style.backgroundColor = getRandomHexColor();
},500);
buttonElStop.addEventListener('click',()=>{
    buttonElStart.disabled = false;
    buttonElStop.disabled = true;
clearInterval(set);
})
}
buttonElStart.addEventListener('click', clickButtonStart);

