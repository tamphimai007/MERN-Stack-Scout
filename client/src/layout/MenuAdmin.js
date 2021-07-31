import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const MenuAdmin = () => {
    return (
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu key="sub4" icon={<SettingOutlined />} title="กิจกรรม">
                <Menu.Item key="12"><Link to="/insert-event">เพิ่มกิจกรรม</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/insert-training">เพิ่มการฝึกอบรม</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/insert-camp">เพิ่มแคมป์</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/insert-club">เพิ่มสโมสร</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/insert-typeevent">เพิ่มกิจกรรมหลัก/รอง</Link></Menu.Item>
            </SubMenu>

            <Menu.Item key="13" icon={<SettingOutlined />}>Option 12</Menu.Item>
            <hr />
            <SubMenu key="ex1" icon={<SettingOutlined />} title="ตัวอย่าง">
                <Menu.Item key="ex2"><Link to="/ex-insert-camp">ตัวอย่าง เพิ่มแคมป์</Link></Menu.Item>
                <Menu.Item key="ex22"><Link to="/ex-home-admin">ตัวอย่าง DropDown List จังหวัด</Link></Menu.Item>
                <Menu.Item key="ex3">Option 10</Menu.Item>
                <Menu.Item key="ex4">Option 11</Menu.Item>
                <Menu.Item key="ex5">Option 12</Menu.Item>
            </SubMenu>


        </Menu>
    )
}

export default MenuAdmin
