import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card, Stack } from 'react-bootstrap'
import { FaCartArrowDown, FaFileInvoice, FaNewspaper, FaUsers } from 'react-icons/fa'


export const cardDataList = [
    {
        id: 1,
        bg: "primary",
        icon: <FaUsers size={40} />,
        title: '1',
        subtitle: 'User Active Status'
    },
    {
        id: 2,
        bg: "primary",
        icon: <FaFileInvoice size={40} />,
        title: 0,
        subtitle: 'Product Count'
    },
    {
        id: 3,
        bg: "primary",
        icon: <FaCartArrowDown size={40} />,
        title: 0,
        subtitle: 'Products in Cart'
    },
    {
        id: 4,
        bg: "primary",
        icon: <FaNewspaper size={40} />,
        title: 0,
        subtitle: 'Post Count'
    }
]


export const InfoCard = ({ bg, icon, title, subtitle }: any) => {
    return (
        <Card
            className="rounded-3 h-100 bg-opacity-25"
            bg={bg}
        >
            <Card.Body>
                <Stack direction="horizontal" gap={3}>
                    {icon}
                    <div>
                        <Card.Title className="fs-3 fw-bold">{title}</Card.Title>
                        <Card.Subtitle>{subtitle}</Card.Subtitle>
                    </div>
                </Stack>
            </Card.Body>
        </Card>
    )
}


export const CardData = () => {
    return (
        <Row className="g-4 mb-4">
            {cardDataList.map((cardData) => {
                const { id, bg, icon, title, subtitle } = cardData;
                return (
                    <Col key={id} sm={6} lg={4} xxl={3}>
                        <InfoCard bg={bg} icon={icon} title={title} subtitle={subtitle} />
                    </Col>
                )
            })}

        </Row>
    )
}
