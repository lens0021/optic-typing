export const INDEX_TIME = 0;
export const INDEX_AVERAGE_FONT_SIZE = 1;
export const INDEX_SUM_FONT_SIZE = 1;
export const INDEX_COUNT_FONT_SIZE = 2;

export type AllStats = {
  [key: string]: [
    // Minutes
    number,
    // Average font-size
    number
  ];
};

export type TodayStats = {
  // Date
  date: string;
  stats: {
    [key: string]: [
      // Minutes
      number,
      // Sum of font-size
      number,
      // Count of font-size
      number
    ];
  };
};

// const sample: AllStats = {
//   '2021-12-03': [10, 5.5],
//   '2021-12-04': [4, 5.4],
// };
// const sample2: TodayStats = {
//   date: '2021-12-05',
//   stats: {
//     '1638508380148': [3, 154, 30],
//     '1638508380248': [6, 300, 60],
//   },
// };
// console.log(sample, sample2);
