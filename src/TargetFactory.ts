import { Target } from './Target';
const RandomWords = require('random-words');
const PhraseGen = new (require('korean-random-words'))();
const suffixes = [
  '하고',
  '하니',
  '하다',
  '하면',
  '하여',
  '하지만',
  '한데',
  '해도',
  '해서',
];

export class TargetFactory {
  private fontSizeMin = 0.7;
  private fontSizeMax = 18;
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
      if (Math.random() > 0.5) {
        return PhraseGen.getAdjective(
          suffixes[Math.floor(Math.random() * suffixes.length)]
        );
      } else {
        return PhraseGen.getNoun();
      }
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
