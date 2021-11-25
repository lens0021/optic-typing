import { arrayBuffer } from 'stream/consumers';
import { OpticTyping } from './OpticTyping';
import './styles.scss';
const Cookies: any = require('js-cookie');
const tenMinutes = 1000 * 60 * 10;

function humanReadableTime(ms: number): string {
  let h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  h = h % 24;
  return [
    h ? h + ' hour' + (h == 1 ? '' : 's') : '',
    m ? m + ' minute' + (m == 1 ? '' : 's') : '',
    s ? s + ' second' + (s == 1 ? '' : 's') : '',
  ]
    .filter(Boolean)
    .join(', ');
}

(() => {
  const $body = document.body;
  const $canvas = <HTMLElement>document.querySelector('#canvas');
  const $input = <HTMLInputElement>document.querySelector('#input');
  const $health = <HTMLElement>document.querySelector('#health');
  const $healthAverage = <HTMLElement>document.querySelector('#health-average');
  const $healthText = <HTMLElement>document.querySelector('#health-text');
  const $checkKorean = <HTMLInputElement>(
    document.querySelector('#check-korean')
  );
  if (
    $body &&
    $canvas &&
    $input &&
    $health &&
    $healthAverage &&
    $healthText &&
    $checkKorean
  ) {
    $input.focus();
    const opticTyping = new OpticTyping(
      $body,
      $canvas,
      $input,
      $health,
      $healthAverage,
      $healthText,
      $checkKorean
    );

    if (Cookies.get('korean') == '1') {
      $checkKorean.checked = true;
      opticTyping.korean = true;
    }

    opticTyping.main();
    const timeStart = new Date();
    const startCheckpoint = () => {
      const $checkpoint = document.createElement('div');
      $checkpoint.classList.add('checkpoint');
      const timeNow = new Date();
      $checkpoint.innerHTML = humanReadableTime(
        timeNow.getTime() - timeStart.getTime()
      );
      $canvas.append($checkpoint);
      setTimeout(() => {
        $canvas.removeChild($checkpoint);
      }, 5000);
      setTimeout(startCheckpoint, tenMinutes);
    };

    setTimeout(startCheckpoint, tenMinutes);
  }
})();
