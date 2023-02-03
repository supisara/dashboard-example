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

const LineChart = (props) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const borderColor = () => {
    switch (props.index) {
      case 0:
        return "rgba(10, 110, 225, 1)";
      case 1:
        return "rgba(34, 171, 103, 1)";
      case 2:
        return "rgba(248, 189, 38, 1)";
      default:
        return "rgba(10, 110, 225, 1)";
    }
  };

  const bgColor = (context: ScriptableContext<"line">) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 60);

    switch (props.index) {
      case 0:
        gradient.addColorStop(0, "rgba(10, 110, 225, 0.45");
        gradient.addColorStop(0.25, "rgba(10, 110, 225, 0.2)");
        gradient.addColorStop(1, "rgba(10, 110, 225, 0.01)");
        return gradient;

      case 1:
        gradient.addColorStop(0, "rgba(34, 171, 103, 0.45");
        gradient.addColorStop(0.5, "rgba(34, 171, 103, 0.2)");
        gradient.addColorStop(1, "rgba(34, 171, 103, 0.01)");
        return gradient;

      case 2:
        gradient.addColorStop(0, "rgba(248, 189, 38, 0.45");
        gradient.addColorStop(0.5, "rgba(248, 189, 38, 0.2)");
        gradient.addColorStop(1, "rgba(248, 189, 38, 0.01)");
        return gradient;

      default:
        gradient.addColorStop(0, "rgba(10, 110, 225, 0.45");
        gradient.addColorStop(0.5, "rgba(10, 110, 225, 0.2)");
        gradient.addColorStop(1, "rgba(10, 110, 225, 0.01)");
        return gradient;
    }
  };

  useEffect(() => {
    setChartData({
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "Total",
          data: props.data,
          borderWidth: 2,
          borderColor: borderColor(),
          fill: true,
          backgroundColor: bgColor,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    });
    setChartOptions({
      scales: {
        y: {
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
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        // title: {
        //   display: true,
        //   text: "Whom'st let the dogs out",
        // },
      },
    });
  }, []);

  return (
    <div>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default LineChart;
