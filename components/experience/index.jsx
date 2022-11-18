import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Image from "next/image";
import tokped from "../../public/tokped.png";
import Swal from "sweetalert2";
import axios from "axios";

const Experience = ({ data }) => {
    console.log(data);

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
              .delete(`${process.env.API_BACKEND}experience/${Id}`)
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
            <div className="row ">
                {data.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="col-2 pt-4">
                                <Image
                                src={tokped}
                                layout="responsive"
                                width="1"
                                height="1"
                                alt="experience" 
                                />
                            </div>
                            <div className="col-lg-8 col-7">
                                <h3>{item.position}</h3>
                                <h5>{item.company_name}</h5>
                                <p>{item.work_time}</p>
                                <p>{item.descript}</p>
                            </div>
                            <div className="mb-4 mt-2">
                              <button 
                                  className="btn btn-danger w-50 ms-lg-3"
                                  onClick={() =>{
                                  handleDelete(item.id)
                                  }}
                              >
                                  Delete
                              </button>
                            </div>
                            <hr />

                        </Fragment>
                    )
                })}

                
                {/* <div className="col-2">
                    <Image
                    src={tokped}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt="portofolio" 
                    />
                </div>
                <div className="col-10">
                    <h3>Web Developerr</h3>
                    <h5>Tokopedia</h5>
                    <p>July 2019 - January 2020 6 months</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, suscipit illum ab facere nostrum eius cum exercitationem, ipsam et error repellendus minus tempore eligendi nemo, numquam corrupti corporis.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Experience;