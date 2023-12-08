export const GetAllAds = async () => {
  try {
    const result = await fetch("http://localhost:8090/ads");
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetAllImages = async () => {
  try {
    const result = await fetch("http://localhost:8090/images");
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  const url = "http://localhost:8090/auth/register";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      console.error("User registration failed with status:", response.status);
    }
    const data = await response.json();
    console.log("User registration response:", data);
  } catch (error) {
    console.error("Error during user registration:", error);
  }
};

export const LoginUser = async (userData) => {
  const url = "http://localhost:8090/auth/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      console.error("User login failed with status:", response.status);
    }

    const data = await response.json();
    localStorage.setItem("accessToken", JSON.stringify(data.access_token));
    localStorage.setItem("refreshToken", JSON.stringify(data.refresh_token));
    console.log("User login response:", data);

    return data;
  } catch (error) {
    console.error("Error during user login:", error);
  }
};

export const refreshToken = async () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
  const url = "http://localhost:8090/auth/login";
  const data = {
    access_token: accessToken,
    refresh_token: refreshToken,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Token refresh failed with status:", response.status);
      return;
    }

    const newTokens = await response.json();
    localStorage.setItem("accessToken", JSON.stringify(newTokens.access_token));
    localStorage.setItem(
      "refreshToken",
      JSON.stringify(newTokens.refresh_token)
    );
  } catch (error) {
    console.error("Error during token refresh:", error);
  }
};

export const GetUserData = async () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = "http://localhost:8090/user";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { headers });
    const userData = await response.json();
    console.log("Успешный ответ:", userData);
    return userData;
  } catch (error) {
    console.error("Ошибка при запросе:", error.response?.data || error.message);
    throw error;
  }
};

export const FetchUserAvatar = async (file) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = "http://localhost:8090/user/avatar";

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const GetUserAd = async () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = "http://localhost:8090/ads/me";
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { headers });
    const userData = await response.json();
    console.log("Успешный ответ:", userData);
    return userData;
  } catch (error) {
    console.error("Ошибка при запросе:", error.response?.data || error.message);
    throw error;
  }
};

export const ChangeUserData = async (userData) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = "http://localhost:8090/user";
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log("User data updated successfully:", responseData);


  } catch (error) {
    console.error("Error updating user data:", error);

  }
};
