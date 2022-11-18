import axios from "axios";
import Swal from "sweetalert2";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ActionTypes } from "../constant/action-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk("login/loginUser", async ({data,lockCredential}) => {
    try {
        // dispatch({type: ActionTypes.USER_LOGIN_PENDING})
        const response = await axios.post(
            process.env.API_BACKEND + "auth/login", JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        )
        if (response.data.statusCode === 200) {
            toast.success("Login Success. Welcome " + response.data.data.fullname, { autoClose: 2000, toastId: "successLogin" });
            Cookies.set("token", response.data.data.token);
            Cookies.set("refreshToken", response.data.data.refreshToken);
            Cookies.set("role", response.data.data.role);
            Cookies.set("id", response.data.data.id);
            Cookies.set("email", response.data.data.email);
            Cookies.set("lockCredential", lockCredential);
            return response.data;
        } else {
            toast.warning(response.data.message, { autoClose: 2000, toastId: "warningLogin" });
            return response.data.message;
        }
        // const user = result.data.data
        // const password = result.data.data
        // const role = result.data.data
        // const users = {
        // role: result.data.data.role,
        // password: result.data.data.password,
        // email : result.data.data.email
    //    }
    //    console.log(users);

    //    const token = result.data.data.token
        // localStorage.setItem("token", token);
        // localStorage.setItem("user", role);
        // localStorage.setItem("password", password);
        // localStorage.setItem("refreshToken", user.refreshToken);
        // dispatch({type: ActionTypes.USER_LOGIN_SUCCESS, payload: user})

        // dispatch({
        //     type: ActionTypes.USER_LOGIN_SUCCESS,
        //     token: token.data,
        //     payload: user,
        // });
        // Swal.fire({
        //     icon: "success",
        //     title: "Selamat kamu berhasil Login",
        //     text: `Hallo!!`,
        // });
        //  navigate('/landing-page')
    } catch (error) {
        toast.warning(error.response.data.message, { autoClose: 2000, toastId: "errorLogin" });
    }
});

export const signUp = (data, navigate) => async (dispatch) => {
    try {
        dispatch({type: ActionTypes.USER_REGISTER_PENDING});
        const result = await axios
        .post(
            process.env.API_BACKEND + "auth/register",
            data
        );
        const user = result.data.data;

        localStorage.setItem("token", user.token);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: ActionTypes.USER_REGISTER_SUCCESS, payload: user});
          Swal.fire({
            icon: "success",
            title: "Selamat kamu berhasil buat akun",
            text: `Silakan Login!!`,
          });
          navigate("/login-worker");
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Data yang kamu inputkan salah",
        });
        console.log(error);
    }
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT",
        });
    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
      const token = getState().auth.token;
      if (token) {
        dispatch({
          type: "USER_LOADED",
          token,
        });
      } else return null;
    };
  };