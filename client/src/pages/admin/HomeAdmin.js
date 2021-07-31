import React from 'react'
import MenuAdmin from '../../layout/MenuAdmin'
import { Row, Col, Card } from 'antd';

const HomeAdmin = () => {

    return (
        <>
            <Row>

                <Col>
                    <MenuAdmin />
                </Col>

                <Col>
                    <Card>
                        <h1>Home Admin</h1>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default HomeAdmin
