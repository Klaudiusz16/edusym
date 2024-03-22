import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { SERVER } from './../../../config';
const { Title } = Typography

export default function CourseShortcut({ data }: { data: CourseShortcutType }) {
    return (
        <Link to={`/course/${data.id}`} className="group w-full flex flex-col transition-all duration-300">
            <div className="overflow-hidden aspect-video w-full object-cover">
                <img alt='' src={SERVER + data.thumbnail} className='scale-100 group-hover:scale-110 transition-all duration-300' />
            </div>
            <Title level={5} className='mt-4 px-2'>{data.name}</Title>
        </Link>
    )
}


export interface CourseShortcutType {
    link: string,
    thumbnail: string,
    name: string,
    price: number,
    id: number
}