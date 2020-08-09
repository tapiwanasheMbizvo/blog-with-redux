import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const BlogNav = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>


            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Blog</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/posts">Posts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/topics">Topics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">Categories</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default BlogNav;