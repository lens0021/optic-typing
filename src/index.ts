import { OpticTyping } from './OpticTyping';
import Utils from './Utils';
import { StatHelper } from './StatHelper';
import './styles/styles.scss';
const Cookies: any = require('js-cookie');
import Chart from 'chart.js/auto';

const BLUE = 'rgb(99, 132, 255)';

const $board = <HTMLDivElement>document.querySelector('#board');
const $canvas = <HTMLDivElement>document.querySelector('#canvas');
const $input = <HTMLInputElement>document.querySelector('#input');
const $health = <HTMLDivElement>document.querySelector('#health');
const $healthAverage = <HTMLDivElement>(
  document.querySelector('#health-average')
);
const $healthText = <HTMLDivElement>document.querySelector('#health-text');
const $checkKorean = <HTMLInputElement>document.querySelector('#check-korean');
const $buttonStats = <HTMLInputElement>document.querySelector('#button-stats');
const $stats = <HTMLDivElement>document.querySelector('#stats');

const $notification = <HTMLDivElement>document.querySelector('#notification');
const newChart = (id: string, title: string, label: string) => {
  return new Chart(<HTMLCanvasElement>document.getElementById(id), {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: label,
          backgroundColor: BLUE,
          borderColor: BLUE,
          data: [],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  });
};
const chartRecent = newChart(
  'chart-recent',
  'This session',
  'Average Font Size'
);
const chartToday = newChart('chart-today', 'Today', 'Average Font Size');
const chartSession = newChart(
  'chart-session',
  'This session',
  'Average Font Size'
);
const opticTyping = new OpticTyping(
  $board,
  $canvas,
  $input,
  $health,
  $healthAverage,
  $healthText,
  $checkKorean,
  chartSession
);

if (Cookies.get('korean') == '1') {
  $checkKorean.checked = true;
  opticTyping.korean = true;
}

const timeStart = new Date();
const statHelper = new StatHelper(opticTyping, chartToday, chartRecent);

opticTyping.main();

$buttonStats.addEventListener('click', () => {
  $stats.classList.toggle('hidden');
  $input.focus();
});

const showPlayingTime = () => {
  $notification.classList.remove('hidden');
  const t = Utils.humanReadableTime(new Date().getTime() - timeStart.getTime());
  $notification.innerHTML = `Your playing time is: ${t}`;
  setTimeout(() => {
    $notification.classList.add('hidden');
  }, 5000);
};

const everyMinutesTimer = () => {
  statHelper.storeStats();
  showPlayingTime();
  setTimeout(everyMinutesTimer, Utils.minute);
};

setTimeout(everyMinutesTimer, Utils.minute);
$input.focus();
