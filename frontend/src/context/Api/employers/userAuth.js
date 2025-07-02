import axiosClient from "../../../axios-client";
import axios from "axios";

export const signUpHandler = async (bodyData) => {
  const stringifiedData = JSON.stringify(bodyData);
  await axiosClient
    .post("auth/employer/register", stringifiedData)
    .then(({ data }) => {
      localStorage.setItem("ACCESS_TOKEN", data.data[0].access_token);
      console.log("PAYLOAD:", data);
    })
    .catch((err) => {
      console.log(err);
      const response = err.response;
      if (response && response.status === 422) {
        alert(response.data.message);
      }
    });
};

export const signInHandler = async (bodyData) => {
  const stringifiedData = JSON.stringify(bodyData);
  await axiosClient
    .post("auth/employer/login", stringifiedData)
    .then(({ data }) => {
      // const payload = JSON.parse(data);
      localStorage.setItem("EMPLOYER_LOG_DATA", data.data[0]);
      console.log("PAYLOAD:", data);
    })
    .catch((err) => {
      const response = err.response;
      if (response && response.status === 422) {
        alert(response.data.message);
      }
    });
};
export const subscriptionHandler = () => {};
export const verifySubscriptionHandler = () => {};
