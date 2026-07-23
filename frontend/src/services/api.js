import axios from "axios";
import { fetchAuthSession } from "aws-amplify/auth";

const api = axios.create({
  baseURL: "https://r52h5266wj.execute-api.ap-south-1.amazonaws.com/dev",
});

api.interceptors.request.use(async (config) => {
  try {
    const session = await fetchAuthSession();

    if (session.tokens?.idToken) {
      config.headers.Authorization =
        `Bearer ${session.tokens.idToken.toString()}`;
    }
  } catch (err) {
    console.log(err);
  }

  return config;
});

export default api;