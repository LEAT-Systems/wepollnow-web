/** @format */

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: [
        "APC",
        "PDP",
        "LP",
        "ADC",
        "AAC",
        "APGA",
        "AUN",
        "BNPP",
        "CNC",
        "DPC",
      ],
      data: [18, 15, 20, 24, 30],
      backgroundColor: [
        "rgb(206, 243, 212)",
        "rgb(173, 234, 183)",
        "rgb(131, 224, 147)",
        "rgb(49, 203, 75)",
        "rgb(7, 161, 32)",
      ],
      borderColor: [null],
      borderWidth: 0,
    },
  ],
};

const colors = data.datasets[0].data.map((item) => {
  console.log(item);
  if (item <= parseInt(Math.min(...data.datasets[0].data)) + 7) {
    console.log(item + ": ", parseInt(Math.min(...data.datasets[0].data)) + 7);
    return "#000";
  } else {
    return "#fff";
  }
});

// console.log(colors);

export default function PieChart() {
  return (
    <div className='w-full h-full relative inline-block'>
      <Pie
        data={data}
        plugins={[ChartDataLabels]}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              align: "center",
              labels: {
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
              color: colors,
              labels: (arg) => {
                return arg.label;
              },
              formatter: function (value, context) {
                const sumOfDataArr = data.datasets[0].data.reduce(
                  (accumulator, value) => {
                    return accumulator + value;
                  }
                );
                const percentage = Math.round((value * 100) / sumOfDataArr);
                if (percentage > 7) {
                  return `${percentage}%`;
                } else {
                  return (value = "");
                }
              },
            },
          },
        }}
      />
    </div>
  );
}