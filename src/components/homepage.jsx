import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from "./header"
import { Footer } from "./footer"
import { Button } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Typography } from 'antd';
const { Title } = Typography;
export const Home = () => {
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
        <div className="w-screen h-screen">
            <Header />
            <main className='w-full h-[85%] bg-green-200 p-5'>
                <div className="w-2/5 mx-auto">
                    {/* <FontAwesomeIcon icon={faFileArrowUp} /> */}
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
                         <Button className='h-11  bg-green-500 text-lg' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                                    GET STARTED
                        </Button>
                     </div> 
                    </div>
            </main>
            <Footer />
        </div>
    )
}


