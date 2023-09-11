export const Header = () => {
    return(
        <header className="w-full flex  h-[13vh] bg-green-500 p-4 ">
        <div className=" ml-[1%] ">
        <img src="assets/plashema-logo.jpg" className=" h-[9vh] w-[215px] rounded-2xl" />
        </div>
        <div className='justify-self-center w-[65%]  ml-[5%] mr-[10%] text-center'>
        <h1 className=' text-2xl text-white mt-5 font-bold '> Plateau Health Pre-Enrollment Portal </h1>
        </div>
        <button className='bg-white p-2 h-[55px] rounded-xl p-2 self-center'>
            {/* <FaSignOutAlt /> */} logout
        </button>
    </header>
    )
}