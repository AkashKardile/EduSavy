import React, { useContext, useState } from "react";
import {
  MenuItem,
  Menu,
  Segment,
  Input,
  MenuMenu,
  Image,
} from "semantic-ui-react";
import Logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { courseContext } from "../../../App";
import ShowModal from "../../Modal/Modal";
import LogoutModal from "../../Modal/LogoutModal";
import CartPage from "../UI/Cart";
import axios from "axios";
import Subscribe from "../UI/SubscribeCourse";

const Header = (props) => {
  const context = useContext(courseContext);
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();
  const Name = props.Name;
  const Cart = props.Cart;
  const Names = props.Names;
  const SubscribeCourse = props.SubscribeCourse;
  const handleSubscribeCourse = props.handleSubscribeCourse;
  const handleItemClick = (e, { name }) => setActiveItem(name);

  const handleLogout = async () => {
    navigate("/adminLogout");
    await axios.put(`http://localhost:2000/userLogout/${Names}`, {
      Cart,
      SubscribeCourse,
    });
    props.handleIsLogout();
  };
  return (
    <Segment inverted>
      <Menu inverted secondary>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <Image src={Logo} size="tiny" />
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <MenuItem active={activeItem === "home"} onClick={handleItemClick}>
          <span style={{ color: "black", textTransform: "uppercase" }}>
            Home
          </span>
        </MenuItem>
        <MenuMenu position="right">
          <MenuItem>
            <Input
              icon="search"
              placeholder="Search..."
              onChange={(e) => context.onChangeSearch(e.target.value)}
            />
          </MenuItem>
        </MenuMenu>
        <MenuItem>
          <ShowModal buttonName="Cart">
            <CartPage
              Carts={Cart}
              onRemoveHandle={props.onRemoveHandle}
              handleSubscribeCourse={handleSubscribeCourse}
            />
          </ShowModal>
        </MenuItem>
        <MenuItem>
          <LogoutModal buttonName="Logout" handleLogout={handleLogout}>
            <h3>Do you want to logout?</h3>
          </LogoutModal>
        </MenuItem>
        <MenuItem>
          <ShowModal buttonName="My Courses">
            <Subscribe
              SubscribeCourse={SubscribeCourse}
              Name={Name}
              Cart={Cart}
              Names={Names}
              handleSubscribeCourse={handleSubscribeCourse}
            />
          </ShowModal>
        </MenuItem>
        <MenuItem active={activeItem === "User"} onClick={handleItemClick}>
          <span style={{ color: "black", textTransform: "uppercase" }}>
            {Name ? Name : "User"}
          </span>
        </MenuItem>
      </Menu>
    </Segment>
  );
};

export default Header;
