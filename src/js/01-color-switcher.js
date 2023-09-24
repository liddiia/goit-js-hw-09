const startBt = document.querySelector('[data-start]');
const stopBt = document.querySelector('[data-stop]');
const bodyChangeColor = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
bodyChangeColor.style.paddingLeft = '300';

let intervalId = null;

stopBt.setAttribute('disabled', '');

startBt.addEventListener('click', elt => {
  elt.target.setAttribute('disabled', true);
  stopBt.removeAttribute('disabled');
  intervalId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBt.addEventListener('click', elt => {
  elt.target.setAttribute('disabled', true);
  startBt.removeAttribute('disabled');

  clearInterval(intervalId);
});
