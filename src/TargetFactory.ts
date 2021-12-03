import { Target } from './Target';
const RandomWords = require('random-words');
import { koreanWords } from './KoreanWords';
export class TargetFactory {
  public readonly fontSizeMin = 3;
  public readonly fontSizeMax = 15;
  private _fontSize = 13;
  private _korean: boolean = false;

  get fontSize() {
    return this._fontSize;
  }

  public newTarget(onHit: () => void, onMiss: () => void) {
    return new Target(this.randomWords(), this._fontSize, onHit, onMiss);
  }

  public set korean(korean: boolean) {
    this._korean = korean;
  }

  private randomWords() {
    if (this._korean) {
      return koreanWords[Math.floor(Math.random() * koreanWords.length)];
    }
    const word = RandomWords();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  public multiplyToFontSize(multiplier: number) {
    this._fontSize *= multiplier;

    // Clamp
    this._fontSize = Math.min(
      Math.max(this._fontSize, this.fontSizeMin),
      this.fontSizeMax
    );
  }

  public maximizeFontSize() {
    this._fontSize = this.fontSizeMax;
  }

  public get health(): number {
    const maxRate = this.fontSizeMax - this.fontSizeMin;
    const current = this.fontSizeMax - this._fontSize;
    return current / maxRate;
  }
}
