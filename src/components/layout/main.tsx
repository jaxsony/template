import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import { Col } from 'react-bootstrap'
import Sidebar from './sidebar'

export default function Main() {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);

    const toggleSidebarButton = () => {
        setIsActiveSidebar((current: any) => !current);
    };

    return (
        <main className="mainContentBox">
            <div className="d-flex position-relative overflow-hidden mb-2">
                <Sidebar isActiveSidebar={isActiveSidebar} toggleSidebarButton={toggleSidebarButton} />
                <Col xs className="mw-100 h-100 mw-1">
                    {isActiveSidebar ?
                        <div onClick={toggleSidebarButton} className="backdrop bg-black bg-opacity-25 bottom-0 position-fixed start-0 w-100"></div>
                        : null
                    }
                    <div className="d-flex flex-column h-100 w-100">
                        <Header isActiveSidebar={isActiveSidebar} toggleSidebarButton={toggleSidebarButton} />
                        <div className="flex-grow-1 overflow-hidden w-100">
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </Col>
            </div>
        </main>
    )
}
