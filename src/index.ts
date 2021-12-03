import { OpticTyping } from './OpticTyping';
import Utils from './Utils';
import { StatHelper } from './StatHelper';
import './styles/styles.scss';
const Cookies: any = require('js-cookie');
import Chart from 'chart.js/auto';

const $board = <HTMLDivElement>document.querySelector('#board');
const $canvas = <HTMLDivElement>document.querySelector('#canvas');
const $input = <HTMLInputElement>document.querySelector('#input');
const $health = <HTMLDivElement>document.querySelector('#health');
const $healthAverage = <HTMLDivElement>(
  document.querySelector('#health-average')
);
const $notification = <HTMLDivElement>document.querySelector('#notification');

const $checkKorean = <HTMLInputElement>document.querySelector('#check-korean');
const $buttonStats = <HTMLInputElement>document.querySelector('#button-stats');
const $stats = <HTMLDivElement>document.querySelector('#stats');

const RED = 'rgb(255, 99, 132)',
  BLUE = 'rgb(99, 132, 255)';

const chartSession: Chart = new Chart(
    <HTMLCanvasElement>document.getElementById('chart-session'),
    {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Average Font Size',
            backgroundColor: RED,
            borderColor: RED,
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
    }
  ),
  chartRecent: Chart = new Chart(
    <HTMLCanvasElement>document.getElementById('chart-recent'),
    {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Average Font Size',
            backgroundColor: RED,
            borderColor: RED,
            data: [],
            yAxisID: 'y',
          },
          {
            label: 'Playing Time',
            backgroundColor: BLUE,
            borderColor: BLUE,
            data: [],
            yAxisID: 'y1',
            fill: true,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        scales: {
          y: {
            position: 'left',
            title: {
              display: true,
              text: 'mm',
            },
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
    }
  );
const opticTyping = new OpticTyping(
  $board,
  $canvas,
  $input,
  $health,
  $notification,
  $healthAverage,
  $checkKorean
);

opticTyping.onHit = () => {
  if (opticTyping.queueHealth.length > opticTyping.capacityQueue) {
    chartSession.data?.labels?.shift();
    chartSession.data.datasets[0].data.shift();
  }
  chartSession.data?.labels?.push('');
  chartSession.data.datasets[0].data.push(
    Utils.average(opticTyping.queueFontSize)
  );
  chartSession.update();
  statHelper.storeStats();
};

if (Cookies.get('korean') == '1') {
  $checkKorean.checked = true;
  opticTyping.korean = true;
}

const statHelper = new StatHelper(opticTyping, chartRecent);

$buttonStats.addEventListener('click', () => {
  $stats.classList.toggle('hidden');
  $input.focus();
});

const everyMinutesTimer = () => {
  statHelper.storeStats();
  setTimeout(everyMinutesTimer, Utils.minute);
};
setTimeout(everyMinutesTimer, Utils.minute);

opticTyping.main();
$input.focus();
