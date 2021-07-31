import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const { SubMenu } = Menu;

const Navbar = () => {
    const { user } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null
        })
        history.push('/');
    }
    return (
        <Menu mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>

            {!user && (
                <SubMenu
                    style={{ position: 'absolute', right: '0' }}
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title="Menu">
                    <Menu.Item key="setting:1"><Link to="/login">Login</Link></Menu.Item>
                    <Menu.Item key="setting:2"><Link to="/register">Register</Link></Menu.Item>
                </SubMenu>
            )}

            {user && (
                <SubMenu
                    style={{ position: 'absolute', right: '0' }}
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title={user.name}>
                    <Menu.Item key="setting:1" onClick={logout}>Logout</Menu.Item>
                </SubMenu>
            )}


        </Menu>
    )
}

export default Navbar
