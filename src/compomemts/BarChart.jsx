import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "Income",
          data: [20, 30, 50, 60, 35, 50, 40],
          backgroundColor: ["rgba(10, 110, 225, 1)"],
          barThickness: 16,
          borderRadius: 8,
        },
        {
          label: "Expense",
          data: [40, 20, 60, 50, 30, 40, 30],
          backgroundColor: ["rgba(34, 171, 103, 1)"],
          barThickness: 16,
          borderRadius: 8,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      aspectRatio: 4,
      scales: {
        y: {
          border: {
            display: false,
          },
          ticks: {
            callback: function (value) {
              return value + "K";
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          usePointStyle: true,
          backgroundColor: "rgba(255, 255, 255, 1)",
          titleColor: "rgba(0, 0, 0, 0.8)",
          bodyColor: "rgba(0, 0, 0, 0.8)",
          position: "nearest",
          xAlign: "center",
          yAlign: "bottom",
          background: {
            filters: [
              {
                dx: 10,
                dy: 10,
                blur: 5,
                color: "rgba(0, 0, 0, 1)",
              },
            ],
          },
          // titleFont: {
          //   size: 100
          // },
          // bodyFont: {
          //   size: 50
          // },
          // footerFont: {
          //   size: 20 // there is no footer by default
          // }
        },
      },
    });
  }, []);

  return (
    <div className="root-canvas">
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
};

export default BarChart;
