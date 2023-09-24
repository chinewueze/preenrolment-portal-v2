import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';

;

export const Header = () => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        sessionStorage.removeItem("email_user");
        navigate("/")
    }

    return (
        <header className="w-full flex  h-[13vh] bg-green-500 p-4 ">
            <div className=" ml-[1%] ">
                <img src="assets/plashema-logo.jpg" className=" h-[9vh] w-[185px] rounded-2xl delay-150 duration-700 ease-in-out hover:scale-110" />
            </div>
            <div className=' w-[75%] mt-2  ml-[5%] mr-[10%] text-center'>
                <h1 className=' sm:text-lg lg:text-2xl text-white  font-bold '> Plateau Health Pre-Enrollment Portal </h1>
            </div>
            <button
                className=' rounded-lg text-blue-500 bg-white p-2 text-4xl self-center outline-none active:bg-red-400'
                onClick = {handleClick}
            >
            <LogoutOutlined />
        </button>
        </header >
    )
}

