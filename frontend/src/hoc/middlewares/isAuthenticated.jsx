import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/UserContextProvider";

export default function isAuthenticated(WrapComponent) {
  const Result = (props) => {
    let { token } = useUserStateContext();
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate("/auth/sign-in?error_message=Session Exipred. Kindly Login");
      }
    }, [token, navigate]);

    return token ? <WrapComponent {...props} /> : <></>;
  };

  return Result;
}
