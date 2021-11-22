export class Target {
  public $element: HTMLElement;

  private _message: string;
  private readonly life: number = 10000;

  public constructor(
    private word: string,
    private fontSize: number,
    private onHit: () => void,
    private onMiss: () => void
  ) {
    this._message = word;

    this.$element = document.createElement('div');
    this.$element.classList.add('target');
    this.$element.innerHTML = this._message;
    this.$element.style.fontSize = this.fontSize + 'em';
    this.$element.style.top = 5 + Math.random() * 90 + '%';
    this.$element.style.left = 5 + Math.random() * 90 + '%';

    setTimeout(() => {
      if (this.destroy()) {
        this.onMiss();
      }
    }, this.life);
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
