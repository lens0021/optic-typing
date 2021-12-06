import Utils from './Utils';

export class Target {
  public $element: HTMLElement;

  private _message: string;
  private static readonly life: number = 10 * Utils.second;

  public constructor(
    word: string,
    private fontSize: number,
    private onHit: () => void,
    private onMiss: () => void
  ) {
    this._message = word;

    this.$element = document.createElement('div');
    this.$element.classList.add('target');
    if (Math.random() > 0.5) {
      this.$element.classList.add('inverse');
    }
    this.$element.style.fontSize = this.fontSize + 'mm';
    this.$element.style.top = 5 + Math.random() * 90 + '%';
    this.$element.style.left = 5 + Math.random() * 90 + '%';

    const $text = document.createElement('span');
    $text.classList.add('text');
    $text.innerHTML = this._message;

    this.$element.append($text);

    setTimeout(() => {
      if (this.destroy()) {
        this.onMiss();
      }
    }, Target.life);
  }

  public get message() {
    return this._message;
  }

  public hit() {
    this.destroy();
    this.onHit();
  }

  public destroy(): boolean {
    const parent = this.$element.parentNode;
    if (!parent) {
      return false;
    }
    if (parent.contains(this.$element)) {
      parent.removeChild(this.$element);
      return true;
    }
    return false;
  }
}
