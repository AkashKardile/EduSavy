import React, { useEffect, useReducer } from "react";
import Header from "./UserLoginheader";
import CourseContainer from "../UI/CourseContainer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return { ...state, cart: [...state.cart, action.payload] };
    case "Remove":
      let updatedArray = state.cart.filter((CourseCart) => {
        return CourseCart._id !== action.id;
      });

      return { ...state, cart: updatedArray };

    case "SubscribeCourse":
      return {
        ...state,
        SubscribeCourses: [...state.SubscribeCourses, action.payload],
      };
  }
};
const UserLoginPage = () => {
  const data = useLocation();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:2000/userLogin").then((res) => {
      if (res.data !== "Success") {
        navigate("/");
      }
    });
  }, []);
  let Name = data.state.Name;
  let Cart = data.state.Cart;
  let Names = data.state.Names;
  let SubscribeCourses = data.state.SubscribeCourses;
  let isLogin = data.state.isLogin;
  let handleIsLogout = data.state.handleIsLogout;
  let handleIsLogin = data.state.handleIsLogin;
  let onClickHandle = data.state.onClick;

  const [state, dispatch] = useReducer(reducer, {
    cart: Cart,
    SubscribeCourses,
  });

  const handleAdd = (data) => {
    dispatch({ type: "Add", payload: data });
  };

  const handleRemove = (id) => {
    dispatch({ type: "Remove", id: id });
  };

  const handleSubscribeCourse = (data) => {
    dispatch({ type: "SubscribeCourse", payload: data });
  };

  return (
    <>
      <Header
        Name={Name}
        Cart={state.cart}
        onRemoveHandle={handleRemove}
        Names={Names}
        handleSubscribeCourse={handleSubscribeCourse}
        SubscribeCourse={state.SubscribeCourses}
        handleIsLogout={handleIsLogout}
        handleIsLogin={handleIsLogin}
      />
      <CourseContainer
        Cart={state.cart}
        onAddHandle={handleAdd}
        isLogin={isLogin}
        handleIsLogout={handleIsLogout}
        handleIsLogin={handleIsLogin}
      />
    </>
  );
};

export default UserLoginPage;
