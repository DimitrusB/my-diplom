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
    console.log("User login response:", data);

    return data;
  } catch (error) {
    console.error("Error during user login:", error);
  }
};

export const GetUserData = async (accessToken) => {
  const url = 'http://localhost:8090/user';
  const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { headers });
    const userData = await response.json();
    console.log('Успешный ответ:', userData);
    return userData;
  } catch (error) {
    console.error('Ошибка при запросе:', error.response?.data || error.message);
    throw error;
  }
};
