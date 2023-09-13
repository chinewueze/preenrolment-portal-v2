import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';

;

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="w-full flex  h-[13vh] bg-green-500 p-4 ">
            <div className=" ml-[1%] ">
                <img src="assets/plashema-logo.jpg" className=" h-[9vh] w-[215px] rounded-2xl delay-150 duration-700 ease-in-out hover:scale-110" />
            </div>
            <div className=' w-[65%]  ml-[5%] mr-[10%] text-center'>
                <h1 className=' text-2xl text-white mt-5 font-bold '> Plateau Health Pre-Enrollment Portal </h1>
            </div>
            <button className=' rounded-lg text-blue-500 bg-white p-2 text-4xl self-center outline-none active:bg-red-400' onClick={() => navigate("/")} >
                <LogoutOutlined />
            </button>
        </header>
    )
} 