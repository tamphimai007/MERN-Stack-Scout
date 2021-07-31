import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Input, Button, Checkbox, Select } from 'antd';



const { Option } = Select;

const ProvinceDD = () => {

    const [loading, setLoading] = useState(true)

    const [province, setProvince] = useState([])
    const [districe, setdistrice] = useState([])
    const [subDistrice, setSubDistrice] = useState([])

    const [ddProvince, setddProvince] = useState('---กรุณาเลือกจังหวัด---')
    const [ddDistrict, setddDistrict] = useState('---กรุณาเลือกอำเภอ---')
    const [ddSubDistrict, setddSubDistrict] = useState('---กรุณาเลือกตำบล---')

    useEffect(() => {
        loadProvince();
    }, [])

    const baseUrl = 'https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand'
    const loadProvince = async () => {
        await axios.get(baseUrl + '/provinces/')
            .then(res => {
                setProvince(res.data.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }
    const loadDistrict = async (province) => {
        await axios.get(`${baseUrl}/provinces/${province}/district/`)
            .then(res => {
                setLoading(false)
                setdistrice(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const loadSubDistrict = async (value) => {
        console.log('load', ddProvince, ddDistrict)
        await axios.get(`${baseUrl}/provinces/${ddProvince}/district/${value}`)
            .then(res => {
                setLoading(false)
                setSubDistrice(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }
    function onChange(value) {
        setLoading(true)
        console.log(`selected ${value}`);
        setddProvince(value)
        setddDistrict('---กรุณาเลือกอำเภอ---')
        setddSubDistrict('---กรุณาเลือกตำบล---')
        setSubDistrice([])
        loadDistrict(value)
    }

    const onChangeDis = async (value) => {
        setLoading(true)
        console.log(`selectedDis ${value}`);
        setddDistrict(value)
        setddSubDistrict('---กรุณาเลือกตำบล---')
        loadSubDistrict(value)
    }
    const onChangeSub = async (value) => {
        console.log(`selectedSub ${value}`);
        setddSubDistrict(value)
    }

    console.log('ddDis', ddDistrict)
    return (
        <>

            <Select
                showSearch
                value={ddProvince}
                disabled={loading}
                loading={loading}
                onChange={onChange}
                style={{ width: '100%' }}>
                {province.map((item, index) =>
                    <Option key={index} value={item.province}>{item.province}</Option>
                )}
            </Select>
            
            <Select
                onChange={onChangeDis}
                showSearch
                loading={loading}
                value={ddDistrict}
                disabled={loading || districe.length < 1}
                style={{ width: '100%' }}>
                {districe.map((item, index) =>
                    <Option key={index} value={item}>{item}</Option>
                )}
            </Select>


            <Select
                onChange={onChangeSub}
                showSearch
                loading={loading}
                value={ddSubDistrict}
                disabled={loading || subDistrice.length < 1}
                style={{ width: '100%' }}>
                {subDistrice.map((item, index) =>
                    <Option key={index} value={item}>{item}</Option>
                )}
            </Select>

        </>
    )
}

export default ProvinceDD
