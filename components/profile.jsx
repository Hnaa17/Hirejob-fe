import Head from "next/head";
import React, {Fragment, useEffect, useState} from "react";
import Footer from "./footer/Footer";
import Image from "next/image";
import Portofolio from "./portofolio";
import Experience from "./experience";
import axios from "axios";
import defaultPhoto from "../public/default-photo.jpg";
import Layout from "./layout";


const Profile = ({ detail }) => {
    console.log(detail)
    return (
        <div>
            <style global jsx>
            {`
                .btn-custom {
                    width: 100%;
                    height: 50px;
                    background: #5E50A1;
                    color: #fff;
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
                <div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-5 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <Image
                                        src={defaultPhoto}
                                        layout="responsive"
                                        width='1'
                                        height='1'
                                        alt="Photo Profile"
                                    />
                                    <h3 className="mt-4">{detail.fullname}</h3>
                                    <h5 className="mt-3">{detail.jobdesk}</h5>
                                    <p className="mt-3">{detail.domisili}</p>
                                    <p>{detail.company}</p>
                                    <p className="mt-4">
                                        {detail.descript ? detail.descript : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis neque sequi, ea inventore harum, doloribus quo, veritatis voluptatibus maxime impedit dicta voluptatem minus est nostrum.`}
                                    </p>
                                    <button className="btn-custom mt-4">Hire</button>

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
                                        <div className="mb-3"><i className="bi-envelope" />  emailaccount@gmail.com</div>
                                        <div className="mb-3"><i className="bi-instagram" />  InstagramAccount</div>
                                        <div className="mb-3"><i className="bi-github" />  GitHubAccount</div>
                                        <div className="mb-3"><i className="bi-linkedin" />  LinkedInAccount</div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Profile;