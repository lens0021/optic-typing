import { Chart } from 'chart.js';
import { Target } from './Target';
import { TargetFactory } from './TargetFactory';
import Utils from './Utils';
const Cookies: any = require('js-cookie');

export class OpticTyping {
  public readonly capacityQueue = 30;
  public targetFactory: TargetFactory;

  private readonly delay = 500;
  private readonly maxTargetNum = 10;

  private targets: { [key: string]: Target } = {};
  private _queueHealth: number[] = [];
  private _queueFontSize: number[] = [];
  private timeStart = new Date();
  private _onHit?: () => void;

  public constructor(
    private $board: HTMLElement,
    private $canvas: HTMLElement,
    private $input: HTMLInputElement,
    private $health: HTMLElement,
    private $notification: HTMLElement,
    private $healthAverage: HTMLElement,
    private $checkKorean: HTMLInputElement
  ) {
    this.targetFactory = new TargetFactory();
  }

  private addTargetRepeatedly() {
    if (Object.keys(this.targets).length < this.maxTargetNum) {
      const target = this.targetFactory.newTarget(
        () => {
          // Statistics
          if (this._queueHealth.length > this.capacityQueue) {
            this._queueHealth.shift();
            this._queueFontSize.shift();
          }
          this._queueHealth.push(this.targetFactory.health);
          this._queueFontSize.push(this.targetFactory.fontSize);
          this.$healthAverage.style.width = `${
            Utils.average(this._queueHealth) * 100
          }%`;

          // Adjust the size of the target.
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(0.95);
          this.$board.classList.toggle('wrong', false);
          this.$health.style.width = `${this.targetFactory.health * 100}%`;

          if (this._onHit) {
            this._onHit();
          }
        },
        () => {
          delete this.targets[target.message];
          this.targetFactory.multiplyToFontSize(1.01);
          this.$board.classList.toggle('wrong', true);
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

    const everyMinutesTimer = () => {
      this.showPlayingTime();
      setTimeout(everyMinutesTimer, Utils.minute);
    };

    setTimeout(everyMinutesTimer, Utils.minute);
  }

  private showPlayingTime() {
    this.$notification.classList.remove('hidden');
    const t = Utils.humanReadableTime(
      new Date().getTime() - this.timeStart.getTime()
    );
    this.$notification.innerHTML = `Your playing time is: ${t}`;
    setTimeout(() => {
      this.$notification.classList.add('hidden');
    }, 5000);
  }

  public get queueFontSize() {
    return this._queueFontSize;
  }

  public get queueHealth() {
    return this._queueHealth;
  }

  public get sumFontSize() {
    return Utils.sum(this._queueFontSize);
  }

  public get countFontSize() {
    return this._queueFontSize.length;
  }

  public set onHit(callback: () => void) {
    this._onHit = callback;
  }
}
