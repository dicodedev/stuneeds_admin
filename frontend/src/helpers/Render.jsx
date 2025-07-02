import Login from "../components/Modals/Auth/Login";
import Signup from "../components/Modals/Auth/Signup";
import ForgotPassword from "../components/Modals/forgotpassword/ForgotPassword";
import NewPassword from "../components/Modals/forgotpassword/NewPassword";
import Plans from "../components/Plans";
import Verify from "../components/Verify";

import ResetPassword from "../components/Modals/forgotpassword/PasswordReset";
import SignUpEmployee from "../components/ProcessSignup";
import IndividualSignUp from "../components/IndividualSignUp";

import EmployerSignUp from "../components/Employers/Signup";
import EmployerRegister from "../components/Employers/Register";

export default function renderPage(
  currentPage,
  handleCloseModal,
  handleOpenModal
) {
  switch (currentPage) {
    case "signup":
      return (
        <Signup
          onLoginClick={() => handleOpenModal("login")}
          onVerifyClick={() => handleOpenModal("verify")}
        />
      );
    case "login":
      return (
        <Login
          onSignupClick={() => handleOpenModal("signup")}
          onForgotPasswordClick={() => handleOpenModal("forgotPassword")}
          onClose={() => handleCloseModal()}
          setUser={setUser}
        />
      );
    case "forgotPassword":
      return (
        <ForgotPassword
          onLoginClick={() => handleOpenModal("login")}
          onSignupClick={() => handleOpenModal("signup")}
          onClose={() => handleCloseModal()}
          onNewPasswordClick={() => handleOpenModal("newPassword")}
        />
      );
    case "newPassword":
      return (
        <NewPassword
          onLoginClick={() => handleOpenModal("login")}
          onResetClick={() => handleOpenModal("resetPassword")}
          onClose={() => handleCloseModal()}
        />
      );
    case "resetPassword":
      return (
        <ResetPassword
          onLoginClick={() => handleOpenModal("login")}
          onEditNewPassword={() => handleOpenModal("newPassword")}
          onClose={() => handleCloseModal()}
        />
      );
    case "verify":
      return (
        <Verify
          onLoginClick={() => handleOpenModal("login")}
          onSignUpEmployeeClick={() => handleOpenModal("signUpEmployee")}
          onClose={() => handleCloseModal()}
        />
      );
    case "signUpEmployee":
      return (
        <SignUpEmployee
          onLoginClick={() => handleOpenModal("login")}
          onSignUpIndividualClick={() => handleOpenModal("signUpIndividual")}
          onClose={() => handleCloseModal()}
        />
      );
    case "signUpIndividual":
      return (
        <IndividualSignUp
          onLoginClick={() => handleOpenModal("login")}
          onSignUpEmployerClick={() => handleOpenModal("signUpEmployee")}
          onClose={() => handleCloseModal()}
        />
      );
    case "Plans":
      return (
        <Plans
          signUpEmployer={() => handleOpenModal("EmployerRegister")}
          onClose={() => handleCloseModal()}
        />
      );
    case "EmployerSignUp":
      return (
        <EmployerSignUp
          thePlans={() => handleOpenModal("Plans")}
          onClose={() => handleCloseModal()}
        />
      );
    case "EmployerRegister":
      return (
        <EmployerRegister
          onLoginClick={() => handleOpenModal("login")}
          onVerifyClick={() => handleOpenModal("verify")}
          onClose={() => handleCloseModal()}
        />
      );
    default:
      return null;
  }
}
