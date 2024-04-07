import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardData } from './cards'
import PieChart from './pieChart'
import LineChart from './lineChart'

export default function Dashboard() {
    return (
        <div className="d-flex flex-column h-100 pageContainer px-sm-1 w-100 pb-sm-1">
            <div className="pageHeader px-3 py-2 my-1">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="fw-semibold h4 my-2">Dashboard</h1>
                    </Col>
                </Row>
            </div>
            <div className="flex-grow-1 overflow-auto pageContent px-3 pb-3">
                <CardData />

                <Row className="g-4">
                    <Col md={6} lg={4} xxl={3}>
                        <PieChart />
                    </Col>
                    <Col md={6} lg={8} xxl={9}>
                        <LineChart />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
