import { useState } from "react";
import wuraLogo from "../assets/images/logos/logo_white.png";
import bigImage from "../assets/images/wuraboard.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import CHAT from "../assets/images/CHAT.svg";
import { Link } from "react-router-dom";
import AppToast from "../components/AppToast";
import { useStateContext } from "../context/ContextProvider";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { message } = useStateContext();

  // This is used for some styling
  const theWord = "sign-up";
  const isSignUp = location.pathname.includes(theWord);
  //END
  const handleNavigation = (path) => {
    navigate(path);
  };
  //END
  return (
    <>
      {message && <AppToast />}
      <div className="authDahboard flex md:h-screen flex-col lg:flex-row">
        <div className="leftSide h-2/6 lg:h-screen lg:w-1/2 flex flex-col justify-center items-center gap-y-5">
          <Link to="/" className="block logo pt-3 lg:pt-0">
            <img
              src={wuraLogo}
              alt="Wura Logo"
              className="w-24 lg:w-32 lg:h-16"
            />
          </Link>
          <div className="bi-image h-32 lg:h-fit">
            <img src={bigImage} alt="" className="objext-contain lg:w-80 " />
          </div>
          <div className="auth-board-texts text-center py-3 lg:w-4/5 hidden lg:inline">
            <h1 className="text-white text-3xl font-bold m-0">
              Easy Healthcare, on your Terms
            </h1>
            <p className="text-white opacity-65 text-base m-0 px-3 py-2">
              Smoothen your healthcare journey with WuraHealth. Connect,
              consult, and take control of your health, on your own terms.
            </p>
          </div>
        </div>
        <div
          className={`md:relative rightSide overflow-y-auto lg:h-screen lg:w-1/2 ${"pt-0"} flex flex-col items-center justify-center h-4/6`}
        >
          <div className="w-full px-3 lg:px-0 lg:w-3/5">
            <Outlet />
          </div>
          <div className="chat fixed bottom-0 -right-[18px] lg:right-0">
            <img src={CHAT} alt="" className="w-[125px] md:w-[120px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
