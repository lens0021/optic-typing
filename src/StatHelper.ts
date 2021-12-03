import { Chart } from 'chart.js';
import { OpticTyping } from './OpticTyping';
import {
  AllStats,
  TodayStats,
  IDX_TIME,
  IDX_AVERAGE_FONT_SIZE,
  INDEX_SUM_FONT_SIZE,
  INDEX_COUNT_FONT_SIZE,
} from './Stats';
import Utils from './Utils';

export class StatHelper {
  private sessionKey: string;
  private timeStart: Date;

  public constructor(
    private opticTyping: OpticTyping,
    private chartRecent: Chart
  ) {
    this.sessionKey = new Date().getTime().toString();
    this.timeStart = new Date();
    this.updateChart();
  }

  public updateChart() {
    const allStats = this.allStats;
    this.chartRecent.data.labels = Object.keys(allStats);
    const values = Object.values(allStats);
    this.chartRecent.data.datasets[0].data = values.map(
      (v) => v[IDX_AVERAGE_FONT_SIZE]
    );
    this.chartRecent.data.datasets[1].data = values.map((v) => v[IDX_TIME]);
    this.chartRecent.update();
  }

  public storeStats() {
    const todayStats = this.todayStats;
    const allStats = this.allStats;

    // Update todayStats
    if (todayStats.date !== Utils.dateStamp()) {
      this.allStats[todayStats.date] = this.summarizeDay(todayStats.stats);
      this.updateChart();
      todayStats.date = Utils.dateStamp();
      todayStats.stats = {};
    }
    todayStats.stats[this.sessionKey] = [
      // ms to second
      (new Date().getTime() - this.timeStart.getTime()) / Utils.second,
      this.opticTyping.sumFontSize,
      this.opticTyping.countFontSize,
    ];

    // Update allStats
    // Copy todayStats to allStats
    const summary = this.summarizeDay(todayStats.stats);
    allStats[todayStats.date] = summary;
    this.updateChart();

    this.todayStats = todayStats;
    this.allStats = allStats;
  }

  private summarizeDay(stats: {
    [key: string]: [number, number, number];
  }): [number, number] {
    const sessions = Object.values(stats);

    let seconds = 0,
      sum = 0,
      count = 0;
    for (const session of sessions) {
      seconds += session[IDX_TIME];
      sum += session[INDEX_SUM_FONT_SIZE];
      count += session[INDEX_COUNT_FONT_SIZE];
    }
    const minutes = seconds / 60;
    return [minutes, sum / count];
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
