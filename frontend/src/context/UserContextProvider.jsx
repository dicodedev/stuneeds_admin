import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: localStorage.getItem("USER") ?? null,
  token: localStorage.getItem("ACCESS_TOKEN") ?? null,
  setUser: () => {},
  setToken: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [user, _setUser] = useState(localStorage.getItem("USER"));

  const setToken = (token) => {
    _setToken(token);
    token
      ? localStorage.setItem("ACCESS_TOKEN", token)
      : localStorage.removeItem("ACCESS_TOKEN");
  };

  const setUser = (user) => {
    _setUser(JSON.stringify(user));
    user
      ? localStorage.setItem("USER", JSON.stringify(user))
      : localStorage.removeItem("USER");
  };

  return (
    <StateContext.Provider
      value={{
        token,
        user,
        setToken,
        setUser
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useUserStateContext = () => useContext(StateContext);
