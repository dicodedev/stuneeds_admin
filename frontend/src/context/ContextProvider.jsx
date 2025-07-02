import { createContext, useContext, useState } from "react";
import axiosClient from "../axios-client.js";

const StateContext = createContext({
  openSidebar: null,
  openDashboardSidebar: null,
  openLogin: null,
  openPlans: null,
  openSignUp: null,
  message: null,
  openEmployerSignUp: null,
  openProcessSignUp: null,
  showFixedSidebar: null,
  toVerificationPage: null,
  openJoin: null,
  openForgotPassword: null,
  openPasswordReset: null,
  openNewPassword: null,
  employerSignUp: null,
  selectedPlan: null,
  selectedCondition: null,
  landingPage: null,
  dashboardPage: null,
  setLandingPage: () => {},
  setDashboardPage: () => {},
  setEmployerSignUp: () => {},
  setOpenSidebar: () => {},
  setOpenDashboardSidebar: () => {},
  setOpenLogin: () => {},
  setOpenSignUp: () => {},
  setOpenEmployerSignUp: () => {},
  setOpenPlans: () => {},
  setOpenProcessSignUp: () => {},
  setShowFixedSidebar: () => {},
  closeAllModals: () => {},
  setToVerificationPage: () => {},
  setOpenJoin: () => {},
  setOpenForgotPassword: () => {},
  setOpenPasswordReset: () => {},
  setOpenNewPassword: () => {},
  setMessage: () => {},
  setSelectedPlan: () => {},
  setSelectedCondition: () => {},
});

export const ContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDashboardSidebar, setOpenDashboardSidebar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openPlans, setOpenPlans] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openEmployerSignUp, setOpenEmployerSignUp] = useState(false);
  const [showFixedSidebar, setShowFixedSidebar] = useState(false);
  const [toVerificationPage, setToVerificationPage] = useState(false);
  const [openProcessSignUp, setOpenProcessSignUp] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openPasswordReset, setOpenPasswordReset] = useState(false);
  const [openNewPassword, setOpenNewPassword] = useState(false);
  const [employerSignUp, setEmployerSignUp] = useState(null);
  const [message, setMessage] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [landingPage, setLandingPage] = useState(null);
  const [dashboardPage, setDashboardPage] = useState(null);

  //REDUCERS -- to update the states
  const closeAllModals = () => {
    setOpenSidebar(false);
    setOpenLogin(false);
    setOpenSignUp(false);
    setOpenProcessSignUp(false);
    setOpenPlans(false);
    setOpenEmployerSignUp(false);
    setOpenJoin(false);
    setOpenForgotPassword(false);
    setOpenPasswordReset(false);
    setOpenNewPassword(false);
  };
  return (
    <StateContext.Provider
      value={{
        openPlans,
        setOpenPlans,
        openSidebar,
        setOpenSidebar,
        openDashboardSidebar,
        setOpenDashboardSidebar,
        openSignUp,
        setOpenSignUp,
        openEmployerSignUp,
        setOpenEmployerSignUp,
        openLogin,
        setOpenLogin,
        showFixedSidebar,
        setShowFixedSidebar,
        closeAllModals,
        toVerificationPage,
        setToVerificationPage,
        openProcessSignUp,
        setOpenProcessSignUp,
        openJoin,
        setOpenJoin,
        openForgotPassword,
        setOpenForgotPassword,
        openPasswordReset,
        setOpenPasswordReset,
        openNewPassword,
        setOpenNewPassword,
        message,
        setMessage,
        selectedPlan,
        setSelectedPlan,
        selectedCondition,
        setSelectedCondition,
        landingPage,
        setLandingPage,
        dashboardPage,
        setDashboardPage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
