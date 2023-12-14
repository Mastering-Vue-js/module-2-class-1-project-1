import { calculator } from "./calculator";

const add = document.getElementById('add');
add.addEventListener('click', function () {
  const x = parseInt(document.getElementById('x').value);
  const y = parseInt(document.getElementById('y').value);
  const result = document.getElementById('result');
  result.value = calculator.add(x,y);
});

const minus = document.getElementById('minus');
minus.addEventListener('click', function () {
  const x = parseInt(document.getElementById('x').value);
  const y = parseInt(document.getElementById('y').value);
  const result = document.getElementById('result');
  result.value = calculator.minus(x,y);
});

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', function () {
  const x = parseInt(document.getElementById('x').value);
  const y = parseInt(document.getElementById('y').value);
  const result = document.getElementById('result');
  result.value = calculator.multiply(x,y);
});

const divided = document.getElementById('divided');
divided.addEventListener('click', function () {
  const x = parseInt(document.getElementById('x').value);
  const y = parseInt(document.getElementById('y').value);
  const result = document.getElementById('result');
  result.value = calculator.divided(x,y);
});