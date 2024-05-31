import React, { Component, useState } from "react";
import {
  MenuMenu,
  MenuItem,
  Input,
  Menu,
  Segment,
  Modal,
} from "semantic-ui-react";
import logo from "../../assets/logo.png";
import ShowModal from "../../Modal/Modal";
import Login from "../Forms/Login";
import SignUp from "../Forms/SignUp";
import AdminLogin from "../../Admin/Forms/Login";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { courseContext } from "../../../App";
import { useContext } from "react";
import "./Header.css";

const categoryList = [
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Programming Languages",
  "Game Development",
  "Software Testing",
];

const Header = ({ handleIsLogin, isLogin, handleIsLogout }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({});
  const CourseContext = useContext(courseContext);

  const { onChangeSearch } = CourseContext;
  const handleMouseOver = (event) => {
    const spanPosition = event.target.getBoundingClientRect();
    setModalPosition({
      top: spanPosition.top + window.scrollY + spanPosition.height,
      left: spanPosition.left + window.scrollX,
    });
    setModalOpen(true);
  };

  const handleMouseLeave = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Menu pointing style={{ backgroundColor: "white" }}>
        <img
          src={logo}
          alt="Avatar"
          style={{ width: "100px", height: "100px" }}
        />

        <MenuItem>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>
            <Link style={{ color: "black" }} to="/">
              <b>Home</b>
            </Link>
          </span>
        </MenuItem>
<MenuItem>
          <span
            style={{ fontSize: "20px", cursor: "pointer" }}
            onMouseOver={handleMouseOver}
           
          >
            <b>Categories</b>
          </span>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            style={{
              position: "fixed",
              top: modalPosition.top,
              left: modalPosition.left,
              backgroundColor: "red",
              width: "300px",
            }}
          >
            <Modal.Header style={{ color: "black", fontSize: "20px" }}>
              Categories
            </Modal.Header>
            <Modal.Content style={{ color: "black", fontSize: "15px" }}>
              <ul>
                {categoryList.map((category) => {
                  return <li>{category}</li>;
                })}
              </ul>
            </Modal.Content>
          </Modal>
        </MenuItem>

        <MenuItem>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>
            <Link style={{ color: "black" }} to="/aboutus">
              <b>About Us</b>
            </Link>
          </span>
        </MenuItem>

        <MenuMenu position="right">
          <MenuItem>
            <LoginModal
              handleIsLogin={handleIsLogin}
              isLogin={isLogin}
              handleIsLogout={handleIsLogout}
            />
          </MenuItem>
          <MenuItem>
            <ShowModal buttonName="Sign Up">
              <SignUp />
            </ShowModal>
          </MenuItem>
          <MenuItem>
            <ShowModal buttonName="Admin Login">
              <AdminLogin />
            </ShowModal>
          </MenuItem>
          <MenuItem>
            <Input
              icon="search"
              placeholder="Search..."
              onChange={(e) => onChangeSearch(e.target.value)}
            />
          </MenuItem>
        </MenuMenu>
      </Menu>
    </>
  );
};

export default Header;
