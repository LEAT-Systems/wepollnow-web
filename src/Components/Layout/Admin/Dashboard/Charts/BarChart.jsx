import React, {useState, useEffect} from 'react'
import {Refresh} from "@mui/icons-material"
import { Bar } from "react-chartjs-2";
import { Chart, registerables, defaults, Legend } from 'chart.js';

Chart.register(...registerables)
/* Target the legend positioning */
Chart.defaults.plugins.legend.position = "right";
/* Give all element a defualt padding or change chartjs defualt padding*/
// Chart.defaults.layout.padding = 10;
/* Target bar borderWidth */
Chart.defaults.elements.bar.borderWidth = 0;
const data = {
  labels: [
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
  /* This type of endpoint is used to perform group bar chart */
  datasets: [
    {
      label: "Age 18-29",
      backgroundColor: "rgb(206, 243, 212)",
      borderColor: "none",
      borderWidth: 0,
      barPercentage: 1.0,
      data: [3, 5, 6, 7, 3, 5, 6, 7, 8, 5],
    },
    {
      label: "Age 30-39",
      backgroundColor: "rgb(173, 234, 183)",
      borderColor: "blue",
      borderWidth: 0,
      barPercentage: 1.0,
      data: [4, 7, 3, 6, 14, 11, 4, 12, 9, 11],
    },
    {
      label: "Age 40-49",
      backgroundColor: "rgb(131, 224, 147)",
      borderColor: "none",
      borderWidth: 0,
      barPercentage: 1.0,
      data: [11, 17, 4, 6, 9, 2, 2, 5, 14, 8],
    },
    {
      label: "Age 50-59",
      backgroundColor: "rgb(49, 203, 75)",
      borderColor: "none",
      borderWidth: 0,
      barPercentage: 1.0,
      data: [12, 9, 3, 6, 10, 7, 4, 16, 4, 9],
    },
    {
      label: "Above 59-69",
      backgroundColor: "rgb(7, 161, 32)",
      borderColor: "none",
      borderWidth: 0,
      barPercentage: 1.0,
      data: [11, 9, 7, 9, 11, 4, 10, 13, 14, 10],
    },
  ],
};

/* To manipulate the legend position, ideally you can't change the position */
const legendMarginRight = {
  id: "legendMarginRight",
  beforeInit(chart, argument, options) {
    console.log(chart);
    const fitValue = chart.legend.fit;

    chart.legend.fit = function fit() {
      fitValue.bind(chart.legend)();
      let width = this.width += 100
        
      return width;
    };
  },
};

const BarChart = () => {
  return (
    <div className='flex flex-col justify-center align-center h-full w-full'>
      <div className='w-full h-full border rounded '>
        <Bar
          height={75}
          width={150}
          data={data}
          plugins={[legendMarginRight]}
          options={{
            /* Remove responsiveness */
            responsive: true,
            // Add padding
            layout: {
              padding: {
                top: 30,
                bottom: 20,
                right: 20,
                left: 30
              }
              
            },
            // Change the legend label boxes
            plugins: {
              legend: {
                position: "top",
                align: "center",
                labels: {
                  color: "#082a0f",
                  font: {
                    size: 14,
                  },
                  boxWidth: 10,
                  boxHeight: 7,
                  usePointStyle: true,
                  pointStyle: "circle",
                  pointStyleWidth: 10,
                  textAlign: "left",
                },
              },
            },

            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  // 1. Target Value
                  // 2. Remove all "," from all values
                  // 3. Add a "K" to tell the number equals a thousand or above
                  // 4. Add an "M" to tell the number equals a million or above
                  // 5. Add a "B" to tell the number equals a billion or above
                  callback: function (value) {
                    // Step one
                    // this.getLabelForValue(value)

                    const valueLegend = this.getLabelForValue(value);
                    // Step two
                    const filterValue = valueLegend.replace(",", "");
                    // step three
                    if (filterValue.length <= 3) {
                      return filterValue;
                    }
                    if (filterValue.length >= 3 && filterValue.length <= 6) {
                      return valueLegend.substr(0, 3) + "K";
                    }
                    if (filterValue.length >= 7 && filterValue.length <= 9) {
                      return valueLegend.substr(0, 4) + "M";
                    }
                  },
                },
              },
              /* padding */
              // r: {
              //   ticks: {
              //     backdropPadding: {
              //       x: 22,
              //       y: 10
              //     }
              //   }
              // }
            },
          }}
        />
      </div>
    </div>
  );
}

export default BarChart
