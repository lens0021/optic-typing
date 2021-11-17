'use strict';

const arrows = {
  left: '←⇐',
  up: '↑⇑',
  right: '→⇒',
  down: '↓⇓',
};
const targetGroups = {
  alphanumeric: (
    '0123456789' +
    'abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  ).split(''),
  arrows: ['←', '↑', '→', '↓'],
};

const $body = document.body;
const $size = document.querySelector('#size');
const $canvas = document.querySelector('#canvas');
const $target = document.querySelector('#target');
const $caution = document.querySelector('#caution');
const $checkArrows = document.querySelector('#check-arrows');
const $checkHardcore = document.querySelector('#check-hardcore');

let targetGroup = targetGroups.alphanumeric;
let target = 'a';
let fontSize = 2;
const fontSizeMin = 0.7;
const fontSizeMax = 18;
let hardcore = false;

function nextLetter(ok) {
  target = targetGroup[Math.floor(Math.random() * targetGroup.length)];
  if (ok !== null) {
    if (!hardcore) {
      fontSize = ok ? fontSize * 0.98 : fontSize * 1.01;
    } else {
      fontSize = ok ? fontSize * 0.7 : fontSizeMax;
    }
    fontSize = Math.min(Math.max(fontSize, fontSizeMin), fontSizeMax);
    $body.classList.toggle('wrong', !ok);
    $canvas.classList.toggle('inverse');
  }

  $size.innerHTML = ('' + fontSize).slice(0, 5);

  $target.innerHTML = target;
  $target.style.fontSize = fontSize + 'em';
  $target.style.top = 5 + Math.random() * 90 + '%';
  $target.style.left = 5 + Math.random() * 90 + '%';

  console.log(`nextLetter with ${fontSize}em`);
}

function match(expected, actual) {
  if (expected.toLowerCase() == actual.toLowerCase()) {
    return true;
  }
  if (actual == 'arrowdown' && arrows['down'].indexOf(expected) >= 0) {
    return true;
  } else if (actual == 'arrowup' && arrows['up'].indexOf(expected) >= 0) {
    return true;
  } else if (actual == 'arrowleft' && arrows['left'].indexOf(expected) >= 0) {
    return true;
  } else if (actual == 'arrowright' && arrows['right'].indexOf(expected) >= 0) {
    return true;
  }
  return false;
}

function main() {
  document.addEventListener('keydown', (ev) => {
    if (
      [
        ' ',
        'Alt',
        'Backspace',
        'Control',
        'Delete',
        'Escape',
        'Shift',
        'Tab',
      ].indexOf(ev.key) >= 0
    ) {
      return;
    }
    if ($caution.parentNode) {
      $caution.parentNode.removeChild($caution);
    }
    console.log(`${ev.key} is pressed`);
    nextLetter(match(target.toLowerCase(), ev.key.toLowerCase()));
  });

  $checkArrows.addEventListener('change', () => {
    targetGroup =
      targetGroups[$checkArrows.checked ? 'arrows' : 'alphanumeric'];
    nextLetter(null);
  });

  $checkHardcore.addEventListener('change', () => {
    hardcore = $checkHardcore.checked;
  });
}

main();
