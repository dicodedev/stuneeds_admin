import { Outlet } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";
import AppToast from "../components/AppToast";

export default function PlainLayout() {
  const { message } = useStateContext();

  return (
    <>
      {message && <AppToast />}
      <Outlet />
    </>
  );
}
