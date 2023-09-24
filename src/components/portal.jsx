import { Link } from "react-router-dom"
import { UploadOutlined, LeftOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Upload } from 'antd';
// import { Header } from "./header"
// import { Footer } from "./footer"


const { Title } = Typography;
const { Option } = Select;
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
export const Portal = () => {

    return (
        <div className="w-screen">
            {/* <Header /> */}
            <main className="" >
                <section className="sm:mt-[15%] lg:mt-[5%] mb-[9%]">
                    <div className='w-3/5 p-[1%] mx-auto'>
                        <Link to="/">
                            <Title level={4}><LeftOutlined />Back </Title>
                        </Link>
                    </div>
                    <div className='w-3/5  mx-auto shadow-xl bg-stone-100 rounded-lg sm:p-5'>
                        <Form
                            name="complex-form"
                            onFinish={onFinish}
                        >
                            <Form.Item >
                                <div className='lg:flex justify-around'>
                                    <Form.Item
                                        className='lg:w-3/12'
                                        name="category"
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
                                    <Form.Item
                                        className='lg:w-3/12 '
                                        name="subcategory"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Subcategory is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select Subcategory">
                                            <Option value="Civil Service Commission"> Civil Service Commission </Option>
                                            <Option value="Government House"> Government House </Option>
                                            <Option value="Local Government Area">Local Government Area </Option>
                                            <Option value="Ministry Of Agriculture And Natural Resources"> Ministry Of Agriculture And Natural Resources </Option>
                                            <Option value="Ministry Of Budget And Economic Planning"> Ministry Of Budget And Economic Planning  </Option>
                                            <Option value="Ministry Of Commerce And Industries">Ministry Of Commerce And Industries </Option>
                                            <Option value="Ministry Of Education"> Ministry Of Education </Option>
                                            <Option value="Ministry Of Environment"> Ministry Of Environment </Option>
                                            <Option value="Ministry Of Health"> Ministry Of Health  </Option>
                                            <Option value="Ministry Of Finance "> Ministry Of Finance  </Option>
                                            <Option value="Ministry Of Information"> Ministry Of Information  </Option>
                                            <Option value="Ministry Of Justice"> Ministry Of Justice  </Option>
                                            <Option value="Ministry Of Lands And Survey "> Ministry Of Lands And Survey  </Option>
                                            <Option value="Ministry Of Local Government And Chieftancy Affairs"> Ministry Of Local Government And Chieftancy Affairs </Option>
                                            <Option value="Ministry Of Mineral Development"> Ministry Of Mineral Development  </Option>
                                            <Option value="Ministry Of Physical Planning And Urban Development"> Ministry Of Physical Planning And Urban Development </Option>
                                            <Option value="Ministry Of Science and Technology"> Ministry Of Science and Technology  </Option>
                                            <Option value="Ministry Of Tourisn, Culture And Hospitality"> Ministry Of Tourisn, Culture And Hospitality  </Option>
                                            <Option value="Ministry Of Transport"> Ministry Of Transport  </Option>
                                            <Option value="Ministry Of Watter Resources And Rural Development"> Ministry Of Watter Resources And Rural Development  </Option>
                                            <Option value="Ministry Of Women Affairs And Social Development"> Ministry Of Women Affairs And Social Development </Option>
                                            <Option value="Ministry Of Works"> Ministry Of Works  </Option>
                                            <Option value="Ministry Of Youth And Sports"> Ministry Of Youth And Sports </Option>
                                            <Option value="Organized Private Sector (Neca)"> Organized Private Sector (Neca) </Option>
                                            <Option value="Plaschema"> Plaschema </Option>
                                            <Option value="Plateau State House Of Assembly Commission"> Plateau State House Of Assembly Commission </Option>
                                            <Option value="Tertiary Institutions"> Tertiary Institutions </Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12'
                                        name="subcategoryitem"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Subcategory item is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select Subcategory item">
                                            <Option value="St. Theresa Girl's College">St. Theresa Girl's College </Option>
                                            <Option value="Organized Private Sector (Neca)"> Organized Private Sector (Neca) </Option>
                                            <Option value="PT. Timah"> PT. Timah </Option>
                                            <Option value="Mamko Nig Ltd"> Mamko Nig Ltd </Option>
                                            <Option value="St Murumba College Jos"> St Murumba College Jos </Option>
                                            <Option value="Beautiful Gate Foundation"> Beautiful Gate Foundation </Option>
                                            <Option value="Plateau Private"> Plateau Private </Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div className='lg:flex lg:justify-around lg:my-[5%]'>
                                    <Form.Item label="User Email">
                                        <Form.Item
                                            className='sm:my-0'
                                            name="email"
                                        >
                                            <Input
                                                placeholder="user@email.com"
                                            />
                                        </Form.Item>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12 '
                                        name="hmo"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'HMO is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select HMO">
                                            <Option value="Ashmed ">Ashmed </Option>
                                            <Option value="Health spring"> Health spring </Option>
                                            <Option value="Infinite X2"> Infinite X2 </Option>
                                            <Option value="Lifeworth"> Lifeworth </Option>
                                            <Option value=" Plaschema"> Plaschema </Option>
                                            <Option value=" Pro Health"> Pro Health </Option>
                                            <Option value="Regenix "> Regenix </Option>
                                            <Option value="Salus Trust"> Salus Trust </Option>
                                            <Option value="Well Health"> Well Health </Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12 '
                                        name="file"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please uppload a file!',
                                            },
                                        ]}
                                    >
                                        <Upload name="logo" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item>
                                </div>
                            </Form.Item>
                            <div className='w-fit mx-auto m-1'>
                                <Form.Item colon={false}>
                                    <Button type="primary" htmlType="submit" className='bg-green-500 w-32 h-14 text-lg font-semibold rounded-lg'>
                                        Upload
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    )
}