const initialState = {
  ads: [],
  loading: false,
  error: null,
};

const adsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ADS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_ADS_SUCCESS":
      return {
        ...state,
        ads: action.payload,
      };
    case "GET_ALL_ADS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adsReducer;
