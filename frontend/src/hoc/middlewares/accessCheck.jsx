import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/UserContextProvider";

export default function accessCheck(WrapComponent) {
  const Result = (props) => {
    let { user } = useUserStateContext();
    user = JSON.parse(user);

    const navigate = useNavigate();

    useEffect(() => {
      if (user?.employer_id) {
        navigate("/account/home");
      }
    }, [user, navigate]);

    return !user?.employer_id ? <WrapComponent {...props} /> : <></>;
  };

  return Result;
}
