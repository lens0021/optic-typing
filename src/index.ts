import './styles.scss';

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

class OpticTyping {
  targetGroup: string[];
  target: string;
  fontSize: number;
  fontSizeMin: number;
  fontSizeMax: number;
  hardcore: boolean;

  $body: HTMLElement;
  $size: HTMLElement;
  $canvas: HTMLElement;
  $target: HTMLElement;
  $caution: HTMLElement;
  $checkArrows: HTMLInputElement;
  $checkHardcore: HTMLInputElement;

  constructor(
    $body: HTMLElement,
    $size: HTMLElement,
    $canvas: HTMLElement,
    $target: HTMLElement,
    $caution: HTMLElement,
    $checkArrows: HTMLInputElement,
    $checkHardcore: HTMLInputElement
  ) {
    this.targetGroup = targetGroups.alphanumeric;
    this.target = 'a';
    this.fontSize = 2;
    this.fontSizeMin = 0.7;
    this.fontSizeMax = 18;
    this.hardcore = false;

    this.$body = $body;
    this.$size = $size;
    this.$canvas = $canvas;
    this.$target = $target;
    this.$caution = $caution;
    this.$checkArrows = $checkArrows;
    this.$checkHardcore = $checkHardcore;
  }

  nextLetter(ok: boolean | null) {
    this.target =
      this.targetGroup[Math.floor(Math.random() * this.targetGroup.length)];
    if (ok !== null) {
      if (!this.hardcore) {
        this.fontSize = ok ? this.fontSize * 0.98 : this.fontSize * 1.01;
      } else {
        this.fontSize = ok ? this.fontSize * 0.7 : this.fontSizeMax;
      }
      this.fontSize = Math.min(
        Math.max(this.fontSize, this.fontSizeMin),
        this.fontSizeMax
      );
      this.$body.classList.toggle('wrong', !ok);
      this.$canvas.classList.toggle('inverse');
    }

    this.$size.innerHTML = ('' + this.fontSize).slice(0, 5);

    this.$target.innerHTML = this.target;
    this.$target.style.fontSize = this.fontSize + 'em';
    this.$target.style.top = 5 + Math.random() * 90 + '%';
    this.$target.style.left = 5 + Math.random() * 90 + '%';

    console.log(`nextLetter with ${this.fontSize}em`);
  }

  match(expected: string, actual: string) {
    if (expected.toLowerCase() == actual.toLowerCase()) {
      return true;
    }
    if (actual == 'arrowdown' && arrows['down'].indexOf(expected) >= 0) {
      return true;
    } else if (actual == 'arrowup' && arrows['up'].indexOf(expected) >= 0) {
      return true;
    } else if (actual == 'arrowleft' && arrows['left'].indexOf(expected) >= 0) {
      return true;
    } else if (
      actual == 'arrowright' &&
      arrows['right'].indexOf(expected) >= 0
    ) {
      return true;
    }
    return false;
  }

  main() {
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
      if (this.$caution.parentNode) {
        this.$caution.parentNode.removeChild(this.$caution);
      }
      console.log(`${ev.key} is pressed`);
      this.nextLetter(
        this.match(this.target.toLowerCase(), ev.key.toLowerCase())
      );
    });

    this.$checkArrows.addEventListener('change', () => {
      this.targetGroup =
        targetGroups[this.$checkArrows.checked ? 'arrows' : 'alphanumeric'];
      this.nextLetter(null);
    });

    this.$checkHardcore.addEventListener('change', () => {
      this.hardcore = this.$checkHardcore.checked;
    });
  }
}

(() => {
  const $body = document.body;
  const $size = document.querySelector('#size');
  const $canvas = document.querySelector('#canvas');
  const $target = document.querySelector('#target');
  const $caution = document.querySelector('#caution');
  const $checkArrows = document.querySelector('#check-arrows');
  const $checkHardcore = document.querySelector('#check-hardcore');
  if (
    $body &&
    $size &&
    $canvas &&
    $target &&
    $caution &&
    $checkArrows &&
    $checkHardcore
  ) {
    new OpticTyping(
      $body as HTMLElement,
      $size as HTMLElement,
      $canvas as HTMLElement,
      $target as HTMLElement,
      $caution as HTMLElement,
      $checkArrows as HTMLInputElement,
      $checkHardcore as HTMLInputElement
    ).main();
  }
})();
