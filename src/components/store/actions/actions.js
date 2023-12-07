export const getAllAdsRequest = () => ({
  type: "GET_ALL_ADS_REQUEST",
});

export const getAllAdsSuccess = (data) => ({
  type: "GET_ALL_ADS_SUCCESS",
  payload: data,
});

export const getAllAdsFailure = (error) => ({
  type: "GET_ALL_ADS_FAILURE",
  payload: error,
});

export const saveUserData = (email, password) => {
  return {
    type: "SAVE_USER_DATA",
    payload: {
      email,
      password,
    },
  };
};
