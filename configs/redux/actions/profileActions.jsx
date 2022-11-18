import axios from "axios";
import Swal from "sweetalert2";

export const getDetailWorker = (id, token) => async (dispatch) => {
    try {
        const users = await axios.get("http://localhost:8001/users/" + id, {
            headers: {
                token: token
            }
        })
        const result = users.data
        dispatch({
            type: "GET_DETAIL_WORKER",
            payload: {
                worker: result.data,
                experience: result.experience,
                portfolio: result.portfolio
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateProfileWorker = (form, allSkills, token, exp_id, porto_id ) => async (dispatch) => {
    console.log('form: ', form);
    console.log('allSkills-form: ', allSkills);
    try {
        const data = {
            fullname: form.fullname,
            jobdesk: form.jobdesk,
            domisili: form.domisili,
            company: form.company,
            descript: form.descript_bio,
            skill: allSkills,
            portfolio_id: porto_id,
            experience_id: exp_id
        }
        const result = await axios.put(process.env.API_BACKEND + "workers/", data, {
            headers: {
                token: token
            }
        });
        toast.success(result.data.message, { toastId: "successUpdateWorker" })
        dispatch({ type: "UPDATE_WORKER_PROFILE", payload: result.data.data });
    } catch (error) {
        console.log(error);
    }
}

export const uploadImage = (image, token, user_id) => async (dispatch) => {
    console.log('image: ', image);
    try {
        const form = new FormData();
        form.append("photo", image)
        const result = await axios.put(process.env.API_BACKEND + "workers/upload/" + user_id, form, {
            headers: {
                token: token
            },
        });
        toast.success(result.data.message, { toastId: "successUpload" })
        dispatch({ type: "UPLOAD_IMAGE_WORKER", payload: result.data.data });
    } catch (error) {
        console.log(error);
    }
}