import { OpticTyping } from './OpticTyping';
import Utils from './Utils';
import { StatHelper } from './StatHelper';
import './styles/styles.scss';
const Cookies: any = require('js-cookie');

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

    const timeStart = new Date();
    const statHelper = new StatHelper(opticTyping);

    opticTyping.main();

    const showPlayingTime = () => {
      $notification.classList.remove('hidden');
      const t = Utils.humanReadableTime(
        new Date().getTime() - timeStart.getTime()
      );
      $notification.innerHTML = `Your playing time is: ${t}`;
      setTimeout(() => {
        $notification.classList.add('hidden');
      }, 5000);
    };

    const everyMinutesTimer = () => {
      statHelper.storeStats();
      showPlayingTime();
      setTimeout(everyMinutesTimer, Utils.minute);
    };

    setTimeout(everyMinutesTimer, Utils.minute);
  }
})();
