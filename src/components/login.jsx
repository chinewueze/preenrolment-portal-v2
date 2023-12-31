import  { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Footer } from './footer';
export const Login = ({ login }) => {
    
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);

    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = (details) => {
        login(details);
    };
    return (
        <div className='relative w-screen h-screen bg-stone-100 '>
            <header className="p-3 ">
                <img src="assets/plaschema-logo.png" className='ml-[3%]' />
            </header>
            <main className=' pt-[4%]'>
                <h1 className='text-center font-bold text-3xl'> SIGN IN </h1>
                <Form
                    className='bg-white  rounded-lg lg:w-fit mx-auto my-[3%] p-[2%] shadow-lg'
                    form={form} name="horizontal_login" layout="block" onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        id="email"
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
                        id="password"
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
            <footer className='sm:absolute sm:bottom-[8%] lg:bottom-0'>
                <Footer />
            </footer>
        </div>
    );
};
