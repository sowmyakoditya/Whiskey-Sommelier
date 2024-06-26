import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import '../Global.css';

import logo from '../img/logo_rmbg.png';



export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header className="NavBarContainer">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
          <Container>
            <NavLink tag={Link} to="/"  rel="noreferrer">
                <img src={logo} className="logo" alt="Logo" width="200" height="100" />
                    </NavLink>
                    <div className="navLinkSpace">
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                   <NavLink activeClassName="active-link" tag={RRNavLink} exact to="/TastingIntro">Tasting Intro</NavLink>
                </NavItem>
                <NavItem>
                   <NavLink activeClassName="active-link" tag={RRNavLink} to="/TastingNotes">Tasting Notes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink activeClassName="active-link" tag={RRNavLink} to="/WhiskeyTypes">Whiskey Types</NavLink>
                </NavItem>
                {/*<NavItem>*/}
                {/*    <NavLink tag={Link} className="text-light" to="/WhiskeyDetails">Whiskey Details</NavLink>*/}
                {/*</NavItem>*/}

                <NavItem>
                    <NavLink activeClassName="active-link" tag={RRNavLink} to="/AboutUs">About Us</NavLink>
                 </NavItem>
              </ul>
                        </Collapse>
                        </div>
          </Container>
        </Navbar>
      </header>
    );
  }
}
