import { faker } from '@faker-js/faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    Title,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    Title,
    Legend
);
  
export const options = {
    plugins: {
        legend: {
            position: 'top' as const,
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        tooltip: {
            enabled: false
        },
    },
    scales: {
        x: {
            display: false, // Hide the x-axis labels
        },
        y: {
            display: false, // Hide the y-axis labels
        },
    },
};
  
const labels = ['January', 'February', 'March', 'April'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: (context: any) => {
                const bgColor = [
                    'rgba(29, 78, 216, 1)',
                    'rgba(59, 130, 246, .8)',
                    'rgba(56, 189, 248, 1)'
                ];
                if(!context.chart.chartArea) {
                    return;
                }
                console.log(context.chart.chartArea)
                const { ctx, data, chartArea: {top, bottom}} = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColor[0])
                gradientBg.addColorStop(1, bgColor[1])
                gradientBg.addColorStop(1, bgColor[2])
                return gradientBg;
            },
            tension: .42,
            showLine: false,
            pointRadius: 0,
        },
    ],
};
  

const CryptoCard = () => {
  return (
    <div className="bg-white rounded border border-gray-100">
        <div className="w-full flex items-center px-4 pt-4">
            <div className="bg-gray-400 w-12 h-12 mr-2 rounded-full"></div>
            CryptoCard
        </div>
        <div className="w-full px-4">
            <h3 className="font-bold text-slate-700 text-lg my-2">$34.123,27</h3>
        </div>
    
        <Line options={options} data={data} redraw={true} height="20px" width="100%" className="rounded"/>
    </div>
  )
}

export default CryptoCard