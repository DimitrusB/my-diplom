const initialState = {
  ads: [],
  loading: false,
  error: null,
  email: '',
  password: '',
  accessToken: null,
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
      case 'SAVE_USER_DATA':
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
        };
        case 'SAVE_ACCESS_TOKEN':
          return {
            ...state,
            accessToken: action.payload,
          };
    default:
      return state;
  }
};

export default adsReducer;
