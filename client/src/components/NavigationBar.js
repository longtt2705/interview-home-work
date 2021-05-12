import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";

function NavigationBar(props) {
  return (
    <Navbar bg="light" className="px-lg-5 shadow-sm row">
      <Nav className="col">
        <Navbar.Brand href="/">
          <img
            src="https://react-bootstrap.netlify.app/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="ml-md-2">React Logo</span>
        </Navbar.Brand>
      </Nav>

      <h3 className="col text-center">Blogs</h3>
      <Nav className="ml-auto col align-end row justify-content-end">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-lg-4" />
        </Form>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f94a8fa7-4448-4dd2-b3a8-4c81d3dcdb38/d570lew-5fb146f7-b01b-4f4d-82a7-4c8513616d9f.jpg/v1/fill/w_200,h_200,q_75,strp/_adam_levine_icon_by_imstrongforyou_d570lew-fullview.jpg"
          width="30"
          height="30"
          className="d-inline-block rounded-circle"
          alt="Logo"
        />
        <div className="mx-md-2 d-flex align-items-center">Adam Levine</div>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
