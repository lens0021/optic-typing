import Chart from 'chart.js/auto';
import { AllStats, TodayStats, IDX_TIME, IDX_AVERAGE_FONT_SIZE } from './Stats';
import { TargetFactory } from './TargetFactory';
import Utils from './Utils';

export class ChartHelper {
  private static readonly RED = 'rgb(255, 99, 132)';
  private static readonly BLUE = 'rgb(99, 132, 255)';
  private chartSession: Chart;
  private chartAll: Chart;

  public constructor(
    $chartSession: HTMLCanvasElement,
    $chartAll: HTMLCanvasElement,
    allStats: AllStats,
    todayStats: TodayStats
  ) {
    this.chartSession = new Chart($chartSession, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Average Font Size',
            backgroundColor: ChartHelper.RED,
            borderColor: ChartHelper.RED,
            data: [],
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          title: {
            display: true,
            text: 'This session',
          },
        },
      },
    });
    this.chartAll = new Chart($chartAll, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Average Font Size',
            backgroundColor: ChartHelper.RED,
            borderColor: ChartHelper.RED,
            data: [],
            yAxisID: 'y',
          },
          {
            label: 'Playing Time',
            backgroundColor: ChartHelper.BLUE,
            borderColor: ChartHelper.BLUE,
            data: [],
            yAxisID: 'y1',
            fill: true,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          title: {
            display: true,
            text: 'Recent days',
          },
        },
        scales: {
          y: {
            position: 'left',
            title: {
              display: true,
              text: 'mm',
            },
            min: TargetFactory.fontSizeMin,
          },
          y1: {
            position: 'right',
            title: {
              display: true,
              text: 'minutes',
            },
            min: 0,
          },
        },
      },
    });

    this.updateTodayChart(todayStats, allStats);
  }

  private updateAllChart(stats: AllStats) {
    this.chartAll.data.labels = Object.keys(stats);
    const values = Object.values(stats);
    this.chartAll.data.datasets[0].data = values.map(
      (v) => v[IDX_AVERAGE_FONT_SIZE]
    );
    this.chartAll.data.datasets[1].data = values.map((v) => v[IDX_TIME]);
    this.chartAll.update();
  }

  public updateTodayChart(today: TodayStats, all: AllStats) {
    this.chartSession.data.labels = Utils.range(today.scores.length);
    this.chartSession.data.datasets[0].data = today.scores;
    this.chartSession.update();
    this.updateAllChart(all);
  }
}
