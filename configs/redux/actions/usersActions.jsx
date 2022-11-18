import { ActionTypes } from "../constant/action-types";
import axios from "axios";
import axio from "../../axios";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    };
};

export const getUser = createAsyncThunk("user/getUser", async ({page, limit, search, sort}) => {
    try {
        const navigate = useNavigate();
        dispatch({type: ActionTypes.GET_USERS_PENDING});
        const { data } = await axio ({
            url: `${process.env.API_BACKEND}users?${sort ? "sort" + sort : ""}&page=${page}&limit=${limit}${search ? "&search" + search : ""}`,
            method: "GET",
        });

        dispatch({
            type: ActionTypes.GET_USERS_SUCCESS,
            payload: {data: data.data, pagination: data.pagination},
        });
        navigate("/home");
    } catch (error) {
        dispatch({
            type: ActionTypes.GET_USERS_ERROR,
            payload: error.response,
        });
    }
});

export const selectedUser = (user) => {
    return {
        type: ActionTypes.SELECTED_USERS,
        payload: user,
    };
};

export const updateUser = (user) => {
    return {
        type: ActionTypes.UPDATE_USERS,
        payload: user,
    };
};

export const getDetail = (id) => async (dispatch) => {
    dispatch({type: ActionTypes.GET_USERS_PENDING});
    const data = await axios
    .get(`http://localhost:8001/users/${id}`)
    .catch((err) => {
        console.log(err);
    });
    console.log(data);
    dispatch({type: ActionTypes.SELECTED_USERS, payload: data});
};

export const deleteUser = (user) => {
    return {
        type: ActionTypes.DELETE_USERS,
        payload: user,
    };
};

export const removeSelectedUser = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_USER,
    };
};