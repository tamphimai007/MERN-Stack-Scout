import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import MenuAdmin from '../../layout/MenuAdmin';
import MapLeaflet from './MapLeaflet';


import axios from 'axios';
import ProvinceDD from '../../pages/admin/components/ProvinceDD';
const { Option } = Select;
const ExInsertCamp = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleChangeLatLon = (lat, lon) => {
        console.log('teststt')
        form.setFieldsValue({
            cpLat: lat,
            cpLon: lon
        });
    }
    return (
        <>
            <Row>
                <Col>
                    <MenuAdmin />
                </Col>

                <Col span={9}>
                    <Card title="เพิ่มแคมป์ลูกเสือ">
                        <Form
                            form={form}
                            name="form"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            // initialValues={{
                            //     remember: true,
                            // }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        // initialValues={{
                        //     cpLon: coorDinate.lon
                        // }}
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
                            >
                                <Select>
                                    <Option value="test">test</Option>
                                </Select>
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
                                label="ซอย"
                                name="cpAlley"
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


                          {/* Province */}
                                <ProvinceDD />

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
                                label="Latitude"
                                name="cpLat"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Latitude!',
                                    },
                                ]}

                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Longitude"
                                name="cpLon"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Longitude!',
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
                    {/* <button onClick={handleTest}>TAM</button> */}
                    <Card title="แผนที่">
                        <MapLeaflet setCoorDinate={handleChangeLatLon} />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ExInsertCamp
