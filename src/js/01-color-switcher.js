const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop');
const bodyEl = document.querySelector('body');

let colorChangeInterval = null;

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopChangeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeOnRandomColor () {
      bodyEl.style.backgroundColor = `${getRandomHexColor()}`
};

function changeColor() {
    colorChangeInterval = setInterval(changeOnRandomColor, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
};

function stopChangeColor() {
    clearInterval(colorChangeInterval);
    btnStart.disabled = false;
    btnStop.disabled = true;
};

// Альтернативный вариант 
//------------------//
// btnStart.addEventListener('click', () => {
//   changeColorId = setInterval(changeColor, 1000);
//   btnStart.disabled = true;
//   btnStop.disabled = false;
// });
// btnStop.addEventListener('click', () => {
//   clearInterval(changeColorId);
//   btnStart.disabled = false;
//   btnStop.disabled = true;
// });

