import { OpticTyping } from './OpticTyping';
import { AllStats, TodayStats, IDX_TIME, IDX_AVERAGE_FONT_SIZE } from './Stats';
import Utils from './Utils';

export class StatHelper {
  public static readonly NUM_TARGET_RECORDS = 60;

  private sessionKey: string;
  private timeStart: number;
  private onStatChangedCallbacks: ((
    todayStats: TodayStats,
    allStats: AllStats
  ) => void)[] = [];

  public constructor() {
    this.sessionKey = new Date().getTime().toString();
    this.timeStart = new Date().getTime();
  }

  /**
   * Pushes the given size and updates the playing time.
   * @param size New size added.
   */
  public pushFontSize(size: number) {
    const todayStats = StatHelper.todayStats;
    const allStats = StatHelper.allStats;

    if (todayStats.date !== Utils.dateStamp()) {
      StatHelper.allStats[todayStats.date] = this.summarizeDay(todayStats);
      // this.updateChart();
      todayStats.date = Utils.dateStamp();
      todayStats.times = {};
      todayStats.scores = [];
    } else if (todayStats.scores.length > StatHelper.NUM_TARGET_RECORDS) {
      todayStats.scores.shift();
    }

    todayStats.scores.push(size);
    todayStats.times[this.sessionKey] =
      // ms to second
      (new Date().getTime() - this.timeStart) / Utils.second;

    // Update allStats
    const summary = this.summarizeDay(todayStats);
    allStats[todayStats.date] = summary;
    // this.updateChart();

    StatHelper.todayStats = todayStats;
    StatHelper.allStats = allStats;
    for (let cb of this.onStatChangedCallbacks) {
      cb(todayStats, allStats);
    }
  }

  private summarizeDay(stats: TodayStats): [number, number] {
    let seconds = 0;
    for (const time of Object.values(stats.times)) {
      seconds += time;
    }
    const minutes = seconds / 60;
    return [minutes, Utils.average(stats.scores)];
  }

  public static get todayStats(): TodayStats {
    const todayStatsRaw = localStorage.todayStats;
    if (todayStatsRaw) {
      const json = JSON.parse(todayStatsRaw);
      if (typeof json == 'object') {
        return json;
      }
    }
    return { date: Utils.dateStamp(), times: {}, scores: [] };
  }

  private static set todayStats(obj: TodayStats) {
    localStorage.todayStats = JSON.stringify(obj);
  }

  public static get allStats(): AllStats {
    const allStatsRaw = localStorage.allStats;
    if (allStatsRaw) {
      const json = JSON.parse(allStatsRaw);
      if (typeof json == 'object') {
        return json;
      }
    }
    return {};
  }

  private static set allStats(obj: AllStats) {
    localStorage.allStats = JSON.stringify(obj);
  }

  public set onStatChanged(
    callback: (todayStats: TodayStats, allStats: AllStats) => void
  ) {
    this.onStatChangedCallbacks.push(callback);
  }
}
