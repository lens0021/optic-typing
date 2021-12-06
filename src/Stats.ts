export const IDX_TIME = 0;
export const IDX_AVERAGE_FONT_SIZE = 1;

export type TodayStats = {
  date: string;
  times: {
    [key: string]: number;
  };
  scores: number[];
};

export type AllStats = {
  [key: string]: [
    // Minutes
    number,
    // Average font-size
    number
  ];
};

// const sample: TodayStats = {
//   date: '2021-12-05',
//   times: {
//     '1638508380148': 3,
//     '1638508380248': 6,
//   },
//   scores: [5, 6, 7, 6, 5],
// };
// const sample2: AllStats = {
//   '2021-12-03': [10, 5.5],
//   '2021-12-04': [4, 5.4],
// };
// console.log(sample, sample2);
