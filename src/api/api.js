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

export const FetchUserAvatar = async (accessToken, file) => {
  const url = 'http://localhost:8090/user/avatar';

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      body: formData,
    });

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const GetUserAd = async (accessToken) => {
  const url = 'http://localhost:8090/ads/me';
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

export const ChangeUserData = async (accessToken) => {
  const url = 'http://localhost:8090/ads/me';
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

export const performLoginUpdate = async (accessToken, refreshToken ) => {
  const url = 'http://localhost:8090/auth/refresh';
  const data = {
    access_token: {accessToken},
    refresh_token: {refreshToken},
  };
  
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
    });
}