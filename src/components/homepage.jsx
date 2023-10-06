import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
export const Home = () => {

    const navigate = useNavigate()
    return (
        <div className="w-screen ">
            <main className='w-full sm:h-[80vh] lg:h-[85vh] bg-gradient-to-r from-stone-100 from-10% via-green-200 via-30% to-emerald-200 to-90%  p-5'>
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
                        <Button className='h-11  bg-green-500 text-lg text-white' type="success" onClick={() => navigate('/portal')}>
                            GET STARTED
                        </Button>
                    </div>
                </div>
            </main>
            <div className=' w-full lg:absolute bottom-0'>
            </div>
        </div>
    )
}


