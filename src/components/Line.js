import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line as LineChart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const genericOptions = {
    fill: false,
    bezierCurve: true,


    elements: {
        point: {
            borderWidth: 0,
            radius: 0,
            backgroundColor: "rgba(0,0,0,0)"
        }
    },

    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: false,
        },
    },

};

const data = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
    ],

    datasets: [
        {
            label: "My green line",
            fill: false,
            borderColor: "yellow",
            data: [1, 3, 4, 2,54 ,43,45,34,54,],
            borderWidth: 5,
            lineJoin: "round",
            borderCapStyle: "round",
          

        }
       
    ]
};


const Line=()=> {
  return (
    <LineChart options={genericOptions} data={data} />
  )
}

export default Line