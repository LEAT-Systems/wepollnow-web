/** @format */

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
  color: "#FE777B"
})
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: [
        "# of Votes",
        "12254 of Votes",
        "#3245 of Votes",
        "326534 of Votes",
        "0000 of Votes",
      ],
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};


export default function PieChart() {
  
  
  return (
    <div className='w-full h-full relative inline-block'>
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              align: "center",
              labels: {
                color: "#082a0f",
                boxWidth: 10,
                boxHeight: 7,
                usePointStyle: true,
                pointStyle: "circle",
                pointStyleWidth: 10,
                textAlign: "left",
              },
            },
            /* Formatting Pie DataLabel display ontop */
            datalabels: {
              formatter: function (value, context) {
                var sumOfDataArr = data.datasets[0].data.reduce((accumulator, value) => {
                    return accumulator + value;
                  });
                return (Math.round(value * 100 / sumOfDataArr))  + "%";
              },
            },
          },
        }}
      />
    </div>
  );
}


