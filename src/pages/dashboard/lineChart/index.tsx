import React from 'react';
import { Card } from 'react-bootstrap';
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
import { productData } from '../sample';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const primary = '#1A3866';



const LineChart = () => {
    const productCount = productData.length;
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Product Sale',
                data: [productCount / 2, productCount / 4, productCount, productCount / 2, productCount, productCount / 3, productCount / 2],
                borderColor: primary,
                tension: 0.1
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },

    };


    return (
        <Card className="h-100">
            <Card.Header as="h6" className="fw-semibold bg-body">Sales Analysis</Card.Header>
            <Card.Body>
                <Line options={options} data={data} />
            </Card.Body>
        </Card>
    )
}

export default LineChart;