import React, { useEffect } from 'react'
import { Col, Image, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './sidebar.scss';
import { NavItems } from './NavItems';
import Logo from '../../../assets/images/logo.svg';
import LogoWhite from '../../../assets/images/white-logo.svg';
import LogoSmall from '../../../assets/images/logo-small.png';

interface SidebarProps {
    isActiveSidebar: boolean;
    toggleSidebarButton: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isActiveSidebar, toggleSidebarButton }) => {
    const navigate = useNavigate();
    const { theme } = useSelector((state: any) => state.theme);

    useEffect(() => {
        if (isActiveSidebar) {
            toggleSidebarButton();
        }
    }, [navigate])

    return (
        <Col xs="auto" className={`sidebarMenu border-end border-opacity-25 ${isActiveSidebar ? 'sidebarAction' : ''}`}>
            <Navbar bg={theme === 'light' ? 'white' : 'dark'} data-bs-theme={theme} variant={theme} className="h-100 p-0 shadow-sm">
                <div className="d-flex flex-column w-100 h-100">
                    <div className="align-items-center border-bottom border-opacity-25 d-flex px-4 py-1 sidebarLogo">
                        <Link to="/app/dashboard" className="d-inline-block py-1">
                            {theme === 'light' ?
                                <Image
                                    className="img-fluid showInSidebar"
                                    src={Logo}
                                    alt="Logo"
                                    width={116}
                                    height={46}
                                />
                                : <Image
                                    className="img-fluid showInSidebar"
                                    src={LogoWhite}
                                    alt="Logo"
                                    width={116}
                                    height={46}
                                />
                            }
                            <Image
                                className="img-fluid showInSmallSidebar"
                                src={LogoSmall}
                                alt="Logo"
                                width={33}
                                height={33}
                            />
                        </Link>
                    </div>
                    <div className="border-bottom border-opacity-25 d-flex fs-14 navHeader opacity-75 overflow-hidden px-4 py-2 text-nowrap text-uppercase w-100">
                        <span className="py-1 showInSidebar">MAIN NAVIGATION</span>
                        <span className="py-1 showInSmallSidebar">Menu</span>
                    </div>
                    <div className="overflow-x-hidden overflow-y-auto sidebarList">
                        <Nav defaultActiveKey="/dashboard" as="ul" className="flex-column">
                            {
                                NavItems.map((elem) => {
                                    const { id, menuName, menuIcon, path } = elem;
                                    return (
                                        <Nav.Item as="li" key={id}>
                                            <NavLink to={path} className="align-items-center d-flex nav-link px-0 sidebarLink text-nowrap">
                                                <span className="py-1 text-center w-48 sidebarIcon">{menuIcon}</span>
                                                <span className="hideInSmallSidebar">{menuName}</span>
                                            </NavLink>
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </div>
                </div>
            </Navbar>
        </Col >
    )
}
export default Sidebar;