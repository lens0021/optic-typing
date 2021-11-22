import { OpticTyping } from './OpticTyping';
import './styles.scss';
const Cookies: any = require('js-cookie');

(() => {
  const $body = document.body;
  const $canvas = <HTMLElement>document.querySelector('#canvas');
  const $input = <HTMLInputElement>document.querySelector('#input');
  const $checkKorean = <HTMLInputElement>(
    document.querySelector('#check-korean')
  );
  if ($body && $canvas && $input && $checkKorean) {
    $input.focus();
    const opticTyping = new OpticTyping($body, $canvas, $input, $checkKorean);

    if (Cookies.get('korean') == '1') {
      $checkKorean.checked = true;
      opticTyping.korean = true;
    }

    opticTyping.main();
  }
})();
