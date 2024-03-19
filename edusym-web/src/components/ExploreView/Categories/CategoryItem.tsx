import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography;

export default function CategoryItem({ link, name, icon }: { link: String, name: string, icon: string }) {
    return (
        <div>
            <Title level={3}>{name}</Title>
        </div>
    )
}
