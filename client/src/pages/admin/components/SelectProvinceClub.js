import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Input, Button, Checkbox, Select } from 'antd';


// functions
import { getProvince, getDistrict, getSubDistrict } from '../../../functions/province';

const { Option } = Select;
const SelectProvinceClub = () => {
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [subDistrict, setSubDistrict] = useState([]);

    const [ddProvince, setDdProvince] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        getProvince()
            .then(res => {
                setLoading(false)
                setProvince(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const onChangeProvince = (value) => {
        setLoading(true)
        getDistrict(value)
            .then(res => {
                setLoading(false)
                setDdProvince(value)
                setDistrict(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const onChangeDistrict = (district) => {
        getSubDistrict(ddProvince, district)
            .then(res => {
                setSubDistrict(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Form.Item
                label="จังหวัด"
                name="clProvince"
                rules={[
                    {
                        required: true,
                        message: 'Please input your จังหวัด!',
                    },
                ]}
            >
                <Select
                    loading={loading}
                    onChange={onChangeProvince}
                    showSearch
                    placeholder="กรุณาเลือกจังหวัด"
                >
                    {province.map((item, index) =>
                        <Option key={index} value={item.province}>{item.province}</Option>
                    )}
                </Select>
            </Form.Item>

            <Form.Item
                label="อำเภอ"
                name="clDistrict"
                rules={[
                    {
                        required: true,
                        message: 'Please input your อำเภอ!',
                    },
                ]}
            >
                <Select
                    showSearch
                    loading={loading}
                    onChange={onChangeDistrict}
                    placeholder="กรุณาเลือกอำเภอ"
                >
                    {district.map((item, index) =>
                        <Option key={index} value={item}>{item}</Option>
                    )}
                </Select>
            </Form.Item>

            <Form.Item
                label="ตำบล"
                name="clSubdist"
                rules={[
                    {
                        required: true,
                        message: 'Please input your ตำบล!',
                    },
                ]}
            >
                <Select
                    placeholder="กรุณาเลือกตำบล"
                    showSearch
                    loading={loading}
                >
                    {subDistrict.map((item, index) =>
                        <Option key={index} value={item}>{item}</Option>
                    )}
                </Select>
            </Form.Item>
        </>
    )
}

export default SelectProvinceClub
