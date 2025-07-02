import { Outlet, useLocation } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import AppToast from "../components/AppToast";
import { useUserStateContext } from "../context/UserContextProvider";
import axiosClient from "../axios-client";
import { useModalContext } from "../context/useModal";
import ModalContent from "../components/ModalContent";

export default function DefaultLayout() {
  const { setShowFixedSidebar, message, setLandingPage } = useStateContext();
  const { pathname } = useLocation();

  const { token, setUser, user } = useUserStateContext();
  const { modal, setModal } = useModalContext();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [, user]);

  const [page, setPage] = useState("");

  useEffect(() => {
    let page = window.location.pathname;
    let path = page.split("/")[1] == "" ? "" : page.split("/")[1];

    setPage(path);
    setLandingPage(path);
    setModal(null);
  }, [pathname]);

  const handleScroll = () => {
    setShowFixedSidebar(window.pageYOffset > 140);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      {message && <AppToast />}

      {/* MODAL */}
      {modal && (
        <div className="z-[1000] h-screen fixed overflow-hidden top-0 left-0 inset-0 flex  justify-center bg-black bg-opacity-50">
          <ModalContent />
        </div>
      )}

      <Outlet />
      {page != "waitlist" && <Footer />}
    </div>
  );
}
