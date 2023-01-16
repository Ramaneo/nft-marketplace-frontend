import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_USER } from "../../redux/actions";

// import { withAlert } from "react-alert";

const Input = styled.input`
  flex: 1;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 0px;
  border-width: 1px;
  border-color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 7px;
  border-width: 1px;
  border-color: black;
  color: black;
  background-color: #e3e9f3;
  padding: 10px 30px;
  &:hover {
    background-color: #315082;
    cursor: pointer;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const SignIn = (props) => {
  const dispatch = useDispatch();

  async function handleClick() {
    dispatch({ type: LOGIN_USER });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: 20, fontWeight: "bold" }}>Sign in</span>
      </div>
      <Button
        style={{
          marginTop: 20,
          width: "100%",
          background: "rgb(212, 125, 53)",
        }}
        onClick={handleClick}
      >
        Sign in using <b>Metamask</b>
      </Button>
    </div>
  );
};

function Login(props) {
  const currentUser = useSelector((state) => state.authUser.userAddress);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          borderRightWidth: 1,
          borderRightStyle: "solid",
          borderRightColor: "black",

          backgroundImage: `url("https://live.staticflickr.com/5778/23725213761_5ceb8183a6_h.jpg")`,
        }}
      ></div>
      <div
        style={{
          flex: 0.5,
          // paddingLeft: 30,
          // paddingRight: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // width: "30%",
          // margin: "auto",
        }}
      >
        <div
          style={{
            width: "50%",
            marginLeft: 30,
            marginRight: 30,

            alignSelf: "center",
          }}
        ></div>
        <div
          style={{
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#000",
            paddingLeft: 35,
            paddingRight: 35,
            paddingTop: 35,
            paddingBottom: 40,
            borderRadius: 17,
            background: "white",
          }}
        >
          {<SignIn {...props} />}
        </div>
      </div>
    </div>
  );
}

export default Login;
// export default withAlert()(Login);
