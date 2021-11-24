import { OpticTyping } from './OpticTyping';
import './styles.scss';
const Cookies: any = require('js-cookie');
const tenMinutes = 1000 * 60 * 10;

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
    let message = "You've been playing this for 10 minutes.";
    const startCheckpoint = () => {
      const $checkpoint = document.createElement('div');
      $checkpoint.classList.add('checkpoint');
      $checkpoint.innerHTML = message;
      message = "You've been playing this for 10 minutes since the last notification.";
      $canvas.append($checkpoint);
      setTimeout(() => {
        $canvas.removeChild($checkpoint);
      }, 5000);
      setTimeout(startCheckpoint, tenMinutes);
    };

    setTimeout(startCheckpoint, tenMinutes);
  }
})();
