import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import Notification from "../assets/images/icons/notification.svg";
import Avater from "../assets/images/avatar.svg";
import AngleDowPurple from "../assets/images/icons/arrow-down-purple.svg";
import Wura from "../assets/images/logos/Wura.svg";

import Home from "../assets/images/icons/home.svg";
import Polygon from "../assets/images/icons/Polygon.svg";
import Conditions from "../assets/images/icons/colorfilter.svg";
import History from "../assets/images/icons/document-text.svg";
import Plans from "../assets/images/icons/convertshape.svg";
import Settings from "../assets/images/icons/setting-2.svg";
import Nav from "../components/Nav";
import { useStateContext } from "../context/ContextProvider";

import Close from "../assets/images/icons/close-circle.svg";
import { useModalContext } from "../context/useModal";
import ModalContent from "../components/ModalContent";
import AppToast from "../components/AppToast";
import axiosClient from "../axios-client";
import { useUserStateContext } from "../context/UserContextProvider";
import Skeleton from "react-loading-skeleton";
import Capitalize from "../helpers/Capitalise";

import "react-loading-skeleton/dist/skeleton.css";

const data = [
  {
    name: "Home",
    icon: "home",
    link: "home",
  },
  {
    name: "Conditions",
    icon: "conditions",
    link: "condition",
  },
  {
    name: "History",
    icon: "history",
    link: "history",
  },
  {
    name: "Health plan mgt",
    icon: "plan",
    link: "health_plan",
    guard: true,
  },
  {
    name: "Settings",
    icon: "settings",
    link: "settings",
  },
];

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const [page, setPage] = useState("");
  const [height, setheight] = useState(window.innerHeight ?? null);

  const {
    setOpenDashboardSidebar,
    openDashboardSidebar,
    dashboardPage,
    setDashboardPage,
    message,
  } = useStateContext();

  const { modal, setModal } = useModalContext();

  let { token, setUser, user } = useUserStateContext();
  user = JSON.parse(user);

  const getIcon = (icon) => {
    switch (icon) {
      case "home":
        return Home;
      case "conditions":
        return Conditions;
      case "history":
        return History;
      case "plan":
        return Plans;
      case "settings":
        return Settings;
      default:
        break;
    }
  };

  useEffect(() => {
    let page = window.location.pathname;
    let path = page.split("/")[2] == "" ? "" : page.split("/")[2];

    setPage(path);
    setDashboardPage(path);
    setOpenDashboardSidebar(false);
    setModal(null);
  }, [pathname]);

  useEffect(() => {
    if (token) {
      axiosClient.get("individual/profile").then(({ data }) => {
        setUser(data.data);
      });
    }
  }, []);

  useEffect(() => {
    setheight(window.innerHeight);
  }, [window.innerHeight]);

  return (
    <>
      {message && <AppToast />}

      {/* MODAL */}
      {modal ? (
        !modal.free ? (
          <div
            onClick={() => {}}
            className={`w-[100vw]  overflow-y-scroll md:bg-transparent bg-[rgba(0,0,0,0.2)] z-[200]  fixed top-0 left-0 h-[100vh] block`}
          >
            <div className="bg-[#fff] md:flex flex-col rounded-[8px] md:rounded-none font-[600] z-[6] py-[20px] px-[16px] md:border md:border-[#D0D5DD] md:shadow-[0px_0px_10px_0.4px_rgb(208_213_221_/1)] right-auto ml-[50%] md:left-auto  translate-x-[-50%] md:translate-x-0 mmx-[10px] md:h-[100vh] w-[92vw] md:w-[470px] md:fixed md:right-0 mt-[100px] mb-[20px] md:mb-0 md:mt-0">
              <div className="flex justify-between md:pl-[10px]">
                <h2 className="text-[24px] md:text-[27px] text-[#463671] mt-[8px]">
                  {modal.name}
                </h2>
                <span className="cursor-pointer" onClick={() => setModal(null)}>
                  <img className="h-[20px] w-[20px]" src={Close} alt="Close" />
                </span>
              </div>
              <ModalContent />
            </div>
          </div>
        ) : (
          <div
            onClick={() => {}}
            className={`w-[100vw]  overflow-y-scroll bg-[rgba(0,0,0,0.2)] z-[200]  fixed top-0 left-0 h-[100vh] block`}
          >
            <ModalContent />
          </div>
        )
      ) : (
        <></>
      )}

      {/* SIDEBAR */}
      <div
        style={{
          background: "rgba(0,0,0, .2)",
        }}
        onClick={() => setOpenDashboardSidebar(false)}
        className={`w-[100vw] z-[5] md:hidden fixed top-0 left-0 h-[100vh] ${
          openDashboardSidebar ? "block" : "hidden"
        }`}
      ></div>
      <div className="flex">
        <div
          className={`md:w-[226px] w-[270px] bg-[#fff] ${
            openDashboardSidebar ? "block" : "hidden"
          } z-[1000] fixed md:z-0 top-0 left-0 md:block md:static border border-[#EAEDFF] h-[100vh]`}
        >
          <div
            className={`h-full relative h-[${
              height ? height + "px" : "100vh"
            }] md:h-[100vh]`}
          >
            <Link to="/" className="block pl-[30px] py-[20px] mb-[18px]">
              <img src={Wura} className="h-[32px] mt-[-3px]" alt="wura logo" />
            </Link>
            <div className="px-[9px]">
              <div>
                {data.map((item, key) =>
                  !item.guard || (item.guard && !user?.employer_id) ? (
                    <Link
                      key={key}
                      to={"/account/" + item.link}
                      className={`flex items-center hover:bg-[#F4EBFF] ${
                        page != item.link ? "" : "bg-[#F4EBFF]"
                      } py-[10px] rounded-[4px] mb-[6px]`}
                    >
                      {page != item.link ? (
                        <div className="w-[13px]"></div>
                      ) : (
                        <img src={Polygon} className="h-[10px]" alt="Polygon" />
                      )}
                      <img
                        src={getIcon(item.icon)}
                        className="mx-[8px] h-[20px]"
                        alt={item.icon}
                      />
                      <span
                        className={`text-[14px] hover:font-[500] ${
                          page != item.link ? "" : "font-[500]"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
            <div className="absolute left-0 bottom-[20px] px-[6px] flex justify-center w-full">
              <div className="flex items-center gap-x-[6px] rounded-[6px] border w-full  border-[#F2F4F7] py-[5px] px-[6px]">
                <span className="h-[40px] w-3/12">
                  <img
                    src={Avater}
                    className="w-[100%] h-[100%]"
                    alt="avater"
                  />
                </span>

                <div className="w-9/12">
                  <h6 className="text-[#1D2939] text-[13px] font-[500] ">
                    {user ? (
                      `${Capitalize(user.first_name)} ${Capitalize(
                        user.last_name
                      )}`
                    ) : (
                      <Skeleton height={10} width={100} />
                    )}
                  </h6>
                  <span className="block text-[#344054] mt-[4px] text-[12px] font-[400] whitespace-nowrap truncate">
                    {user ? user?.email : <Skeleton height={10} width={120} />}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="dashboardScroll"
          className="flex-1 overflow-y-scroll h-[100vh]"
        >
          <Nav type="account" />
          <div className="md:flex hidden justify-end gap-x-[10px] border border-[#EAEDFF] py-[15px] px-[40px]">
            <img src={Notification} className="h-[34px]" alt="notification" />
            <span className="flex items-center gap-x-[3px]">
              <img src={Avater} className="h-[34px]" alt="avater" />
              <img
                src={AngleDowPurple}
                className="h-[13px]"
                alt="Angle Down Purple"
              />
            </span>
          </div>
          <div className="px-[10px] md:px-[40px] py-[40px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
