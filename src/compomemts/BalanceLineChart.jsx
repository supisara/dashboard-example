import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const BalanceLineChart = (props) => {
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
          data: [50, 60, 50, 60, 45, 70, 55],

          fill: false,

          tension: 0.3,
          borderWidth: 3,
          borderColor: "rgba(255, 255, 255, 1)",
          hoverBorderColor: "rgb(0, 0, 0)",
          hoverBorderWidth: 4,

          pointHoverRadius: 6,
          pointBorderColor: "rgba(0, 0, 0, 0)",
          pointBackgroundColor: "rgba(0, 0, 0, 0)",
          pointHoverBackgroundColor: "rgb(10, 110, 225)",
          pointHoverBorderWidth: 3,
          pointHoverBorderColor: "rgb(255, 255, 225)",
        },
        {
          label: "Expense",
          data: [50, 20, 50, 80, 25, 45, 10],
          borderWidth: 3,
          borderColor: "rgba(255, 255, 255, .3)",
          tension: 0.3,
          pointHoverRadius: 6,
          pointBorderColor: "rgba(0, 0, 0, 0)",
          pointBackgroundColor: "rgba(0, 0, 0, 0)",
          pointHoverBackgroundColor: "rgb(10, 110, 225)",
          pointHoverBorderWidth: 3,
          pointHoverBorderColor: "rgb(255, 255, 225)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "point",
      },
      responsive: true,
      animation: false,
      scales: {
        y: {
          border: {
            display: false,
            dash: [4, 8],
          },
          ticks: {
            beginAtZero: true,
            display: false,
          },
          grid: {
            display: true,
            color: "rgba(255, 255, 255, .2)",
          },
        },
        x: {
          border: {
            display: false,
          },
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgb(255, 255, 225)",
          mode: "nearest",
          intersect: false,
          bodyFont: {
            size: 14,
            weight: 600,
          },
          bodyColor: "rgb(10, 110, 225)",
          yAlign: "bottom",
          displayColors: false,
          callbacks: {
            title: function (tooltipItems) {
              return "";
            },
            label: function (tooltipItem) {
              let label = tooltipItem.parsed.y || "0";
              return " $ " + label + " ";
            },
          },
          // enabled: true,
          //
        },
      },
    });
  }, []);

  return (
    <div className="root-canvas">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default BalanceLineChart;
