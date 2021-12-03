export default class Utils {
  public static readonly second = 1000;
  /** 1000 * 60 */
  public static readonly minute = 60000;

  static humanReadableTime(ms: number): string {
    let h: number, m: number, s: number;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    h = h % 24;
    return [
      h ? h + ' hour' + (h == 1 ? '' : 's') : '',
      m ? m + ' minute' + (m == 1 ? '' : 's') : '',
      s ? s + ' second' + (s == 1 ? '' : 's') : '',
    ]
      .filter(Boolean)
      .join(', ');
  }

  static dateStamp(): string {
    return new Date().toISOString().split('T')[0];
  }

  static sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  }

  static average(arr: number[]): number {
    return this.sum(arr) / arr.length;
  }
}
