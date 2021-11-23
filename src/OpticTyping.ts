import { Target } from './Target';
import { TargetFactory } from './TargetFactory';
const Cookies: any = require('js-cookie');

export class OpticTyping {
  private targetFactory: TargetFactory;
  private targets: { [key: string]: Target } = {};
  private readonly delay = 500;
  private readonly maxTargetNum = 10;

  public constructor(
    private $body: HTMLElement,
    private $canvas: HTMLElement,
    private $input: HTMLInputElement,
    private $health: HTMLElement,
    private $checkKorean: HTMLInputElement
  ) {
    this.targetFactory = new TargetFactory();
  }

  private addTargetRepeatedly() {
    if (Object.keys(this.targets).length < this.maxTargetNum) {
      const target = this.targetFactory.newTarget(
        () => {
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(0.95);
          this.$body.classList.toggle('wrong', false);
          this.$health.style.width = `${this.targetFactory.health * 100}%`;
        },
        () => {
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(1.02);
          this.$body.classList.toggle('wrong', true);
          this.$health.style.width = `${this.targetFactory.health * 100}%`;
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

    this.$health.style.width = `${this.targetFactory.health * 100}%`;
    this.addTargetRepeatedly();
  }
}
