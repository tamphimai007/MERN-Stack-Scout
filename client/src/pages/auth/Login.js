import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Row,
    Col,
    Card
} from 'antd';

//functions
import { loginHandler } from '../../functions/auth'
const Login = ({ history }) => {
    const dispatch = useDispatch();

    const roleBaseRedirect = (role) => {
        if (role === 'admin') {
            history.push('/home-admin')
        } else {
            history.push('/home-user')
        }
    }

    const onFinish = (values) => {

        console.log('Success:', values);
        loginHandler(values)
            .then(res => {
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: {
                        token: res.data.token,
                        name: res.data.payload.user.name,
                        role: res.data.payload.user.role
                    }
                });
                localStorage.setItem('token', res.data.token)
                roleBaseRedirect(res.data.payload.user.role)
                // console.log(res.data.payload.user)
                // alert(res.data)
                // history.push('/login')
            }).catch(err => {
                console.log(err.response)
                alert(err.response.data)
            })


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row justify="center">
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
                            label="Username"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
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
    )
}

export default Login
