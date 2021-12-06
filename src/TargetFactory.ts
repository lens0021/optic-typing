import { Target } from './Target';
const RandomWords = require('random-words');
import { koreanWords } from './KoreanWords';
export class TargetFactory {
  public static readonly fontSizeMin = 3;
  public static readonly fontSizeMax = 15;
  private _fontSize = 8;
  private _korean: boolean = false;

  public constructor(fontSize: number) {
    this._fontSize = fontSize;
  }

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
      Math.max(this._fontSize, TargetFactory.fontSizeMin),
      TargetFactory.fontSizeMax
    );
  }

  public maximizeFontSize() {
    this._fontSize = TargetFactory.fontSizeMax;
  }

  /**
   * health is a floating number in range of `[0,1]`. Zero means the font size is maximum and one means that is minimum.
   */
  public get health(): number {
    const maxRate = TargetFactory.fontSizeMax - TargetFactory.fontSizeMin;
    const current = TargetFactory.fontSizeMax - this._fontSize;
    return current / maxRate;
  }
}
