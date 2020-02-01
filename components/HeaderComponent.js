import React, { Component }  from 'react';
import { Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
//import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            <React.Fragment>
                
                <Nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <div id="headingLabel">
                            David Oakley<br/>
                            1-252-240-9101<br/>
                            01dboakley@gmail.com<br/>  
                        </div>
                    
                        <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                
                                <Nav navbar className="ml-auto">
                                    <NavItem>
                                        <NavLink className="nav-link" onClick={this.forceUpdate} to="/home">
                                            <i className="fa fa-home fa-lg" /> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" onClick={this.forceUpdate} to="/about">
                                            <i className="fa fa-info fa-lg" /> About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" onClick={this.forceUpdate} to="/portfolio">
                                            <i className="fa fa-list fa-lg" /> Portfolio
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" onClick={this.forceUpdate} to="/contact">
                                            <i className="fa fa-address-card fa-lg" /> Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                    </div> {/*end container*/}
                </Nav>
            </React.Fragment> 
        );
    } // end render
    
} // end class

export default Header;