const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineWidth = document.getElementById('lineWidth');
const color = document.getElementById('color');
const colorOption = Array.from(document.getElementsByClassName('color-option'));
const modeBtn = document.getElementById('modeBtn');
const resetBtn = document.getElementById('resetBtn');
const eraserBtn = document.getElementById('eraserBtn');
const fileInput = document.getElementById('file');
const textInput = document.getElementById('text');
const saveBtn = document.getElementById('save');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = 'round';

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
  if (window.confirm('Do you really want to reset it?')) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  } else {
    return;
  }
};

const onEraserClick = () => {
  ctx.strokeStyle = '#fff';
  isFilling = false;
  modeBtn.innerText = 'Fill';
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
  console.log(url);
};

const onDoubleClick = (e) => {
  const text = textInput.value;
  if (text) {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = '72px Pretendard';
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
  } else {
    return;
  }
};

const onSaveClick = () => {
  const url = canvas.toDataURL();
  const $a = document.createElement('a');
  if (window.confirm('Do you want to save?')) {
    $a.href = url;
    $a.download = 'myDrawing.png';
    $a.click();
  } else {
    return;
  }
};

/*
 EventListener
*/
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mouseleave', stopPainting);
canvas.addEventListener('click', onCanvasClick);
canvas.addEventListener('dblclick', onDoubleClick);

lineWidth.addEventListener('change', onLineWidthChange);

color.addEventListener('change', onColorChange);

colorOption.forEach((color) => color.addEventListener('click', onColorClick));

modeBtn.addEventListener('click', onModeClick);

resetBtn.addEventListener('click', onResetClick);

eraserBtn.addEventListener('click', onEraserClick);

fileInput.addEventListener('change', onFileChange);

saveBtn.addEventListener('click', onSaveClick);
