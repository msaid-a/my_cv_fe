import React from 'react'
import { Navbar, Nav, Icon } from 'rsuite';
const Header = ({width}) => {
    return (
        <Navbar className="header-nav">
        <Navbar.Body>
          <Nav pullRight>
            <Nav.Item icon={<Icon className="font-black" icon="cog" />}><span className="font-black">Settings</span></Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )
}

export default Header