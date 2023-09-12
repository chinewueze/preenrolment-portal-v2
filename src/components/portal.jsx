import React, { useState, useEffect } from 'react';
// import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, Typography } from 'antd';
import { Link } from 'react-router-dom'
import { Header } from "./header"
import { Footer } from "./footer"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';


const { Title } = Typography;
const { Option } = Select;
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
export const Portal = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };
    return (
        <div className="w-screen">
            <Header />
            <main className='w-full border-2 border-blue-500 '>
                <Form
                    name="complex-form"
                    onFinish={onFinish}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item label="User Email">
                        {/* <Space> */}
                        <Form.Item
                            name="email"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: 'Username is required',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: 160,
                                }}
                                placeholder="Please input"
                            />
                        </Form.Item>
                        {/* </Space> */}
                    </Form.Item>
                    <Form.Item >
                        <Space.Compact>
                            <Form.Item
                                name="value"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Category is required',
                                    },
                                ]}
                            >
                                <Select placeholder="Select Category">
                                    <Option value="Formal">Formal </Option>
                                    <Option value="Informal"> Informal </Option>
                                    <Option value="Equity"> Equity </Option>
                                </Select>
                            </Form.Item>
                        </Space.Compact>
                        <Space.Compact>
                            <Form.Item
                                name="value"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Category is required',
                                    },
                                ]}
                            >
                                <Select placeholder="Select Category">
                                    <Option value="Formal">Formal </Option>
                                    <Option value="Informal"> Informal </Option>
                                    <Option value="Equity"> Equity </Option>
                                </Select>
                            </Form.Item>
                        </Space.Compact>
                        {/* <Space.Compact> */}
                            <Form.Item
                                name="value"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Category is required',
                                    },
                                ]}
                            >
                                <Select placeholder="Select Category">
                                    <Option value="Formal">Formal </Option>
                                    <Option value="Informal"> Informal </Option>
                                    <Option value="Equity"> Equity </Option>
                                </Select>
                            </Form.Item>
                        {/* </Space.Compact> */}
                    </Form.Item>

                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit" className='bg-green-500'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </main>
            <Footer />
        </div>
    )
}