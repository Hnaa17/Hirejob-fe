import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Navbar from "../../components/Navbar/NavbarHome";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useParams } from "react-router-dom";
import upload from "../../public/upload.png";
import profile from "../../public/louis.png";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Experience from "../../components/edit/experience";
import Cookies from "js-cookie";
import { Form } from "react-bootstrap";
import Link from "next/link";
import Layout from "../../components/layout";
import Portfolio from "../../components/edit/portfolio";
import Skills from "../../components/edit/skills";
import Profile from "../../components/edit/profile";
import defaultPhoto from "../../public/default-photo.jpg";
import edit from "../../public/edit.svg";
import location from "../../public/location.svg";

const EditProfile = () => {
  const router = useRouter();
  const id = Cookies.get("id");
  const token = Cookies.get("token");

  const [data, setData] = useState([]);
  const [saveImage, setSaveImage] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleUpload(e) {
      console.log(e.target.files[0]);
      const uploader = e.target.files[0];
      setSaveImage(uploader);
    }

    const [form, setForm] = useState({
      fullname: "",
      jobdesk: "",
      domisili: "",
      company: "",
      descript: "",
    });

    const [formImage, setFormImage] = useState({
      image: "",
    })
  
    const handleChange = (e) => {
      e.preventDefault();
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleImageSubmit = (e) => {
      const formData = new FormData();
      setLoading(true);
      formData.append("image", saveImage);
      e.preventDefault();
      axios
        .put(process.env.API_BACKEND + "users/photo/" + id, formData, {
          headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         },
        })
        .then((res) => {
          setLoading(false);
          Swal.fire({
            text: res.data.message,
            icon: "success",
          });
          profileUser();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    const profileUser = () => {
      axios
        .get(process.env.API_BACKEND + "users/" + id)
        .then((res) => {
          setData(res.data.data);
          setForm(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      profileUser();
    }, []);


    return (
        <Fragment>
            <style jsx>
                {` `}
            </style>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <Layout>
                <div className="container">
                    <div className="row mt-3 justify-content-center">

                        <div className="col-lg-12 col-md-12 col-sm-7 col-xl-4 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <div
                                      className="edit-icon d-flex justify-content-center"
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editPhoto"
                                    >
                                      {/* {!data.image ? ( */}
                                        <Image
                                          src={defaultPhoto}
                                          width="100px"
                                          height="100px"
                                          alt="avatar"
                                          style={{ borderRadius: "15px" }}
                                        />
                                      {/* ) : (
                                        <Image
                                          src={data.image}
                                          width="100px"
                                          height="100px"
                                          alt="avatar"
                                          style={{ borderRadius: "15px" }}
                                        />
                                      )} */}
                                        {/* {loading ? (
                                            <div className="p-3">
                                            <div className="spinner-grow" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            </div>
                                        ) : (
                                            <Image
                                            src={
                                                detail.image
                                                ? detail.image
                                                : profile
                                            }
                                            className={``}
                                            layout="responsive"
                                            width="1"
                                            height="1"
                                            alt="Photo Profile"
                                            />
                                        )} */}
                                    </div>
                                    <div className="d-flex justify-content-center mb-3">
                                      <Image src={edit} alt="edit" />
                                      <input
                                        type="file"
                                        name="image"
                                        onChange={handleUpload}
                                        id="formFile"
                                        style={{ display: "none" }}
                                      />
                                      <label htmlFor="formFile">
                                        <h4 className="ms-2 text-secondary">Edit</h4>
                                      </label>
                                    </div>

                                    <h3>{data.fullname}</h3>
                                    <h5>
                                      {data.jobdesk ? (
                                        data.jobdesk
                                      ) : (
                                        <span className="text-secondary">Jobs</span>
                                      )}
                                    </h5>
                                    <div className="d-flex mb-2">
                                      <Image src={location} alt="location" />
                                      <span className="ms-2">{data.domisili}</span>
                                    </div>
                                    <p>{data.company}</p>
                                    <p>{data.descript}</p>
                                </div>
                                <Link href={`/home/${id}`}>
                                  <button className="btn btn-warning btn-w mt-2">Detail</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-7 col-xl-8 g-sm-5 g-lg-0 mb-5">
                        <section>
                          <Profile id={id}/>
                        </section>
                        <section>
                          <Skills />
                        </section>
                        <section>
                          <Experience />
                        </section>
                        <section>
                          <Portfolio />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    </Fragment>
  );
};

export default EditProfile;






