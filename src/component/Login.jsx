import React from 'react'
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar, Panel } from 'rsuite';

const Login = () => {
    return (
        <Grid fluid>
            <Row>
                <Col lg={24}>
               <Panel  className="panel-login">
                   <h3 className="center-login-title">Login</h3>
                <Form fluid>
                    <FormGroup>
                        <ControlLabel>Username</ControlLabel>
                        <FormControl name="name" />
                        <HelpBlock>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl name="password" type="password" />
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar>
                            <Button block appearance="primary">Login</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
                </Panel> 
                </Col>

            </Row>
        </Grid>
    )
}

export default Login