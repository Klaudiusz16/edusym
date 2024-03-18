import { FunctionComponent, useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"


export default function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const currentPath = window.location.pathname
        setIsActive(currentPath == menuItem.path);
    }, [location])

    return (
        <Link to={menuItem.path} className={`${isActive ? "bg-white text-additional" : "bg-transparent text-white"} py-4 px-2 text-md flex items-center gap-2  transition-all duration-300 font-normal`}>
            <menuItem.icon /> {menuItem.name}
        </Link>
    )
}

export interface MenuItemType {
    path: string,
    name: string,
    icon: FunctionComponent
}
