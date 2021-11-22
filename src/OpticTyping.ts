import { Target } from './Target';
import { TargetFactory } from './TargetFactory';

export class OpticTyping {
  private targetFactory: TargetFactory;
  private targets: { [key: string]: Target } = {};
  private readonly delay = 500;
  private readonly maxTargetNum = 10;

  public constructor(
    private $body: HTMLElement,
    private $canvas: HTMLElement,
    private $caution: HTMLElement,
    private $input: HTMLInputElement,
    private $checkKorean: HTMLInputElement
  ) {
    this.targetFactory = new TargetFactory();
    this.addTargetRepeatedly();
  }

  private addTargetRepeatedly() {
    // console.log(Object.keys(this.targets).length);
    console.log(this.targetFactory.fontSize);
    if (Object.keys(this.targets).length < this.maxTargetNum) {
      const target = this.targetFactory.newTarget(
        () => {
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(0.98);
          this.$body.classList.toggle('wrong', false);
        },
        () => {
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(1.01);
          this.$body.classList.toggle('wrong', true);
        }
      );
      this.targets[target.message] = target;
      this.$canvas.prepend(target.$element);
    }

    setTimeout(() => {
      this.addTargetRepeatedly();
    }, this.delay);
  }

  public main() {
    this.$canvas.addEventListener('click', (ev) => {
      this.$input.focus();
    });

    document.addEventListener('keydown', (ev) => {
      if (ev.key == 'Enter') {
        this.$input.value = '';
      }
      if (this.$caution.parentNode) {
        this.$caution.parentNode.removeChild(this.$caution);
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
      this.targetFactory.korean = !!this.$checkKorean.value;
    });
  }
}
