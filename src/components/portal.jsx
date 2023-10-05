import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import { UploadOutlined, LeftOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Upload, message } from 'antd';
import { api } from '../utils/mkReq';

const { Title } = Typography;
const { Option } = Select;

function validateFile(file) {
    const acceptedExtensions = ['.csv', '.xls', '.xlsx'];
    const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);
    return acceptedExtensions.includes(`.${fileExtension}`);
}
export const Portal = () => {

    const [form] = Form.useForm();

    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategory, setSubCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [subCategoryItem, setSubCategoryItem] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const [hmo, setHmo] = useState([]);
    const [selectedHmo, setSelectedHmo] = useState("");
    const [file, setFile] = useState(null);
    const [disableSubCategoryItemFetch, setDisableSubCategoryItemFetch] = useState(false);
    // const [isDisabled, setIsDisabled] = useState(false)


    //*******************************************************DISABLED HANDLER */
    // useEffect(() => {
    //     if (
    //         selectedSubCategory === "Plsef" ||
    //         selectedSubCategory === "Bhcpf" ||
    //         selectedSubCategory === "General"
    //     ) {
    //         setIsDisabled(true)
    //     } else {
    //         setIsDisabled(false)
    //     }
    // }, [selectedSubCategory]);

    const getCategory = useCallback(async () => {
        try {
            const fetchCategory = await Axios.post(`${api.baseURL}/sectors`);
            const item = fetchCategory.data.data;
            setCategory(item);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleSubCategory = useCallback(async (curr) => {
        setSelectedCategory(curr);
        try {
            const fetch = await Axios.post(`${api.baseURL}/category/${curr}`);
            const result = fetch.data.data;
            setSubCategory(result);
        } catch (err) {
            console.log(err);
        }
    }, []);


    const handleSubCategoryItem = useCallback(async (impt) => {
        try {
            const trimmedSelectedSubCategory = selectedSubCategory.trim().toLowerCase();
            const disabledSubCategories = ["plsef", "bhcpf", "general"];
            const shouldFetchSubCategoryItems = !disabledSubCategories.includes(trimmedSelectedSubCategory);

            if (shouldFetchSubCategoryItems) {
                const fetchItem = await Axios.post(
                    `${api.baseURL}/${selectedCategory}/${impt}`,
                );
                const subItem = fetchItem.data.data;
                setSubCategoryItem(subItem);
            }

            setDisableSubCategoryItemFetch(!shouldFetchSubCategoryItems);
        } catch (err) {
            console.log(err);
        }
    }, [selectedCategory, selectedSubCategory]);

    const getHmo = useCallback(async () => {
        try {
            const fetchHmo = await Axios.post(`${api.baseURL}/hmo`);
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

    const handleFileChange = (info) => {
        if (info.fileList.length > 0) {
            const selectedFile = info.file;
            if (validateFile(selectedFile)) {
                setFile(selectedFile);
            } else {
                message.error('File must be in CSV, XLS, or XLSX format');
            }
        } else {
            setFile(null);
        }
    };

    const onFinish = () => {
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
            url: `${api.baseURL}/file/upload`,
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
        <div>
            <div>
                <section className="sm:mt-[7%] lg:mt-[5%]">
                    <div className='w-3/5 p-[1%] mx-auto'>
                        <Link to="/">
                            <Title level={4}><LeftOutlined />Back </Title>
                        </Link>
                    </div>
                    <div className='w-3/5 mx-auto shadow-xl bg-stone-100 sm:mb-[2%] rounded-lg sm:p-4 sm:h-[55vh] lg:h-fit sm:overflow-scroll lg:overflow-hidden'>
                        <Form
                            name="complex-form"
                            onFinish={onFinish}
                            form={form}
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
                                        <Select
                                            value={selectedCategory}
                                            onChange={(value) => handleSubCategory(value)}
                                            placeholder="Select Category">
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
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Subcategory is required',
                                            },
                                        ]}
                                    >
                                        <Select
                                            value={selectedSubCategory}
                                            onChange={(value) => handleSubCategoryItem(value)}
                                            placeholder="Select Subcategory"
                                        >
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

                                        rules={[
                                            {
                                                required: true,
                                                message: 'Subcategory item is required',
                                            },
                                        ]}
                                    >
                                        <Select
                                            value={selectedItem}
                                            onChange={(value) => setSelectedItem(value)}
                                            disabled={disableSubCategoryItemFetch}
                                            placeholder="Select Subcategory item"
                                        >
                                            {subCategoryItem?.map((opt, name) => (
                                                <Option key={`${opt}-${name}`} value={JSON.stringify(opt)}>
                                                    {opt.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>



                                </div>
                                <div className='lg:flex lg:justify-around lg:my-[5%] '>
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
                                        className="lg:w-3/12"
                                        name="file"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please upload a file!',
                                                validator: () => {
                                                    if (file) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject('Please upload a file!');
                                                },
                                            },
                                        ]}
                                    >
                                        <Upload
                                            name="logo"
                                            accept=".csv, .xls, .xlsx"
                                            listType="picture"
                                            fileList={file ? [file] : []}
                                            beforeUpload={(file) => {
                                                if (validateFile(file)) {
                                                    return false;
                                                }
                                            }}
                                            onChange={handleFileChange}
                                        >
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item>
                                </div>
                            </Form.Item>
                            <div className='w-fit mx-auto m-1'>
                                <Form.Item colon={false}>
                                    <Button
                                        type="success"
                                        htmlType="submit"
                                        className={`w-32 h-14 text-lg font-semibold rounded-lg ${!form.isFieldTouched('category') ||
                                            !form.isFieldTouched('subcategory') ||
                                            !form.isFieldTouched('subcategoryitem') ||
                                            !form.isFieldTouched('hmo') ||
                                            !file ||
                                            form.getFieldsError().some(({ errors }) => errors.length > 0)
                                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                            : 'bg-green-500 text-white'
                                            }`}
                                        disabled={
                                            !form.isFieldTouched('category') ||
                                            !form.isFieldTouched('subcategory') ||
                                            !form.isFieldTouched('subcategoryitem') ||
                                            !form.isFieldTouched('hmo') ||
                                            !file ||
                                            form.getFieldsError().some(({ errors }) => errors.length > 0)
                                        }
                                    >
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