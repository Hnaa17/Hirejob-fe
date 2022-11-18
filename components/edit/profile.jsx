import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import defaultPhoto from "../../public/default-photo.jpg";
import edit from "../../public/edit.svg";
import location from "../../public/location.svg";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const Profile = ({ id }) => {
    // const [data, setData] = useState([]);
    const [saveImage, setSaveImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = Cookies.get("token");
    const [detail, setDetail] = useState([]);
    var data = [];

    // function handleUpload(e) {
    //     console.log(e.target.files[0]);
    //     const uploader = e.target.files[0];
    //     setSaveImage(uploader);
    // }

      const [form, setForm] = useState({
        fullname: detail?.fullname ? detail?.fullname : "",
        jobdesk: detail?.jobdesk ? detail?.jobdesk : "",
        domisili: detail?.domisili ? detail?.domisili : "",
        company: detail?.company ? detail?.company : "",
        descript: detail?.descript ? detail?.descript : "",
        // fullname: "",
        // jobdesk: "",
        // domisili: "",
        // company: "",
        // descript: "",
      });

      // const [formImage, setFormImage] = useState({
      //   image: "",
      // })
    
      const handleChange = (e) => {
        e.preventDefault();
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      // const handleImageSubmit = (e) => {
      //   const formData = new FormData();
      //   setLoading(true);
      //   formData.append("image", saveImage);
      //   e.preventDefault();
      //   axios
      //     .put(process.env.API_BACKEND + "users/photo/" + id, formData, {
      //         headers: {
      //           Authorization: `Bearer ${token}`,
      //         },
      //         "Content-Type": "multipart/form-data" ,
      //     })
      //     .then((res) => {
      //       setLoading(false);
      //       Swal.fire({
      //         text: res.data.message,
      //         icon: "success",
      //       });
      //       profileUser();
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
    
      const handleProfileSubmit = (e) => {
        e.preventDefault();
        const data = {
          fullname: form.fullname,
          domisili: form.domisili,
          jobdesk: form.jobdesk,
          company: form.company,
          descript: form.descript,
        }
        e.preventDefault();
        console.log(data);
        if (data.fullname || data.domisili || data.jobdesk || data.company || data.descript) {
          axios
            .put(`${process.env.API_BACKEND}users/${id}`, data, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              "Content-Type": "application/json",
            })
            .then((result) => {
              console.log(result);
              Swal.fire({
                icon: "success",
                title: result.data.message,
              });
              window.location.reload()
              fetch();
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "error",
              });
            });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Lengkapi data!!!",
          });
        }
      };
    
      const fetch = async () => {
        const result = await axios.get(`${process.env.API_BACKEND}users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        }
        ); 
        setDetail(result.data.data[0]);
      };
    
      useEffect(() => {
        fetch();
      }, []);

    return (
        <>
         <style jsx>
            {``}
         </style>
         <div className="card">
            <div className="card-body">
                <h3>Data Diri</h3>
                <hr />
                <form className="w-100 form-sign-up" onSubmit={handleProfileSubmit}>
                    <div className="mb-2">
                        <label htmlFor="nama" className="form-label">
                            Nama Lengkap
                        </label>
                        <input 
                        type="text"
                        name="fullname"
                        className="form-control mt-1"
                        id="fullname"
                        placeholder="Masukan nama lengkap" 
                         defaultValue={detail?.fullname}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="jobdesk" className="form-label">
                            Job Desk
                        </label>
                        <input 
                         defaultValue={detail?.jobdesk}
                        type="text"
                        name="jobdesk"
                        className="form-control mt-1"
                        id="jobdesk"
                        placeholder="Masukan job desk" 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="domisili" className="form-label">
                            Domisili
                        </label>
                        <input 
                         defaultValue={detail?.domisili}
                        type="text"
                        name="domisili"
                        className="form-control mt-1"
                        id="domisili"
                        placeholder="Masukan domisili" 
                        onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="company" className="form-label">
                            Tempat Kerja
                        </label>
                        <input 
                         defaultValue={detail?.company}
                        type="text"
                        name="company"
                        className="form-control mt-1"
                        id="company"
                        placeholder="Masukan tempat kerja" 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="descript" className="form-label">
                            Deskripsi Singkat
                        </label>
                        <textarea 
                         defaultValue={detail?.descript}
                        type="text"
                        name="descript"
                        className="form-control mt-1"
                        id="descript"
                        placeholder="Tuliskan Deskripsi Singkat" 
                        onChange={handleChange}
                        />
                    </div>
                    {loading ? (
                      <button className="btn btn-primary btn-w mt-4">
                        <span
                          className="spinner-border text-light spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-w mt-3"
                        onClick={handleProfileSubmit}
                      >
                        Simpan
                      </button>
                    )}
                </form>
            </div>
        </div>
        </>
    );
};

export default Profile;