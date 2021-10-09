import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";

const BarChart = () => {
    const [chartData, setChartData] = useState({})
    useEffect(() => {
        const fetchPrices = async () => {
            const res = await fetch("https://corona.lmao.ninja/v2/countries")
            const data = await res.json()
            setChartData({
                labels: data.map((info) => info.country),
                datasets: [
                    {

                        label: "Deaths",
                        data: data.map((info) => info.deaths),
                        backgroundColor: [
                            "#ff0000",

                        ]
                    },
                    {

                        label: "Recovered",
                        data: data.map((info) => info.recovered),
                        backgroundColor: [
                            "#37A006",

                        ]
                    },
                    // {

                    //     label: "Tests",
                    //     data: data.map((info) => info.tests),
                    //     backgroundColor: [
                    //         "#DBD811",

                    //     ]
                    // }
                ]
            });
        };
        fetchPrices()
    }, [])
    return (
        <div style={{padding:30}}>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        yAxes: [
                            {
                                stacked: true,
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                stacked: true,
                            },
                        ],
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: "Covid Line Chart"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    )
};
export default BarChart;