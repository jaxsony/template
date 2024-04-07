import { FaTachometerAlt, FaUsers, FaBookmark,FaLock , FaPlug } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const NavItems = [
    {
        id: 1,
        menuName: 'Dashboard',
        menuIcon: <FaTachometerAlt size={15} />,
        path: '/dashboard',
    },
    {
        id: 2,
        menuName: 'Admin Users',
        menuIcon: <FaUsers size={15} />,
        path: '/admin-users',
    },
    {
        id: 3,
        menuName: 'App Users',
        menuIcon: <FaUsers size={15} />,
        path: '/app-users',
    },
    {
        id: 4,
        menuName: 'CMS',
        menuIcon: <FaBookmark size={15} />,
        path: '/cms',
    },
    {
        id: 5,
        menuName: 'Roles And Permission',
        menuIcon: <FaLock size={15} />,
        path: '/roles-permission',
    },
    {
        id: 6,
        menuName: 'App Setting',
        menuIcon: <IoMdSettings size={15} />,
        path: '/app-settings',
    },
    {
        id: 7,
        menuName: 'Enquiry',
        menuIcon: <FaPlug size={15} />,
        path: '/enquiry',
    },
]