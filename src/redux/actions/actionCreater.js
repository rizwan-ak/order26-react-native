import AT from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL =
  "https://www.cheaposervice.com/Order26.QA.AppLayer/MarketPlace";

const setLoading = (payload) => ({
  type: AT.SET_LOADING,
  payload,
});

const setError = (payload) => ({
  type: AT.SET_ERROR,
  payload,
});

const setUser = (data) => {
  const email = data.username;
  const password = data.password;

  // const email = "vipulliv26@gmail.com";
  // const email = "liv26.tv@gmail.com";
  // const password = "admin101";

  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await axios.post(
        `/Login?UserId=${email}&password=${password}`
      );
      dispatch({
        type: AT.SET_USER,
        payload: result.data,
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.log("error", error.message);
      dispatch(setError(error.message));
    }
  };
};

const getAllData = (data) => {
  console.log("data", data);
  const token = data.signature;
  const companyId = data.companyId;
  const version = data.version;
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await axios.get("", {
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
          CompanyId: companyId,
          "X-APP-VERSION": version,
        },
      });
      dispatch({
        type: AT.SET_LATEST_ORDER,
        payload: result.data.latestOrders[0],
      });
      dispatch({
        type: AT.SET_LAST_ORDER_COUNTS,
        payload: result.data.lastNOrderCounts,
      });
      dispatch({
        type: AT.SET_MENU_OPTIONS,
        payload: result.data.menuOptions,
      });
      dispatch({
        type: AT.SET_MESSAGES,
        payload: result.data.messages,
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.log("error", error.message);
      dispatch(setError(error.message));
    }
  };
};

const getEmployee = (data) => {
  console.log("asdfasfd");
  const token = data.signature;
  const companyId = data.companyId;
  const version = data.version;
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await axios.get("/employee?pageNumber=0&PageSize=20", {
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
          CompanyId: companyId,
          "X-APP-VERSION": version,
        },
      });
      dispatch({
        type: AT.SET_EMPLOYEE,
        payload: result.data.items,
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.log("error", error.message);
      dispatch(setError(error.message));
    }
  };
};

const getOrders = (data) => {
  const token = data.signature;
  const companyId = data.companyId;
  const version = data.version;
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await axios.get("/order?pageNumber=0&PageSize=20", {
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
          CompanyId: companyId,
          "X-APP-VERSION": version,
        },
      });
      dispatch({
        type: AT.SET_ORDERS,
        payload: result.data.items,
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.log("error", error.message);
      dispatch(setError(error.message));
    }
  };
};

const updateStatus = (data, details) => {
  const token = data.signature;
  const companyId = data.companyId;
  const version = data.version;
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await axios.put(
        "",
        {
          uniqueId: details.contactId,
          isActive: details.isActive,
          sourceName: "employee",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-TOKEN": token,
            CompanyId: companyId,
            "X-APP-VERSION": version,
          },
        }
      );
      result.status === 204 && dispatch(getEmployee(data));
      // dispatch(setLoading(false));
      // dispatch({
      //   type: AT.SET_ORDERS,
      //   payload: result.data.items,
      // });
    } catch (error) {
      dispatch(setLoading(false));
      console.log("error", error.message);
      dispatch(setError(error.message));
    }
  };
};

export default {
  setUser,
  getAllData,
  getEmployee,
  getOrders,
  updateStatus,
};
