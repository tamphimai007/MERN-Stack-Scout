import React, { useState } from 'react'
import MenuAdmin from '../../layout/MenuAdmin'
import { Row, Col, Card, Form, Input, Button, Checkbox, Select } from 'antd';

import MapLeaflet from './components/MapLeaflet';
import SelectProvince from './components/SelectProvince';

import { useSelector } from 'react-redux';

import { createCamp } from '../../functions/camp';

const { Option } = Select;

const InsertCamp = () => {
    const { user } = useSelector((state) => ({ ...state }))
    const [form] = Form.useForm();
    // const [coorDinate, setCoorDinate] = useState({
    //     lat: '',
    //     lon: ''
    // })
    console.log('user', user)
    const handleGetLatLon = (lat, lon) => {
        form.setFieldsValue({
            cpLat: lat,
            cpLon: lon
        })
    }


    const onFinish = (values) => {
        // console.log('Success:', values);
        createCamp(values, user.token)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row>
                <Col>
                    <MenuAdmin />
                </Col>

                <Col span={9}>
                    <Card title="เพิ่มแคมป์">
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >

                            <Form.Item
                                label="ชื่อค่าย(ภาษาไทย)"
                                name="cpNamet"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ชื่อค่าย(ภาษาไทย)!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ชื่อค่าย(ภาษาอังกฤษ)"
                                name="cpNamee"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ชื่อค่าย(ภาษาอังกฤษ)!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ประเภทค่าย"
                                name="cpType"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ประเภทค่าย!',
                                    },
                                ]}
                                initialValue="ชั่วคราว"
                            >
                                <Select>
                                    <Option value="ชั่วคราว">ชั่วคราว</Option>
                                    <Option value="ถาวร">ถาวร</Option>
                                </Select>
                            </Form.Item>

                            {/* Province */}
                            <SelectProvince />

                            <Form.Item
                                label="ซอย"
                                name="cpalley"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ซอย!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ถนน"
                                name="cpRoad"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ถนน!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="หมู่"
                                name="cpVillage"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your หมู่!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ที่ตั้งค่าย"
                                name="cpAddress"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ที่ตั้งค่าย!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="รหัสไปรษณีย์"
                                name="cpPost"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your รหัสไปรษณีย์!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ละติจูด"
                                name="cpLat"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ละติจูด!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ลองจิจูด"
                                name="cpLon"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ลองจิจูด!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                <Col span={9}>
                    <Card title="แผนที่">
                        <MapLeaflet handleGetLatLon={handleGetLatLon} />
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default InsertCamp
