import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import MenuAdmin from '../../layout/MenuAdmin'
import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Button,
    Checkbox,
    Select
} from 'antd';

import { getTypeEvent } from '../../functions/typeevent';
import { getSubTypeEvent, getLevel, createTraining } from '../../functions/training';

const { Option } = Select;
const InsertTraining = () => {
    const { user } = useSelector((state) => ({ ...state }))

    const [value, setValue] = useState({
        trNamet: '',
        trNamee: '',
        trMType: '',
        trSType: '',
        trLevel: '',
        trMGroup: '',
        trSGroup: '',
    })

    const [typeEvent, setTypeEvent] = useState([]);
    const [SubTypeEvent, setSubTypeEvent] = useState([]);
    const [level, setLevel] = useState([]);

    useEffect(() => {

        getTypeEvent(user.token)
            .then(res => {
                setTypeEvent(res.data)
            }).catch(err => {
                console.log(err.response)
            })

    }, [])

    const onChange = (e) => {
        // console.log('name', e.target.name)
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const onSubmit = () => {
        // console.log(value)
        createTraining(value, user.token)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    const onChangeTypeEvent = (e) => {
        console.log(e.target.value)
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        setValue({ ...value, [e.target.name]: label })
        //function
        getSubTypeEvent(e.target.value, user.token)
            .then(res => {
                setSubTypeEvent(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const onChangeSub = (e) => {
        console.log(e.target.value)
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        setValue({ ...value, [e.target.name]: label })

        getLevel(e.target.value, user.token)
            .then(res => {
                setLevel(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const mValue = ["สมุทร", "อากาศ", "ทุกเหล่า"]
    const sValue = ["สำรอง", "สามัญ", "สามัญรุ่นใหญ่", "วิสามัญ", "ผู้นำ", "ทุกประเภท"]
    // console.log(value)
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
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            onFinish={onSubmit}
                        >
                            <Form.Item
                                label="ชื่อกิจกรรม(ภาษาไทย)"
                                rules={[{ required: true, message: 'Please input your ชื่อกิจกรรม(ภาษาไทย)!' }]}
                            >
                                <Input name="trNamet" onChange={e => onChange(e)} />
                            </Form.Item>

                            <Form.Item
                                label="ชื่อกิจกรรม(ภาษาอังกฤษ)"
                                rules={[{ required: true, message: 'Please input your ชื่อกิจกรรม(ภาษาอังกฤษ)!' }]}
                            >
                                <Input name="trNamee" onChange={e => onChange(e)} />
                            </Form.Item>

                            <Form.Item
                                label="ประเภทกิจกรรมหลัก"

                                rules={[{ required: true, message: 'Please input your ประเภทกิจกรรมหลัก!' }]}
                            >
                                <select name="trMType" onChange={e => onChangeTypeEvent(e)} className="form-control">
                                    <option key="1" value="">---กรุณาเลือกประเภทกิจกรรมหลัก---</option>
                                    {typeEvent.map((item, index) =>
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )}
                                </select>
                            </Form.Item>

                            <Form.Item
                                label="ประเภทกิจกรรมย่อย"
                                rules={[{ required: true, message: 'Please input your ประเภทกิจกรรมย่อย!' }]}
                            >
                                {/* SubTypeEvent */}
                                <select name="trSType" className="form-control" onChange={e => onChangeSub(e)}>
                                    <option key="1" value="">---กรุณาเลือกประเภทกิจกรรมรอง---</option>
                                    {SubTypeEvent.map((item, index) =>
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )}
                                </select>
                            </Form.Item>

                            <Form.Item
                                label="ระดับการฝึกอบรม"
                                rules={[{ required: true, message: 'Please input your ระดับการฝึกอบรม!' }]}
                            >
                                <select name="trLevel" className="form-control" onChange={e => onChange(e)}>
                                    <option key="1" value="">---กรุณาเลือกประเภทกิจกรรมรอง---</option>
                                    {level.map((item, index) =>
                                        <option key={index} value={item.name}>{item.name}</option>
                                    )}
                                </select>
                            </Form.Item>

                            <Form.Item
                                label="เหล่าของผู้ทำการฝึกอบรม"
                                rules={[{ required: true, message: 'Please input your เหล่าของผู้ทำการฝึกอบรม!' }]}
                            >
                                <select name="trMGroup" onChange={e => onChange(e)} className="form-control">
                                    <option value="">---กรุณาเลือกเหล่า---</option>
                                    {mValue.map((item, index) =>
                                        <option key={index} value={item}>{item}</option>
                                    )}
                                </select>
                            </Form.Item>

                            <Form.Item
                                label="ประเภทของผู้ทำการฝึกอบรม"
                                rules={[{ required: true, message: 'Please input your ประเภทของผู้ทำการฝึกอบรม!' }]}
                            >
                                <select name="trSGroup" onChange={e => onChange(e)} className="form-control">
                                    <option value="">---กรุณาเลือกประเภทของผู้ฝึก---</option>
                                    {sValue.map((item, index) =>
                                        <option key={index} value={item}>{item}</option>
                                    )}
                                </select>
                            </Form.Item>



                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
        </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default InsertTraining
