import React, { useState, useEffect } from 'react'
import MenuAdmin from '../../layout/MenuAdmin'
import {
    Row, Col, Card, Form, Input,
    Button, DatePicker, Select, InputNumber
} from 'antd';
import { useSelector } from 'react-redux'
import {
    createEvent,
    listEvent,
    getTraining,
    getCamp,
    getClub
} from '../../functions/event';

import TableEvent from './components/TableEvent';

// Express API
// 1.Training  /training
// 2.Club      /club
// 3.Camp      /camp

const { Option } = Select;

const InsertEvents = () => {
    const { user } = useSelector((state) => ({ ...state }))

    const [training, setTraining] = useState([]);
    const [club, setClub] = useState([]);
    const [camp, setCamp] = useState([]);
    const [event, setEvent] = useState([]);

    useEffect(() => {
        loadData(user.token)
    }, [])

    const loadData = (authtoken) => {
        getTraining(authtoken)
            .then(res => {
                setTraining(res.data)
            }).catch(err => {
                console.log(err)
            })
        getCamp(authtoken)
            .then(res => {
                setCamp(res.data)
            }).catch(err => {
                console.log(err)
            })
        getClub(authtoken)
            .then(res => {
                setClub(res.data)
            }).catch(err => {
                console.log(err)
            })
        listEvent(authtoken)
            .then(res => {
                setEvent(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        createEvent(values, user.token)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log(event)
    return (
        <>
            <Row>

                <Col>
                    <MenuAdmin />
                </Col>

                <Col>
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
                                label="?????????????????????????????????"
                                name="evName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ?????????????????????????????????!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="???????????????????????????????????????"
                                name="evType"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ???????????????????????????????????????!',
                                    },
                                ]}
                            >
                                <Select defaultValue="null">
                                    <Option value="null">---?????????????????????????????????????????????????????????????????????---</Option>
                                    {training.map((item, index) =>
                                        <Option key={index} value={item._id}>{item.trNamet}</Option>
                                    )}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="???????????????????????????????????????????????????????????????????????????"
                                name="evOrganizer"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ???????????????????????????????????????????????????????????????????????????!',
                                    },
                                ]}
                            >
                                <Select defaultValue="null">
                                    <Option value="null">---????????????????????????????????????????????????????????????????????????????????????---</Option>
                                    {club.map((item, index) =>
                                        <Option key={index} value={item._id}>{item.clName}</Option>
                                    )}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="?????????????????????"
                                name="evLocation"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ?????????????????????!',
                                    },
                                ]}
                            >
                                <Select defaultValue="null">
                                    <Option value="null">---???????????????????????????????????????????????????---</Option>
                                    {camp.map((item, index) =>
                                        <Option key={index} value={item._id}>{item.cpNamet}</Option>
                                    )}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="??????????????????????????????????????????"
                                name="evFdate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ??????????????????????????????????????????!',
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>

                            <Form.Item
                                label="???????????????????????????????????????"
                                name="evLdate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ???????????????????????????????????????!',
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                label="??????????????????????????????????????????????????????"
                                name="evPrice"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your ??????????????????????????????????????????????????????!',
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                label="?????????????????????????????????????????????"
                                name="evLink"
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
                        <TableEvent data={event} />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default InsertEvents
