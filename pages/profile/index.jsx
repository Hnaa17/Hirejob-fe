import React, {Fragment, useEffect, useState} from "react";
import Head from "next/head";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/NavbarHome";
import axios from "axios";
import Experience from "../../components/experience";
import Portofolio from "../../components/portofolio";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import defaultPhoto from "../../public/default-photo.jpg";

export default function Profiles() {
    const id = Cookies.get("id");
    const token = Cookies.get("token");
    const role = Cookies.get("role");
    const [image, setImage] = useState(null);
    const [detail, setDetail] = useState([]);
    const [detil, setDetil] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log("hallo", loading);
    const [portfolio, setPortfolio] = useState([]);
    const [experience, setExperience] = useState([]);
    console.log(portfolio);
    console.log(experience);
    console.log(detail);
    console.log(detil);

    const fetch = async () => {
        const result = await axios.get(
            `${process.env.API_BACKEND}users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        setDetail(result.data.data);
        setLoading(false);
    };

    const fetchSkill = async () => {
        const result = await axios.get(
            `${process.env.API_BACKEND}skills`
        );
        setDetil(result.data.data);
        setLoading(false);
    };

    const fetchPort = async () => {
        const result = await axios.get(`${process.env.API_BACKEND}portfolio`);

        setPortfolio(result.data.data);
    }

    const fetchExp = async () => {
        const result = await axios.get(
          `${process.env.API_BACKEND}experience`);
    
        setExperience(result.data.data);
    };

    const imageChangeHandler = (e) => {
        setImage(e.target.files);
        console.log(e.target.files);
    };

    const onSubmitImage = () => {
        document.getElementById("close").click();
        setLoading(true)
        const formData = new FormData();
        formData.append("image", image);
        axios
          .put(
            `${process.env.API_BACKEND}users/photo/${id}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              "Content-Type": "multipart/form-data",
            }
          )
          .then((res) => {
            console.log(res);
            Swal.fire({
              icon: "success",
              title: res.data.message,
              confirmButtonText: "Oke",
            }).then((res) => {
              if (res.isConfirmed) {
              
              }
            });
            fetch();
          });
        // }
      };

      useEffect(() => {
        fetch();
        fetchPort();
        fetchExp();
      }, []);

    return (
        <div>
            <style jsx>
                {`
                    .btn-custom {
                        width: 100%;
                        height: 50px;
                        background: #5E50A1;
                        color: #fff;
                        border-radius: none;
                    }
                    .position {
                        color: white;
                        border: 1px solid rgba(251, 176, 23, 1);
                        border-radius: 7px;
                        margin: 7px;
                        padding: 10px;
                    }
                    .example {
                        display: flex;
                    }
                `}
            </style>
            <Head>
                <title>Profile</title>
            </Head>
            <Fragment>
                <Navbar />
                <div className="container">
                {/* <Profile detail={detail} /> */}

                    {/* {state.map((e) => ( */}
                        {/* <div key={e.id} className="row mt-5 justify-content-center"> */}
                        <div className="row mt-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <div
                                        className="edit-icon"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editPhoto"
                                    >
                                        {loading ? (
                                        <div className="p-3 ms-5">
                                            <div className="spinner-grow" role="status">
                                                <span className="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <Image
                                            src={ defaultPhoto
                                                // detail?.image ?
                                                // `http://${detail?.image}` : defaultPhoto
                                            }
                                            layout="responsive"
                                            width='1'
                                            height='1'
                                            alt="Photo Profile"
                                        />
                                    )}
                                    </div>
                                    
                                    <div 
                                      className="modal fade"
                                      id="editPhoto"
                                      tabIndex="-1"
                                      aria-labelledby="editPhotoLabel"
                                      aria-hidden="true"
                                    >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="editPhotoLabel">
                                                        Change Photo Profile
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    />
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <input
                                                        type="file"
                                                        className="form-control"
                                                        onChange={imageChangeHandler}
                                                        />
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        id="close"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={onSubmitImage}
                                                        className="btn bg-primary text-white"
                                                    >
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <h3 className="mt-4">{e.fullname}</h3>
                                    <h5 className="mt-3">{e.jobdesk}</h5>
                                    <p className="mt-3">{e.domisili}</p>
                                    <p>{e.company}</p> */}
                                    <h3 className="mt-4">{detail?.fullname}</h3>
                                    <h5 className="mt-3">{detail?.jobdesk ? detail?.jobdesk : ''}</h5>
                                    <p className="mt-3">{detail?.domisili ? detail?.domisili : `Indonesia`}</p>
                                    <p>{detail?.company ? detail?.company : ''}</p>
                                    <p className="mt-4">
                                        {detail?.descript ? detail?.descript : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis neque sequi, ea inventore harum, doloribus quo, veritatis voluptatibus maxime impedit dicta voluptatem minus est nostrum.'}
                                    </p>
                                    <Link href="/edit-profile">
                                        <button className="btn-custom">
                                        Edit Profile
                                        </button>
                                    </Link>

                                    <p className="fw-1 fs-3 fw-bold mt-5">Skill</p>

                                    <div className="container text-center">
                                        <div className="row gy-2">
                                            <div className="col-4">
                                                <div className="">
                                                    <div className="example">
                                                        <button className="btn position bg-warning me-1 mt-2">
                                                            JavaScript
                                                        </button>
                                                        <button className="btn position bg-warning me-1 mt-2">
                                                            Laravel
                                                        </button>
                                                        <button className="btn position bg-warning me-1 mt-2">
                                                            Phyton
                                                        </button>
                                                    </div>
                                                    <div className="example">
                                                        <button className="btn position bg-warning me-1 mt-2">
                                                            HTML
                                                        </button>
                                                        <button className="btn position bg-warning me-1 mt-2">
                                                            CSS
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="d-flex flex-column mt-5">
                                        <div className="mb-3"><i className="bi-envelope" />  youremailaccount@gmail.com</div>
                                        <div className="mb-3"><i className="bi-instagram" />  YourinstagramAccount</div>
                                        <div className="mb-3"><i className="bi-github" />  YourgithubAccount</div>
                                        <div className="mb-3"><i className="bi-linkedin" />  YourLinkedInAccount</div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="main">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button
                                                    className="nav-link active"
                                                    id="nav-home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-home"
                                                    aria-selected="true"
                                                >
                                                    Portofolio
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="nav-profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-profile"
                                                    aria-selected="false"
                                                >
                                                    Pengalaman Kerja
                                                </button>
                                            </div>
                                        </nav>
                                        <div className="tab-content mt-5" id="nav-tabContent">
                                            <div 
                                                className="tab-pane fade show active"
                                                id="nav-home"
                                                role="tabpanel"
                                                aria-labelledby="nav-home-tab"
                                                tabIndex="0"
                                            >
                                                <Portofolio portofolio={portfolio}/>
                                            </div>
                                            <div className="tab-pane fade"
                                            id="nav-profile"
                                            role="tabpanel"
                                            aria-labelledby="nav-profile-tab"
                                            tabIndex="0">
                                                <Experience data={experience}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
              <Footer />
            </Fragment>
        </div>
    );
};