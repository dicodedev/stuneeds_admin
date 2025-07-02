export const subscribeHandler = async (bodyData) => {
  const stringifiedData = JSON.stringify(bodyData);
  await axiosClient
    .post("employer/subscribe", stringifiedData)
    .then((data) => {
      const payload = JSON.parse(data);
      return payload;
    })
    .catch((err) => {
      const response = err.response;
      if (response && response.status === 422) {
        alert(response.data.message);
      }
    });
};

export const verifySubscriptionHandler = async (bodyData) => {
  const stringifiedData = JSON.stringify(bodyData);
  await axiosClient
    .post("auth/employer/login", stringifiedData)
    .then((data) => {
      const payload = JSON.parse(data);
      return payload;
    })
    .catch((err) => {
      const response = err.response;
      if (response && response.status === 422) {
        alert(response.data.message);
      }
    });
};
