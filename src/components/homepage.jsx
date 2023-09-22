import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Header } from "./header"
import { Footer } from "./footer"
import { Button } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen">
            <Header />
            <main className='w-full h-[83%] bg-green-200 p-5'>
                <div className="w-2/5 mx-auto">
                    <div className="w-fit mx-auto">
                        <img src="assets/upload.png" />
                    </div>
                </div>
                <div className="mx-auto ">
                    <Title level={2}
                        className="text-center"
                    >
                        Click the button below and proceed to upload Nominal Roll..
                    </Title>
                    <div className="w-fit mx-auto">
                        <Button className='h-11  bg-green-500 text-lg' type="primary" onClick={() => navigate('/portal')}>
                            GET STARTED
                        </Button>
                    </div>
                </div>
            </main>
            <div className=' w-full lg:absolute bottom-0'>
                <Footer />
            </div>
        </div>
    )
}


