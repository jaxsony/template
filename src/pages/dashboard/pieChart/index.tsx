import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card } from 'react-bootstrap';
import '../../../assets/css/_variables.scss'
import { productData } from '../sample';

ChartJS.register(ArcElement, Tooltip, Legend);
const primary = '#1A3866';
const info = '#D41A1F';
const danger = '#3498db';
const productCount = productData.length;

const data = {
    labels: ['Product', 'Pending', 'Sales'],
    datasets: [
        {
            data: [productCount, productCount / 4, productCount / 2],
            backgroundColor: [primary, info, danger],
            hoverBackgroundColor: [primary, info, danger],
        },
    ],
};
const options = {
    responsive: true,

};

export const PieChart = () => {
    return (
        <Card className="h-100">
            <Card.Header as="h6" className="fw-semibold bg-body">Product Analysis</Card.Header>
            <Card.Body>
                <Doughnut className="mx-auto mw-100" options={options} data={data} />
            </Card.Body>
        </Card>
    )
}

export default PieChart;