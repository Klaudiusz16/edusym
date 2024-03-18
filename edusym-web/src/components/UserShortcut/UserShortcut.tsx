import { Avatar } from 'antd'
import React from 'react'
import { UserOutlined } from "@ant-design/icons"

export default function UserShortcut() {
    return (
        <div>
            <Avatar size={40} icon={<UserOutlined />} />
        </div>
    )
}
