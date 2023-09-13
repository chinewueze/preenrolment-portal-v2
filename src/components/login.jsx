import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Footer } from './footer';
export const Login = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);

    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    return (
        <div className='relative w-screen h-screen'>
            <header className="p-3 ">
                <img src="assets/plaschema-logo.png" className='ml-[3%]' />
            </header>
            <main className=' pt-[4%]'>
                <h1 className='text-center font-bold text-3xl'> SIGN IN </h1>
                <Form
                    className=' bg-stone-100 rounded-lg w-fit mx-auto my-[3%] p-[2%] shadow-lg'
                    form={form} name="horizontal_login" layout="block" onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            className='w-96'
                            prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon " />}
                            className='w-96'
                            type="password"
                            placeholder="Password" />
                    </Form.Item>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                onClick={() => {if (form.isFieldsTouched()) {navigate('/home')} }}
                                type="primary"
                                htmlType="submit"
                                className={` my-[2%]  ${clientReady
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-500 text-disabledText'
                                    }`}

                                disabled={
                                    !clientReady ||
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                Sign in
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </main>
            <Footer />
        </div>
    );
};
