import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/UserContextProvider";

export default function withGuard(WrapComponent) {
  const Result = (props) => {
    let { token } = useUserStateContext();
    const navigate = useNavigate();

    useEffect(() => {
      if (token) {
        navigate("/account/home");
      }
    }, [token, navigate]);

    return !token ? <WrapComponent {...props} /> : <></>;
  };

  return Result;
}
