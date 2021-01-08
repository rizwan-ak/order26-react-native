import AT from "../actions/actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  latestOrder: null,
  menuOptions: null,
  orderCounts: null,
  messages: null,
  employee: null,
  orders: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AT.SET_USER:
      return { ...state, user: payload, loading: false, error: null };
    case AT.SET_LOADING:
      return { ...state, loading: payload, error: null };
    case AT.SET_ERROR:
      return { ...state, error: payload, loading: false };
    case AT.SET_LATEST_ORDER:
      return { ...state, latestOrder: payload, loading: false, error: null };
    case AT.SET_MENU_OPTIONS:
      return { ...state, menuOptions: payload, loading: false, error: null };
    case AT.SET_LAST_ORDER_COUNTS:
      return { ...state, orderCounts: payload, loading: false, error: null };
    case AT.SET_MESSAGES:
      return { ...state, messages: payload, loading: false, error: null };
    case AT.SET_EMPLOYEE:
      return { ...state, employee: payload, loading: false, error: null };
    case AT.SET_ORDERS:
      return { ...state, orders: payload, loading: false, error: null };
    default:
      return state;
  }
};
