import { OpticTyping } from './OpticTyping';
import './styles.scss';

(() => {
  const $body = document.body;
  const $canvas = <HTMLElement>document.querySelector('#canvas');
  const $caution = <HTMLElement>document.querySelector('#caution');
  const $input = <HTMLInputElement>document.querySelector('#input');
  const $checkKorean = <HTMLInputElement>(
    document.querySelector('#check-korean')
  );
  if ($body && $canvas && $caution && $input && $checkKorean) {
    $input.focus();
    new OpticTyping($body, $canvas, $caution, $input, $checkKorean).main();
  }
})();
