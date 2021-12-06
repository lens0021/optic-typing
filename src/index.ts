import Utils from './Utils';
import { OpticTyping } from './OpticTyping';
import { StatHelper } from './StatHelper';
import { ChartHelper } from './ChartHelper';
import './styles/styles.scss';
const Cookies: any = require('js-cookie');
import { AllStats, IDX_AVERAGE_FONT_SIZE, TodayStats } from './Stats';

class Index {
  private opticTyping: OpticTyping;
  private statHelper: StatHelper;
  private chartHelper: ChartHelper;

  // DOMs
  // Board
  private $board: HTMLDivElement;
  private $canvas: HTMLDivElement;
  private $input: HTMLInputElement;
  private $health: HTMLDivElement;
  private $notification: HTMLDivElement;
  // Inputs
  private $checkKorean: HTMLInputElement;
  private $buttonStats: HTMLInputElement;
  // Statistics
  private $stats: HTMLDivElement;

  public constructor() {
    // Find elements
    this.$board = <HTMLDivElement>document.getElementById('board');
    this.$canvas = <HTMLDivElement>document.getElementById('canvas');
    this.$input = <HTMLInputElement>document.getElementById('input');
    this.$health = <HTMLDivElement>document.getElementById('health');
    this.$notification = <HTMLDivElement>(
      document.getElementById('notification')
    );
    this.$checkKorean = <HTMLInputElement>(
      document.getElementById('check-korean')
    );
    this.$buttonStats = <HTMLInputElement>(
      document.getElementById('button-stats')
    );
    this.$stats = <HTMLDivElement>document.getElementById('stats');

    // Construct
    this.opticTyping = new OpticTyping(
      this.$board,
      this.$canvas,
      this.$input,
      this.$health,
      this.$notification,
      this.$checkKorean,
      this.averageFontSize
    );
    this.statHelper = new StatHelper();
    this.chartHelper = new ChartHelper(
      <HTMLCanvasElement>document.getElementById('chart-session'),
      <HTMLCanvasElement>document.getElementById('chart-recent'),
      StatHelper.allStats,
      StatHelper.todayStats
    );

    // Register events
    this.opticTyping.onHit = (fontSize: number) => {
      this.statHelper.pushFontSize(fontSize);
      this.chartHelper.addValueToTodayChart(fontSize);
    };
    this.statHelper.onStatChanged = (
      todayStats: TodayStats,
      allStats: AllStats
    ) => {
      this.chartHelper.updateAllChart(allStats);
    };
    this.$buttonStats.addEventListener('click', () => {
      this.$stats.classList.toggle('hidden');
      this.$input.focus();
    });
  }

  public init() {
    this.restoreSettings();
    this.opticTyping.init();

    this.$input.focus();
  }

  private restoreSettings() {
    if (Cookies.get('korean') == '1') {
      this.$checkKorean.checked = true;
      this.opticTyping.korean = true;
    }
  }

  private get averageFontSize(): number {
    const allStats = StatHelper.allStats;
    if (Object.keys(allStats).length === 0) {
      return 8;
    }
    const averages = Object.values(StatHelper.allStats).map((ar) => {
      return ar[IDX_AVERAGE_FONT_SIZE];
    });
    return Utils.average(averages);
  }
}

new Index().init();
