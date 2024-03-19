import React from 'react'
import { Image, Typography } from 'antd';
import { SERVER } from '../../../../config';
import { Link } from 'react-router-dom';
const { Title } = Typography;

export default function CategoryItem({ link, name, icon }: { link: string, name?: string, icon?: string }) {
    return (
        <Link to={link} className='flex py-5 flex-col items-center hover:bg-additional transition-all duration-300'>
            <img className="w-[100px]" src={`${SERVER}${icon}`} alt="icon" />
            <Title level={3}>{name}</Title>
        </Link>
    )
}
