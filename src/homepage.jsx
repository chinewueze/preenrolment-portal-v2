import { Header } from "./components/header"
import { Footer } from "./components/footer"
export const Home = () => {
    return (
        <div className="w-screen h-screen">
           <Header/>
            <main className='w-full h-[85%] bg-green-200 p-5'>
                <div className="ml-[25%]  mt-[15%] mr-[11%]">
                    <h2 className="text-2xl font-bold"> Click the button below and proceed to upload Nominal Roll.. </h2>
                    <button className="bg-blue-400 rounded-lg p-2 text white mx-[25%] my-7"> 
                        GET STARTED
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    )
}