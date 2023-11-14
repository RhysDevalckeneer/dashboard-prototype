import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
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
  
export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const CryptoCard = ({name, imageUrl, value, symbol, mccp}: any) => {
    const [coinPrice, setCoinPrice] = useState([]);
    const [coinLine, setCoinLine] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.coinranking.com/v2/coins");
                const data = response.data.data.coins;
                setCoinPrice(data.slice(0, 4));
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    },[])    
    
    // console.log(coinPrice)
    const data = {
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                // data: coinPrice.map(item => item),
                data: labels.map(() => faker.number.int({ min: 0, max: 100 })),

                borderColor: 'rgba(14, 165, 233, 1)',
                backgroundColor: (context: any) => {
                    const bgColor = [
                        'rgba(59, 130, 246, .4)',
                        'rgba(56, 189, 248, .1)'
                    ];
                    if(!context.chart.chartArea) {
                        return;
                    }
                    console.log(context.chart.chartArea)
                    
                    const { ctx, data, chartArea: {top, bottom}} = context.chart;
                    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                    gradientBg.addColorStop(0, bgColor[0])
                    gradientBg.addColorStop(1, bgColor[1])
                    return gradientBg;
                },
                tension: .42,
                showLine: true,
                pointRadius: 0,
            },
        ],
    };
  return (
    <div className="bg-white rounded border border-gray-100">
        <div className="w-full flex px-4 pt-4">
            <div className="w-5/6 flex justify-start items-center">
                <img src={imageUrl} className="w-10 h-10 mr-2 rounded-full" alt="logo"/>
                <div className="flex-col items-center justify-between">
                    <p className="font-bold text-xl text-slate-700">{symbol}</p>
                    <p className="text-slate-400 text-sm">{name}</p>
                </div>
            </div>
            <div className="">
                <p className="bg-slate-100 py-1 px-2 rounded text-slate-500 text-xs font-bold">{mccp}%</p>
            </div>
        </div>
        <div className="w-full px-4">
            <h3 className="font-bold text-slate-700 text-lg my-2">${value}</h3>
        </div>
    
        <Line options={options} data={data} redraw={true} height="30px" width="100%" className="rounded"/>
    </div>
  )
}

export default CryptoCard