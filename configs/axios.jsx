import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import Cookies from "js-cookie";

const baseURL = process.env.API_BACKEND

const PrivateAxios = () => {
  const token = Cookies.get("token")
  const axiosApiInstance = axios.create({
    baseURL,
    headers: {Authorization: `Bearer ${token}`}
  });

  let refreshRequest = false;

  axiosApiInstance.interceptors.request.use(async req => {
    if (token && !refreshRequest) {
      const user = jwt_decode(token);

      const isTokenExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (isTokenExpired) {
          refreshRequest = true
          const response = await axios.post(
              process.env.API_BACKEND + "users/refresh-token",
              { refreshToken: ( Cookies.get('refreshToken')) }
              ,
              {
                  headers: { "Content-Type": "application/json" },
              },
              { withCredentials: true }
          );
          Cookies.set("token", response.data.data.token);
          Cookies.set("refreshToken", response.data.data.refreshToken);

          req.headers.Authorization = `Bearer ${response.data.data.token}`
      }
    }
    return req
  })
  return axiosApiInstance
}

export default PrivateAxios;


// const axiosApiInstace = axios.create({
//     baseURL: process.env.API_BACKEND,
// })

// axiosApiInstace.interceptors.request.use(
//     function (config) {
      
//       if (token) {
//         config.headers = {
//           Authorization: `Bearer ${token}`,
//         };
//       }
//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );
  
//   axiosApiInstace.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       if (
//         error.response.status === 400 &&
//         error.response.data.message === "token invalid"
//       )
//         dispatch.push("/login-worker");
//       localStorage.removeItem("token");
//       localStorage.removeItem("refreshToken");
//       return Promise.reject(error);
//     }
//   );
  
//   export default axiosApiInstace;