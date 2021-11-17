'use strict';

const $body = document.body;
const $size = document.querySelector('#size');
const $target = document.querySelector('#target');
const $caution = document.querySelector('#caution');
const letters = (
  '0123456789' +
  'abcdefghijklmnopqrstuvwxyz' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
).split('');
let target = 'a';
let fontSize = 2;

function nextLetter(ok) {
  target = letters[Math.floor(Math.random() * letters.length)];
  fontSize = ok ? fontSize * 0.9 : fontSize * 1.1;

  $size.innerHTML = ('' + fontSize).slice(0, 5);

  $target.innerHTML = target;
  $target.style.fontSize = fontSize + 'em';
  $target.style.top = 5 + Math.random() * 90 + '%';
  $target.style.left = 5 + Math.random() * 90 + '%';

  $body.classList.toggle('wrong', !ok);

  console.log(`nextLetter with ${fontSize}em`);
}

function main() {
  document.addEventListener('keypress', (ev) => {
    if ($caution.parentNode) {
      $caution.parentNode.removeChild($caution);
    }
    // console.log(`${ev.key} is pressed`);
    nextLetter(ev.key.toLowerCase() == target.toLowerCase());
  });
}

main();
