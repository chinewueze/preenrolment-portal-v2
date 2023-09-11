import { Header } from "./components/header"
import { Footer } from "./components/footer"
export const Portal = () => {
    return (
        <div className="w-screen h-screen">
           <Header/>
            <main
                className='w-full h-[85%] bg-green-200'>

            </main>
            <Footer />
        </div>
    )
}