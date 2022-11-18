import Head from "next/head";
import React, {useEffect, Fragment, useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import port1 from "../public/port1.png";
import port2 from "../public/port2.png";
import port3 from "../public/port3.png";
import port4 from "../public/port4.png";
import port5 from "../public/port5.png";
import port6 from "../public/port6.png";

const Portofolio = ({ portofolio }) => {
  const handleDelete = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#32C33B",
      confirmButtonText: "Deleted",
    }).then((result) => {
      if (result.isConfirmed) {
        return(axios
          .delete(`${process.env.API_BACKEND}portfolio/${Id}`)
          .then((res) => {
            console.log(res);
            Swal.fire({
              icon: "success",
              title: res.data.message,
              confirmButtonText: "Oke",
            }).then((res) => {
              if (res.isConfirmed) {
                return window.location.reload();
              }
            });
          })
          )
      }
    });
  };

    return (
      <div>
        <div className="row row-cols-2 row-cols-lg-3 align-items-center g-5">
          {portofolio?.map((item, index) => {
            return (
              <div className="col-lg-10 categories border ms-lg-5 mb-1" key={index}>
                <span
                  className="d-flex ms-auto "
                >
                  <h4 className="font-category fw-1 m-auto mt-3">{item.app_name}</h4>
                </span>
                <span>
                <h6 className="font-category m-auto text-secondary">{item.app_type}</h6>
                </span>

                <div className="d-flex justify-content-center mt-2">
                    <a href={item.link_repo} target='_blank' rel="noreferrer" className="btn btn-primary w-50 ">Link Repository</a>

                </div>

                <div className="row">
                {/* {item.image.map((image, index) => {
                  console.log(image)
                  return (
                    <div className="col-5 m-auto mt-5" key={index}> */}
                    <div className="col-5 m-auto mt-3">
                      <Image
                        className="mb-2"
                        src={port1}
                        width="1"
                        height={1}
                        layout="responsive"
                        alt="portofolio"
                      />
                    </div>
              </div>
                <button
                  className="btn btn-danger ms-lg-3 mb-3 mt-2"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            )
          })}
          
        {/* <div className="col categories">
          <div className="card card-2">
            <Image
              src={port2}
              layout="responsive"
              width="1"
              height="1"
              alt="Profile"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>
        <div className="col categories">
          <div className="card card-3">
            <Image
              src={port3}
              layout="responsive"
              width="1"
              height="1"
              alt="Profile"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="card card-3">
            <Image
              src={port4}
              layout="responsive"
              width="1"
              height="1"
              alt="Profile"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="card card-3">
            <Image
              src={port5}
              layout="responsive"
              width="1"
              height="1"
              alt="Profile"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="card card-3">
            <Image
              src={port6}
              layout="responsive"
              width="1"
              height="1"
              alt="Profile"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portofolio;