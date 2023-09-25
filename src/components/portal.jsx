import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom"
import Axios from "axios";
import { UploadOutlined, LeftOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Upload } from 'antd';

const { Title } = Typography;
const { Option } = Select;

export const Portal = () => {

    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategory, setSubCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [subCategoryItem, setSubCategoryItem] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const [hmo, setHmo] = useState([]);
    const [selectedHmo, setSelectedHmo] = useState("");
    const [file, setFile] = useState(null);

    const baseURL = import.meta.env.VITE_BASE_URL;

    const getCategory = useCallback(async () => {
        try {
            const fetchCategory = await Axios.post(`${baseURL}/sectors`);
            const item = fetchCategory.data.data;
            setCategory(item);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleSubCategory = useCallback(async (e) => {
        const curr = e.target.value;
        setSelectedCategory(curr);
        try {
            const fetch = await Axios.post(`${baseURL}/category/${curr}`);
            const result = fetch.data.data;
            setSubCategory(result);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleSubCategoryItem = useCallback(
        async (e) => {
            const impt = e.target.value;
            setSelectedSubCategory(impt);
            try {
                const fetchItem = await Axios.post(
                    `${baseURL}/${selectedCategory}/${impt}`,
                );
                const subItem = fetchItem.data.data;
                setSubCategoryItem(subItem);
            } catch (err) {
                console.log(err);
            }
        },
        [selectedCategory],
    );

    const getHmo = useCallback(async () => {
        try {
            const fetchHmo = await Axios.post(`${baseURL}/hmo`);
            const resultHmo = fetchHmo.data.data;
            setHmo(resultHmo);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getCategory();
    }, [getCategory]);

    useEffect(() => {
        getHmo();
    }, [getHmo]);

    const handleHmo = (e) => {
        setSelectedHmo(e.target.value);
    };

    const onFinish = (values) => {
        const myHmo = JSON.parse(selectedHmo);
        const mySelectedItem = JSON.parse(selectedItem);

        let enrollData = new FormData();

        enrollData.append("email", sessionStorage.getItem("email_user"));
        enrollData.append("file", file);
        enrollData.append("hmo_id", myHmo?.id);
        enrollData.append("subcategory", selectedSubCategory);
        enrollData.append("category", selectedCategory);
        enrollData.append("hmo_name", myHmo?.name);
        enrollData.append("subcategoryitemname", mySelectedItem.name);
        enrollData.append("subcategoryitemid", mySelectedItem.id);

        Axios({
            method: "POST",
            url: `${baseURL}/file/upload`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: enrollData,
        })
            .then((response) => {
                console.log(response);
                toast.success("👍 Form Submitted Successfully!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 8000,
                    hideProgressBar: false,
                    delay: 3000,
                });
                setSelectedCategory("");
                setSelectedSubCategory("");
                setSelectedItem("");
                setSelectedHmo("");
            })
            .catch(function (error) {
                console.log(error);
                setButtonText("Upload");
                setSelectedCategory("");
                setSelectedSubCategory("");
                setSelectedItem("");
                setSelectedHmo("");
                toast.error("🤷‍♂️ Form submit error. Refresh or Try again later!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                    hideProgressBar: false,
                });
            });
    };
    return (
        <div className="w-screen">
            <div>
                <section className="sm:mt-[10%] lg:mt-[5%] ">
                    <div className='w-3/5 p-[1%] mx-auto'>
                        <Link to="/">
                            <Title level={4}><LeftOutlined />Back </Title>
                        </Link>
                    </div>
                    <div className='w-3/5 mx-auto shadow-xl bg-stone-100  rounded-lg sm:p-5'>
                        <Form
                            name="complex-form"
                            onFinish={onFinish}
                        >
                            <Form.Item >
                                <div className='lg:flex justify-around'>
                                    <Form.Item
                                        className='lg:w-3/12'
                                        name="category"
                                        value={selectedCategory}
                                        onChange={handleSubCategory}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Category is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select Category">
                                            {category?.map((val, id) => (
                                                <Option key={`${val}-${id}`} value={val}>
                                                    {val}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12 '
                                        name="subcategory"
                                        value={selectedSubCategory}
                                        onChange={handleSubCategoryItem}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Subcategory is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select Subcategory">
                                            {subCategory?.map((options, name) => (
                                                <Option key={`${options}-${name}`} value={options}>
                                                    {options}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12'
                                        name="subcategoryitem"
                                        disabled={
                                            ["Plsef", "Bhcpf", "General"].includes(selectedSubCategory)
                                        }
                                        value={selectedItem}
                                        onChange={(e) => setSelectedItem(e.target.value)}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Subcategory item is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select Subcategory item">
                                            {subCategoryItem?.map((opt, name) => (
                                                <Option key={`${opt}-${name}`} value={JSON.stringify(opt)}>
                                                    {opt.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div className='lg:flex lg:justify-around lg:my-[5%]'>
                                    <Form.Item label="User Email">
                                        <Form.Item
                                            className='sm:my-0'
                                            name="user_email"

                                        >
                                            <Input readOnly defaultValue={sessionStorage.getItem("email_user")} />
                                        </Form.Item>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12 '
                                        name="hmo"
                                        value={selectedHmo}
                                        onChange={handleHmo}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'HMO is required',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select HMO">
                                            {hmo?.map((res) => (
                                                <Option value={JSON.stringify(res)} key={res.id}>
                                                    {res.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        className='lg:w-3/12 '
                                        name="file"
                                        onChange={(e) => setFile(e.target.files[0])}
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
            </div>
        </div>
    )
}