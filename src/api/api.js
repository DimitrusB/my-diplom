
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

 export  const registerUser = async () => {
    const url = 'http://localhost:8090/auth/register';
  
    const userData = {
      password: 'string',
      role: 'string',
      email: 'user@example.com',
      name: 'string',
      surname: 'string',
      phone: 'string',
      city: 'string',
      id: 0
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      const data = await response.json();
      console.log('User registration response:', data);
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };
