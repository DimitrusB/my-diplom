
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
  