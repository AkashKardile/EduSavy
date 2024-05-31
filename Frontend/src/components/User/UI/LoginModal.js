import React from "react";
import ShowModal from "../../Modal/Modal";
import Login from "../Forms/Login";

const LoginModal = ({ handleIsLogin, isLogin, handleIsLogout, onClick }) => {
  return (
    <>
      <ShowModal buttonName="Login">
        <Login
          handleIsLogin={handleIsLogin}
          isLogin={isLogin}
          handleIsLogout={handleIsLogout}
        />
      </ShowModal>
    </>
  );
};

export default LoginModal;
