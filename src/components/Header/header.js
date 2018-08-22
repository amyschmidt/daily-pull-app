import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

type PropsT = {
  loggedIn: boolean,
  chooseLogin: () => mixed,
  chooseLogout: () => mixed,
}

export default class Header extends React.Component<PropsT> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { loggedIn, chooseLogin, chooseLogout } = this.props
    return (
      <div>
        <Navbar light className="Nav-container" expand="md">
          <NavbarBrand href="/">daily pull</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/history">History</NavLink>
              </NavItem>
              <NavItem>
                {loggedIn ? (
                  <NavLink href="/" onClick={() => chooseLogout()}>Logout</NavLink>
                ) : (
                  <NavLink href="#" onClick={() => chooseLogin()}>Login</NavLink>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
