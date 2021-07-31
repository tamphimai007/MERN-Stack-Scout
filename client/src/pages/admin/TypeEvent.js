import React, { useState, useEffect } from 'react'
import MenuAdmin from '../../layout/MenuAdmin'
import {
    Form,
    Input,
    Button,
    Select,
    Row,
    Col,
    Card,
    Table
} from 'antd';
import { useSelector } from 'react-redux'

import {
    createTypeEvent,
    getTypeEvent,
    createSubTypeEvent,
    getSubTypeEvent,
    listSubTypeEvent,
    createLevelEvent
} from '../../functions/typeevent';


const Option = Select;
const TypeEvent = () => {
    const { user } = useSelector((state) => ({ ...state }))

    const [typeEvent, setTypeEvent] = useState([])
    const [subTypeEvent, setSubTypeEvent] = useState([])
    const [dataSubTypeEvent, setDataSubTypeEvent] = useState([])

    useEffect(() => {
        loadData(user.token)
    }, [])

    const loadData = (authtoken) => {
        getTypeEvent(authtoken)
            .then(res => {
                setTypeEvent(res.data)
            }).catch(err => {
                console.log(err.response)
            })
        getSubTypeEvent(authtoken)
            .then(res => {
                // console.log('sub', res)
                setSubTypeEvent(res.data)
            }).catch(err => {
                console.log(err.response)
            })
        listSubTypeEvent(authtoken)
            .then(res => {
                // console.log('list sub', res)
                setDataSubTypeEvent(res.data)
            }).catch(err => {
                console.log(err.response)
            })
    }
    // console.log(subTypeEvent)
    const onFinish = (values) => {
        createTypeEvent(values, user.token)
            .then(res => {
                console.log(res)
                loadData(user.token)
            }).catch(err => {
                console.log(err.response)
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    /*SubTypeEvent */
    const onSubFinish = (values) => {
        createSubTypeEvent(values, user.token)
            .then(res => {
                console.log(res.data)
                loadData(user.token)
            }).catch(err => {
                console.log(err.response)
            })
    }
    const onSubFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const columnsSub = [
        {
            title: 'กิจกรรมหลัก',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'กิจกรรมรอง',
            render: (record) =>
                <ul>
                    {record.type.map((item, index) =>
                        <li key={index}>{item.name}
                            <ul>
                                {item.levelevents.map((value, index) =>
                                    <li key={index}>{value.name}</li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
        }
    ];
    /*SubTypeEvent */
    console.log(subTypeEvent)
    // Level
    const onLevelFinish = (values) => {
        // console.log(values)
        createLevelEvent(values, user.token)
            .then(res => {
                loadData(user.token)
            }).catch(err => {
                console.log(err.response)
            })
    }
    const onLevelFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <>
            <Row>
                <Col>
                    <MenuAdmin />
                </Col>

                <Col span={6}>
                    <Card>
                        <Form
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
                                label="กิจกรรมหลัก"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your กิจกรรมหลัก!',
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

                <Col span={6}>
                    <Card>
                        <Form
                            name="sub"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onSubFinish}
                            onFinishFailed={onSubFinishFailed}
                        >
                            <Form.Item
                                label="กิจกรรมรอง"
                                name="idTypeEvent"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your กิจกรรมหลัก!',
                                    },
                                ]}
                            >
                                <Select>
                                    {typeEvent.map((item, index) =>
                                        <Option key={index} value={item._id}>{item.name}</Option>
                                    )}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="กิจกรรมรอง"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your กิจกรรมหลัก!',
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

                <Col span={6}>
                    <Card>
                        <Form
                            name="sub"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onLevelFinish}
                            onFinishFailed={onLevelFinishFailed}
                        >
                            <Form.Item
                                label="กิจกรรมรอง"
                                name="idSubTypeEvent"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your กิจกรรมรอง!',
                                    },
                                ]}
                            >
                                <Select>
                                    {dataSubTypeEvent.map((item, index) =>
                                        <Option key={index} value={item._id}>{item.name}</Option>
                                    )}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="เลเวล"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your เลเวล!',
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
            </Row>
            <Row>
                <Col span={24}>
                    <Card>
                        <Table dataSource={subTypeEvent} columns={columnsSub} rowKey="_id" />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default TypeEvent
