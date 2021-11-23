import { Target } from './Target';
import { TargetFactory } from './TargetFactory';
const Cookies: any = require('js-cookie');

export class OpticTyping {
  private readonly delay = 500;
  private readonly maxTargetNum = 10;
  private readonly countToStart = 40;

  private targetFactory: TargetFactory;
  private targets: { [key: string]: Target } = {};
  private countIsStarted = false;
  private stackedHealth = 0;
  private stackedFontSize = 0;
  private hitCount = 0;

  public constructor(
    private $body: HTMLElement,
    private $canvas: HTMLElement,
    private $input: HTMLInputElement,
    private $health: HTMLElement,
    private $healthAverage: HTMLElement,
    private $healthText: HTMLElement,
    private $checkKorean: HTMLInputElement
  ) {
    this.targetFactory = new TargetFactory();
  }

  private addTargetRepeatedly() {
    if (Object.keys(this.targets).length < this.maxTargetNum) {
      const target = this.targetFactory.newTarget(
        () => {
          this.hitCount++;
          if (!this.countIsStarted) {
            if (this.hitCount > this.countToStart) {
              this.countIsStarted = true;
              this.hitCount = 0;
            }
          } else {
            this.stackedHealth += this.targetFactory.health;
            this.stackedFontSize += this.targetFactory.fontSize;
            this.$healthAverage.style.width = `${
              100 - (this.stackedHealth / this.hitCount) * 100
            }%`;
            let num = this.stackedFontSize / this.hitCount;
            this.$healthText.innerHTML = `${num.toFixed(2)}mm`;
          }

          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(0.95);
          this.$body.classList.toggle('wrong', false);
          this.$health.style.width = `${
            100 - this.targetFactory.health * 100
          }%`;
        },
        () => {
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(1.02);
          this.$body.classList.toggle('wrong', true);
          this.$health.style.width = `${
            100 - this.targetFactory.health * 100
          }%`;
        }
      );
      this.targets[target.message] = target;
      this.$canvas.prepend(target.$element);
    }

    setTimeout(() => {
      this.addTargetRepeatedly();
    }, this.delay);
  }

  public set korean(korean: boolean) {
    this.targetFactory.korean = korean;
  }

  public main() {
    this.$canvas.addEventListener('click', (ev) => {
      this.$input.focus();
    });

    document.addEventListener('keydown', (ev) => {
      if (ev.key == 'Enter') {
        this.$input.value = '';
      }
    });

    this.$input.addEventListener('input', (ev) => {
      for (let key in this.targets) {
        const target = this.targets[key];
        if (
          this.$input.value.toLowerCase().includes(target.message.toLowerCase())
        ) {
          this.$input.value = '';
          target.hit();
        }
      }
    });

    this.$checkKorean.addEventListener('change', (ev) => {
      const checked = this.$checkKorean.checked;
      this.targetFactory.korean = checked;
      Cookies.set('korean', checked ? '1' : '0');
      this.$input.focus();
    });

    this.$health.style.width = `${100 - this.targetFactory.health * 100}%`;
    this.addTargetRepeatedly();
  }
}
