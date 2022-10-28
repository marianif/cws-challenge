import axios from "axios";
const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

export const geocode = async (address) => {
  try {
    const config = {
      method: "get",
      url: `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${apiKey}`,
    };

    const { data } = await axios(config);
    const { geometry } = data.results[0];
    return geometry;
  } catch (error) {
    console.warn(error);
  }
};
