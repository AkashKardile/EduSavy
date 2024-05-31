import React, { useState, useContext } from "react";
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
import "./Header.css";
import LogoutModal from "../../Modal/LogoutModal";

const Header = () => {
  const context = useContext(courseContext);
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const data = useLocation();
  const Name = data.state ? data.state.Name : "User";

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const handleLogout = () => {
    navigate("/adminLogout");
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
          <LogoutModal buttonName="Logout" handleLogout={handleLogout}>
            <h3>Do you want to logout?</h3>
          </LogoutModal>
        </MenuItem>
        <MenuItem active={activeItem === "User"} onClick={handleItemClick}>
          <span style={{ color: "black", textTransform: "uppercase" }}>
            {Name}
          </span>
        </MenuItem>
      </Menu>
    </Segment>
  );
};
export default Header;

{
  /* <Segment inverted className="header-segment">
      <Menu inverted secondary>
        <Image src={Logo} size="medium" className="header-logo" />
        <Menu
          inverted
          secondary
          className="header-menu"
          color="black"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          style={{ color: "black" }}
        >
          Home
        </Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              icon="search"
              placeholder="Search..."
              onChange={(e) => context.onChangeSearch(e.target.value)}
              className="header-search"
            />
          </Menu.Item>
          <Menu.Item
            name="Logout"
            active={activeItem === "Logout"}
            onClick={handleLogout}
            style={{ color: "black" }}
          >
            Logout
          </Menu.Item>
          <Menu.Item
            name="user"
            active={activeItem === "User"}
            onClick={handleItemClick}
            style={{ color: "black" }}
          >
            {Name}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};
 */
}
