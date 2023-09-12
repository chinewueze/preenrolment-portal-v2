import React, { useState } from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
import { Button } from 'antd';
export const Header = () => {
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
        <header className="w-full flex  h-[13vh] bg-green-500 p-4 ">
            <div className=" ml-[1%] ">
                <img src="assets/plashema-logo.jpg" className=" h-[9vh] w-[215px] rounded-2xl" />
            </div>
            <div className=' w-[65%]  ml-[5%] mr-[10%] text-center'>
                <h1 className=' text-2xl text-white mt-5 font-bold '> Plateau Health Pre-Enrollment Portal </h1>
            </div>
            <Button className='h-11 p-2 bg-white self-center text-black font-semibold' type="primary" loading={loadings[0]} onClick={() => enterLoading(0) }>
                    logout
            </Button>
        </header>
    )
} 