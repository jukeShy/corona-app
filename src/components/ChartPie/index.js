import React from 'react';
import { Pie } from 'react-chartjs-2';

const ChartPie = ({ data }) => {
  return (
    <div>
      <Pie
        data={{
          labels: data.map((countryStats) => countryStats.label.toUpperCase()),
          datasets: [
            {
              data: data.map((countryStats) => countryStats.value),
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartPie;
