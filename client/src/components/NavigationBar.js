import React, { useState } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchPosts } from "../redux/actions/post";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function NavigationBar(props) {
  const [value, setValue] = useState("");
  const loading = useSelector((state) => state.post.searchPosts.loading);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/post/search/" + value);
    dispatch(searchPosts(value, 0));
  };

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
        {loading && (
          <div className="mr-lg-4">
            <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
          </div>
        )}

        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-lg-4"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
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
