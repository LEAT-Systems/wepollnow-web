import React, {useState, useEffect} from 'react'
import {Refresh} from "@mui/icons-material"
import { Bar } from "react-chartjs-2";
import { Chart, registerables, defaults, Legend } from 'chart.js';

Chart.register(...registerables)
Chart.defaults.plugins.legend.position = "right";
Chart.defaults.layout.padding = 40;
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
    <div className='flex flex-col gap-7 justify-center align-center h-full w-full'>
      <h1 className='text-2xl'>This is a Chart</h1>
      <div className='w-3/4 h-3/4'>
        <Bar
          height={5}
          width={10}
          data={data}
          plugins={[legendMarginRight]}
          options={{
            // Add padding
            layout: {
              padding: 50
            },
            // Change the legend label boxes
            plugins: {
              
              legend: {
                position: "right",
                align: "start",
                rtl: false,
                ltr: true,
                labels: {
                  color: '#082a0f',
                  font: {
                    size: 14,
                  },
                  boxWidth: 10,
                  boxHeight: 7,
                  usePointStyle: true,
                  pointStyle: 'circle',
                  pointStyleWidth: 10,
                  textAlign: "left",

                  
                }
              }
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
                  callback: function(value) {
                    // Step one
                    // this.getLabelForValue(value)
                    
                    const valueLegend = this.getLabelForValue(value);
                    // Step two
                    const filterValue = valueLegend.replace(",", "");
                    // step three
                    if (filterValue.length <= 3) {
                      return filterValue;
                    }
                    if ( filterValue.length >= 3 && filterValue.length <= 6) {
                      return valueLegend.substr(0, 3) + "K"
                    }
                    if (filterValue.length >= 7 && filterValue.length <= 9) {
                      return valueLegend.substr(0, 4) + "M"
                    }
                  }
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default BarChart
