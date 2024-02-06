import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2870];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
];

export default function DashChart() {
  return (
    <BarChart
      width={650}
      height={350}
      series={[
        { data: uData, color: 'rgb(2 132 199)', width: '20px' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}