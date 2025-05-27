const storeToken = (value) => {
  localStorage.setItem("access_token", value);
};

const getToken = () => {
  let access_token = localStorage.getItem("access_token");
  return { access_token };
};

const paymentdata = (value) => {
  localStorage.setItem("payment_details", JSON.stringify(value));
  console.log(value);
};

const getpaymentdata = () => {
  let payment_details = JSON.parse(localStorage.getItem("payment_details"));
  return { payment_details };
};

const removeToken = () => {
  localStorage.clear();
  localStorage.clear();
};

const setProfile = (value) => {
  localStorage.setItem("profile", JSON.stringify(value));
};

const setAddress = (value) => {
  localStorage.setItem("address", JSON.stringify(value));
};

const getProfile = () => {
  let profile = "";

  if (localStorage.getItem("profile") !== null) {
    profile = JSON.parse(localStorage.getItem("profile"));
  }
  return { profile };
};

const getAddress = () => {
  let address = [];

  if (localStorage.getItem("address") !== null) {
    address = JSON.parse(localStorage.getItem("address"));
  }
  return { address };
};

export {
  storeToken,
  getToken,
  removeToken,
  setProfile,
  getProfile,
  paymentdata,
  getpaymentdata,
};
