import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WebsiteTrafficChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartOptions = {
    series: [52.8, 26.8, 20.4],
    options: {
      chart: {
        type: "pie",
        height: 320,
      },
      labels: ["Direct", "Organic search", "Referrals"],
      colors: ["#1C64F2", "#16BDCA", "#9061F9"],
      stroke: {
        colors: ["#ffffff"],
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      plotOptions: {
        pie: {
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },
    },
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-start w-full mb-4">
        <div className="flex items-center">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white mr-2">Website traffic</h5>
        </div>
        <button className="text-blue-700 dark:text-blue-600 font-medium hover:underline text-sm">
          31 Nov - 31 Dev
        </button>
      </div>

      <div className="py-6">
        {mounted && (
          <ApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="pie"
            height={320}
          />
        )}
      </div>

      <div className="grid grid-cols-1 items-center border-t border-gray-200 dark:border-gray-700 pt-5">
        <div className="flex justify-between items-center">
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Last 7 days
          </button>
        </div>
      </div>
    </div>
  );
}