import React from "react";
import { Badge, Button, Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown, FaBell, FaLock, FaShoppingBag, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { MdBedtime, MdBedtimeOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import storage from "../../../helpers/storage";
import { updateTheme } from "../../../redux/actions/theme-actions";
import USER_IMG from '../../../assets/images/default-avatar.jpg';
import Logo from '../../../assets/images/logo.svg';
import LogoWhite from '../../../assets/images/white-logo.svg';
import './header.scss';
import AppTooltip from "../../common/tooltip";

interface HeaderProps {
    isActiveSidebar: boolean;
    toggleSidebarButton: () => void;
}
const Header: React.FC<HeaderProps> = ({ isActiveSidebar, toggleSidebarButton }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isDarkMode = useSelector((state: any) => state.theme.theme);

    const localData: any = { name: "admin" };
    const userName = localData.name;
    const UserProfile = USER_IMG;

    const toggleTheme = () => {
        dispatch(updateTheme())
    }

    const profileHandler = () => {
        navigate("/profile");
    }

    const logoutHandler = () => {
        storage.clearToken();
        navigate('/')
    }

    const passwordHandler = () => {
        navigate("/change-password");
    }

    return (
        <>
            <Navbar bg={isDarkMode === 'light' ? 'white' : 'dark'} data-bs-theme={isDarkMode} variant={isDarkMode} className="mh-60 py-0 px-md-1 border-opacity-25 border-bottom">
                <Container fluid className="px-3 h-100">
                    <Button onClick={toggleSidebarButton} variant="link" className="align-items-center d-flex justify-content-center navMenuBtn p-0">
                        <span className={`${isDarkMode === 'light' ? 'bg-dark' : 'bg-light'} d-inline-block menuTrigger position-relative text-center ${isActiveSidebar ? 'active' : ''}`}></span>
                    </Button>
                    <Link to="/" className="d-xl-none mx-2 mx-md-3 px-1">
                        {isDarkMode === 'light' ?
                            <Image
                                className="img-fluid"
                                src={Logo}
                                alt="Logo"
                                width={80}
                                height={32}
                            />
                            : <Image
                                className="img-fluid showInSidebar"
                                src={LogoWhite}
                                alt="Logo"
                                width={116}
                                height={46}
                            />}
                    </Link>
                    <Nav className="ms-auto align-items-center">
                        <AppTooltip title={isDarkMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                            <Button className="text-body" variant="link" onClick={toggleTheme}>
                                {isDarkMode === 'light' ? <MdBedtime size={20} /> : <MdBedtimeOff size={20} />}
                            </Button>
                        </AppTooltip>
                        <Button
                            variant="link"
                            className="text-body position-relative py-0 mt-1"
                        // onClick={() => setBuyModal(true)}
                        >
                            <FaShoppingBag size={18} />
                            <Badge bg="dark" className="border border-white fw-semibold position-absolute rounded-pill start-100 top-0 translate-middle ms-n1">{'0'}
                                <span className="visually-hidden">Shopping Bag</span>
                            </Badge>
                        </Button>
                        <Button variant="link" className="text-body position-relative py-0 mt-1 ms-2">
                            <FaBell size={18} />
                            <Badge bg="dark" className="border border-white fw-semibold position-absolute rounded-pill start-100 top-0 translate-middle ms-n1">{'0'}
                                <span className="visually-hidden">Notification</span>
                            </Badge>
                        </Button>
                        <Dropdown className="profileDropdown ms-4">
                            <Dropdown.Toggle variant="link" id="dropdown-profile" className="border-0 fs-14 fw-semibold text-decoration-none p-0 text-body">
                                <Image className="object-fit-cover rounded-circle" src={UserProfile} alt={`${userName} Profile Image`} width={40} height={40} />
                                <span className="align-middle d-none d-md-inline-block ms-1 px-2 text-truncate mw-150">{userName}</span>
                                <FaAngleDown size={16} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="fs-14 shadow-sm">
                                <Dropdown.Item onClick={profileHandler} className="fw-medium gap-2 d-flex align-items-center">
                                    <FaUserCircle />
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Item onClick={passwordHandler} className="fw-medium gap-2 d-flex align-items-center">
                                    <FaLock />
                                    Change Password
                                </Dropdown.Item>
                                <Dropdown.Item onClick={logoutHandler} className="fw-medium gap-2 d-flex align-items-center">
                                    <FaSignOutAlt />
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;