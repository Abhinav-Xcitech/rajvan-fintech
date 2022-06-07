import React from "react";
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
import { Line } from 'react-chartjs-2';

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
            data: [1, 3, 4, 2, null, null, null, null, null],
            borderWidth: 5,
            lineJoin: "round",
            borderCapStyle: "round",
            lineTension: .5

        },
        {
            label: "My red line",
            fill: false,
            borderColor: "red",
            data: [null, null, null, 2, 1.5, 3, null, null, null],
            borderWidth: 10,
            lineJoin: "round",
            borderCapStyle: "round",
            lineTension: .5

        },
        {
            label: "My green line defq",
            fill: false,
            borderColor: "green",
            data: [null, null, null, null, null, 3, 3.5, 4.7],
            borderWidth: 8,
            lineJoin: "round",
            borderCapStyle: "round",
            lineTension: .5

        },
        {
            label: "My green line defqg",
            fill: false,
            borderColor: "green",
            data: [null, null, null, null, null, null, null, 4.7, 4.9, 6.2],
            borderWidth: 8,
            lineJoin: "round",
            borderCapStyle: "round",
            lineTension: .5

        }
    ]
};

function Ribben() {
    return (
        <div>
            <Line options={genericOptions} data={data} />
        </div>
    )
}

export default Ribben