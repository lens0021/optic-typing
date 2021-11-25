import { OpticTyping } from './OpticTyping';
import './styles/styles.scss';
const Cookies: any = require('js-cookie');
const minute = 1000 * 60;

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
  const $canvas = <HTMLDivElement>document.querySelector('#canvas');
  const $input = <HTMLInputElement>document.querySelector('#input');
  const $health = <HTMLDivElement>document.querySelector('#health');
  const $healthAverage = <HTMLDivElement>(
    document.querySelector('#health-average')
  );
  const $healthText = <HTMLDivElement>document.querySelector('#health-text');
  const $checkKorean = <HTMLInputElement>(
    document.querySelector('#check-korean')
  );

  const $notification = <HTMLDivElement>document.querySelector('#notification');
  if (
    $body &&
    $canvas &&
    $input &&
    $health &&
    $healthAverage &&
    $healthText &&
    $checkKorean &&
    $notification
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
      $notification.classList.remove('hidden');
      const timeNow = new Date();
      const t = humanReadableTime(timeNow.getTime() - timeStart.getTime());
      $notification.innerHTML = `Your playing time is: ${t}`;
      setTimeout(() => {
        $notification.classList.add('hidden');
      }, 5000);
      setTimeout(startCheckpoint, minute);
    };

    setTimeout(startCheckpoint, minute);
  }
})();
