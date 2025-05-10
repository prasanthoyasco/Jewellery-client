export const getUserLocation = async () => {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      return {
        city: data.city,
        region: data.region,
        country: data.country_name,
        lat: data.latitude,
        lon: data.longitude,
        ip: data.ip,
      };
    } catch (error) {
      console.error("Failed to fetch location", error);
      return {};
    }
  };
  