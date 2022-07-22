const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineWidth = document.getElementById('lineWidth');
const color = document.getElementById('color');
const colorOption = Array.from(document.getElementsByClassName('color-option'));
const modeBtn = document.getElementById('modeBtn');
const resetBtn = document.getElementById('resetBtn');
const eraserBtn = document.getElementById('eraserBtn');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

/* 
  Functions
*/
const onMove = (e) => {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
};

const startPainting = () => {
  isPainting = true;
};

const stopPainting = () => {
  isPainting = false;
};

const onLineWidthChange = (e) => {
  console.log(e.target.value);
  ctx.lineWidth = e.target.value;
};

const onColorChange = (e) => {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
};

const onColorClick = (e) => {
  const colorValue = e.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
};

const onModeClick = () => {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = 'Fill';
  } else {
    isFilling = true;
    modeBtn.innerText = 'Draw';
  }
};

const onCanvasClick = () => {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};

const onResetClick = () => {
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const onEraserClick = () => {
  ctx.strokeStyle = '#fff';
  isFilling = false;
  modeBtn.innerText = 'Fill';
};

/*
 EventListener
*/
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mouseleave', stopPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener('change', onLineWidthChange);

color.addEventListener('change', onColorChange);

colorOption.forEach((color) => color.addEventListener('click', onColorClick));

modeBtn.addEventListener('click', onModeClick);

resetBtn.addEventListener('click', onResetClick);

eraserBtn.addEventListener('click', onEraserClick);
