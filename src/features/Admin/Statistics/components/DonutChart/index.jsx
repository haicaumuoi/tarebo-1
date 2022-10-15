import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useRef } from 'react';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          family: '"IBM Plex Sans",ProximaNova, PingFangSC,sans-serif',
          weight: 600,
        },
      },
    },
  },
};

const DonutChart = ({ data, onClick }) => {
  const chartRef = useRef(null);
  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    onClick({ labels: data.labels[index], value: data.datasets[datasetIndex].data[index] });
  };
  const handleClick = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printElementAtEvent(getElementAtEvent(chart, event));
  };
  return <Doughnut ref={chartRef} options={options} data={data} onClick={handleClick} />;
};

export default DonutChart;
