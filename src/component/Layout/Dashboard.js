import React from 'react'
import { Sidenav, Dropdown, Nav, Icon, Row, Col } from 'rsuite';
import Header from './Header'
const Dashboard = ({componentToRender}) => {
   
    return (
        <Row>
            <Col lg={4} className="no-padding">
                <div style={{ width: '100%', }}>
                    <Sidenav defaultOpenKeys={['3', '4']} >
                        <Sidenav.Header>
                            <div className="header-style">Dashboard</div>
                        </Sidenav.Header>
                        <Sidenav.Body style={{height: '93vh'}} className="body-style">
                            <Nav>
                            <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                                Home
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Project
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Article
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Settings
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Logout
                            </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav> 
            </div>
            </Col>
            <Col lg={20} className="no-padding">
                <Header />
                <div className="p-20">
                    {componentToRender}
                </div>
            </Col>
  </Row>
    )
}

export default Dashboard