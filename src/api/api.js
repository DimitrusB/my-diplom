const reqUrl = "http://localhost:8090";

export const GetAllAds = async () => {
  try {
    const result = await fetch(`${reqUrl}/ads`);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetAllReview = async (idAd) => {
  try {
    const result = await fetch(`${reqUrl}/ads/${idAd}/comments`);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetAdsByID = async (id) => {
  try {
    const result = await fetch(`${reqUrl}/ads/${id}`);
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
    const result = await fetch(`${reqUrl}/images`);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  const url = `${reqUrl}/auth/register`;

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
  const url = `${reqUrl}/auth/login`;

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
  const url = `${reqUrl}/auth/login`;
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
  const url = `${reqUrl}/user`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { headers });
    if (response.status === 401) {
      refreshToken();
    } else {
      const userData = await response.json();
      console.log("Успешный ответ:", userData);
      return userData;
    }
  } catch (error) {
    console.error("Ошибка при запросе:", error.response?.data || error.message);
    throw error;
  }
};

export const FetchUserAvatar = async (file) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = `${reqUrl}/user/avatar`;

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
    if (response.status === 401) {
      await refreshToken();
    } else {
      const data = await response.json();
      console.log("Success:", data);
      return data;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const GetUserAd = async () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = `${reqUrl}/ads/me`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, { headers });
    if (response.status === 401) {
      refreshToken();
      return GetUserAd();
    } else {
      const userData = await response.json();
      console.log("Успешный ответ:", userData);
      return userData;
    }
  } catch (error) {
    console.error("Ошибка при запросе:", error.response?.data || error.message);
    throw error;
  }
};

export const ChangeUserData = async (userData) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const url = `${reqUrl}/user`;
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

export const addNewAd = async (newData) => {
  const url = `${reqUrl}/adstext`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      console.error("Add new at :", response.status);
    }
    const data = await response.json();
    console.log("User registration response:", data);
  } catch (error) {
    console.error("Error during user registration:", error);
  }
};

export const deleteAd = async (id) => {
  const url = `${reqUrl}/ads/${id}`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    if (!response.ok) {
      console.error("Add new at :", response.status);
    }
    const data = await response.json();
    console.log("User registration response:", data);
  } catch (error) {
    console.error("Error during user registration:", error);
  }
};

export const addNewAdwithPhoto = async (newData) => {
  const { title, description, price, files } = newData;
  const url = `${reqUrl}/ads?title=${title}&description=${description}&price=${price}`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  files.forEach((file) => {
    formData.append("files", file, file.name);
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      console.error("Error adding new ad:", response.status);
      return;
    }

    const data = await response.json();
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error during adding new ad:", error);
  }
};

export const addNewReview = async (idReview, newReview) => {
  const url = `${reqUrl}/ads/${idReview}/comments`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newReview }),
    });

    if (response.status === 401) {
      await refreshToken();
      return addNewReview(idReview, newReview);
    }

    if (!response.ok) {
      console.error("Error adding new review:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error during adding new review:", error);
  }
};

export const editAds = async (newData, itemID) => {
  const { title, description, price } = newData;
  const url = `${reqUrl}/ads/${itemID}`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
      }),
    });
    if (response.status === 401) {
      await refreshToken();
      return editAds(newData, itemID);
    }
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData); // Здесь могут быть детали проблемы
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error during editing ad:", error);
  }
};
