import React from 'react';
import { Button, Checkbox, Form, type FormProps, Input, notification } from 'antd';
import Logo from '../../components/Logo/Logo';
import LoginController from '../../api/login/login';
import type { NotificationArgsProps } from 'antd';

import { useNavigate } from "react-router-dom";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
    email?: string
};


export default function LoginView() {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string) => {
        api.info({
            message: message,
            placement: "topLeft",
        });
    };

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        if (!values.username || !values.password) return

        const Login = new LoginController(values.username, values.password);

        const token = await Login.getToken()

        if (!token) {
            openNotification(`Invalid credentials, try again!`)
            return
        }

        Login.saveToLocalStorage(token);

        return navigate("/");

    };

    return (
        <div className="h-screen w-full flex-col flex items-center justify-center bg-secondary">
            {contextHolder}
            <Logo />
            <div className="max-w-[600px]"><Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >   <div className="my-5"></div>
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <div className="my-5"></div>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <div className="my-5"></div>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }} className='mt-10'>
                    <Button type="primary" className='bg-additional' htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}
