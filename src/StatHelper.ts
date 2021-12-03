import { OpticTyping } from './OpticTyping';
import {
  AllStats,
  TodayStats,
  INDEX_TIME,
  INDEX_AVERAGE_FONT_SIZE,
  INDEX_SUM_FONT_SIZE,
  INDEX_COUNT_FONT_SIZE,
} from './Stats';
import Utils from './Utils';

export class StatHelper {
  private sessionKey: string;
  private timeStart: Date;

  public constructor(private opticTyping: OpticTyping) {
    this.sessionKey = new Date().getTime().toString();
    this.timeStart = new Date();
  }

  public storeStats() {
    // Update todayStats
    const todayStats = this.todayStats;
    if (todayStats.date !== Utils.dateStamp()) {
      todayStats.date = Utils.dateStamp();
      todayStats.stats = {};
    }
    todayStats.stats[this.sessionKey] = [
      // ms to second
      (new Date().getTime() - this.timeStart.getTime()) / Utils.second,
      this.opticTyping.sumFontSize,
      this.opticTyping.countFontSize,
    ];
    this.todayStats = todayStats;

    // Update allStats
    const allStats = this.allStats;
    // Copy todayStats to allStats
    allStats[todayStats.date] = this.summarizeDay(
      Object.values(todayStats.stats)
    );

    this.allStats = allStats;
  }

  private summarizeDay(day: [number, number, number][]): [number, number] {
    let minute = 0,
      sum = 0,
      count = 0;
    for (const session of day) {
      minute += session[INDEX_TIME];
      sum += session[INDEX_SUM_FONT_SIZE];
      count += session[INDEX_COUNT_FONT_SIZE];
    }
    return [minute, sum / count];
  }

  private get allStats(): AllStats {
    const allStatsRaw = localStorage.allStats;
    if (allStatsRaw) {
      const json = JSON.parse(allStatsRaw);
      if (typeof json == 'object') {
        return json;
      }
    }
    return {};
  }

  private set allStats(obj) {
    localStorage.allStats = JSON.stringify(obj);
  }

  private get todayStats(): TodayStats {
    const todayStatsRaw = localStorage.todayStats;
    if (todayStatsRaw) {
      const json = JSON.parse(todayStatsRaw);
      if (typeof json == 'object') {
        return json;
      }
    }
    return { date: Utils.dateStamp(), stats: {} };
  }

  private set todayStats(obj) {
    localStorage.todayStats = JSON.stringify(obj);
  }
}
