import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, Form } from "react-bootstrap";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

const NavBar = ({ setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link
              to="/AboutUs"
              style={{
                padding: "40%",
              }}
            >
              AboutUs
            </Link>
          </Nav>
        </Collapse>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Drinks"
            className="mr-sm-2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
