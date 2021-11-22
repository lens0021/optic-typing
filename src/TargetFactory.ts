import { Target } from './Target';
const RandomWords = require('random-words');
import { koreanWords } from './KoreanWords';
export class TargetFactory {
  private fontSizeMin = 0.7;
  private fontSizeMax = 15;
  private _fontSize = 5;
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
}
