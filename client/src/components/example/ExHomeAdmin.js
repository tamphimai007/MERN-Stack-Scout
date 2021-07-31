import React, { useState, useEffect } from 'react'
import MenuAdmin from '../../layout/MenuAdmin'
import { Select } from 'antd';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Row,
    Col,
    Card
} from 'antd';
import axios from 'axios';

const { Option } = Select;


const ExHomeAdmin = () => {
    const [province, setProvince] = useState([])
    const [loading, setLoading] = useState(true)
    const [districe, setdistrice] = useState([])
    const [ddDistrict, setddDistrict] = useState('---กรุณาเลือกอำเภอ---')
    useEffect(() => {
        loadProvince();
    }, [])

    const loadProvince = async () => {
        await axios.get('https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/')
            .then(res => {
                // console.log(res.data.data)
                setProvince(res.data.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }

    const loadDistrict = async (province) => {
        await axios.get(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/${province}/district/`)
            .then(res => {
                setLoading(false)
                // console.log(res.data.data)
                setdistrice(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }

    function onChange(value) {
        setLoading(true)
        console.log(`selected ${value}`);
        setddDistrict('---กรุณาเลือกอำเภอ---')
        loadDistrict(value)
    }

    function onChangeDis(value) {
        console.log(`selectedDis ${value}`);
        setddDistrict(value)
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    console.log('loading', loading)
    const onFinish = (value) => {
        console.log(value)
    }
    return (
        <>
            <Row>

                <Col>
                    <MenuAdmin />
                </Col>

                <Col>
                    <Card>
                        <h1>Home Admin</h1>
                        <Form name="basic" onFinish={onFinish}>
                            <Form.Item
                                label="Username"
                                name="province"
                            >
                                <Select
                                    showSearch
                                    loading={loading}
                                    disabled={loading}
                                    style={{ width: 200 }}
                                    placeholder="Select a Province"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}

                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {province.map((item, index) =>
                                        <Option key={index} value={item.province}>{item.province}</Option>
                                    )}
                                    {/* <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option> */}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="District"
                                name="District"
                            >
                                <Select
                                    showSearch
                                    loading={loading}
                                    disabled={loading || province.length < 0}
                                    style={{ width: 200 }}
                                    value={ddDistrict}
                                    optionFilterProp="children"
                                    onChange={onChangeDis}

                                >
                                    {districe.map((item, index) =>
                                        <Option key={index} value={item}>{item}</Option>
                                    )}
                                    {/* <Option value="tom">Tom</Option> */}
                                </Select>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
        </Button>
                        </Form>



                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default ExHomeAdmin
