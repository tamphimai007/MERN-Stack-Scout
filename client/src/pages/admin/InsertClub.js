import React, { useState } from 'react'
import MenuAdmin from '../../layout/MenuAdmin'
import { Row, Col, Card, Form, Input, Button, Checkbox, Select } from 'antd';

import MapLeaflet from './components/MapLeaflet';
import SelectProvinceClub from './components/SelectProvinceClub';

import { useSelector } from 'react-redux';

import { createClub } from '../../functions/club';

const { Option } = Select;

const InsertClub = () => {
    const { user } = useSelector((state) => ({ ...state }))
    const [form] = Form.useForm();
    // const [coorDinate, setCoorDinate] = useState({
    //     lat: '',
    //     lon: ''
    // })
    console.log('user', user)
    const handleGetLatLon = (lat, lon) => {
        form.setFieldsValue({
            clLat: lat,
            clLon: lon
        })
    }


    const onFinish = (values) => {
        // console.log('Success:', values);
        createClub(values, user.token)
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
                    <Card title="เพิ่มสโมสร">
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
                                label="ชื่อสโมสร"
                                name="clName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ชื่อสโมสร!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="นายกสโมสร"
                                name="clLeader"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your นายกสโมสร!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

 

                            {/* Province */}
                            <SelectProvinceClub />

                            <Form.Item
                                label="ซอย"
                                name="clAlley"
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
                                name="clRoad"
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
                                name="clVillage"
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
                                name="clAddress"
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
                                name="clPost"
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
                                name="clLat"
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
                                name="clLon"
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
                                label="เบอร์โทรศัพท์"
                                name="clTel"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your เบอร์โทร!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="แฟ็ก"
                                name="clFax"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your แฟ็ก!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="เพจของสโมสร"
                                name="clPage"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your เพจของสโมสร',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="เว็บไซต์"
                                name="clWeb"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your เว็บไซต์',
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

export default InsertClub
