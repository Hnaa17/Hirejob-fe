import React, {useEffect, Fragment, useState} from "react";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import niall from "../public/ellipse-niall.png";
import harry from "../public/ellipse-harry.png";
import louis from "../public/ellipse-louis.png";
import Link from "next/link";
import axios from "axios";
import defaultPhoto from "../public/default-photo.jpg";


import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

// export async function getStaticProps() {
//     const result = await axios.get(`${process.env.API_BACKEND}users/profile`);
//     console.log(result.data);
//     return {props: { detail: JSON.parse(JSON.stringify(result.data)) }};
// }

const CardHome = ({ data }) => {
    console.log('ini data',data)
    // const newData = Object.entries(data);
    const [detail, setDetail] = useState([])
    const fetch = async() =>{
        const result = await axios.get(`${process.env.API_BACKEND}users/card`)

        setDetail(result.data.data)
    }

    useEffect(() =>{
        fetch()
    }, [])
    return (
        <div>
            <style jsx>
                {`
                    .container-content3 {
                        margin-bottom: 60px;
                        width: 100%;
                        height: 500px;
                        margin-top: 100px;
                    }
                    .container_swiper {
                        width: 100%;
                        height: 100%;
                    }
                    .Card {
                        margin: 35px auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 380px;
                        width: 300px;
                        background: #FFFFF;
                        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
                    }
                    .card-text {
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        text-align: center;
                    }
                    .card-img {
                        margin: 30px auto;
                        background: #FBB0175E;
                        width: 120px;
                        height: 120px;
                        border-radius: 50% !important;
                    }
                    .bg-img {
                        width: 300px;
                        height: 300px;
                    }
                    .img7 {
                        border-radius: 50%;
                        margin-top: 0px !important;
                    }
                `}
            </style>
            <>
            <div className="container-content3">
                <h1 className="text-center">Their opinion about peworld</h1>
                <Swiper
                    className="container container_swiper"
                    modules={[Pagination, Navigation]}
                    spaceBetween={0}
                    // slidesPerView={3}
                    pagination={{clickable: true}}
                    navigation={true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        440: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        991: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {data ?
                    data.map((item, index) => {
                        console.log(item?.fullname)
                        return(
                            <SwiperSlide className="" key={index}>
                                <div className="Card">
                                    <div className="bg-img">
                                        <div className="card-img">
                                            <Image src={defaultPhoto} className="img7" />
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <h3>{item.fullname}</h3>
                                        <span className="fw-bolder text-secondary mb-2">{item.jobdesk}</span>
                                        <p className="w-75 ms-5 mt-2">{item.descript}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }) : 
                    detail.map((item, index) => {
                        console.log(item)
                        return(
                            <SwiperSlide className="" key={index}>
                                <div className="Card">
                                    <div className="bg-img">
                                        <div className="card-img">
                                            <Image src={item.image !== null ? `${item.image}` : defaultPhoto} className="img7"/>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <h3>{item.fullname}</h3>
                                        <span className="fw-light">{item.jobdesk ? `${item.jobdesk}` : `Worker`}</span>
                                        <p className="w-75 ms-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }
                    
                    
                    {/* <SwiperSlide>
                        <div className="Card">
                            <div className="bg-img">
                                <div className="card-img">
                                    <Image src={louis} className="img7"/>
                                </div>
                            </div>
                            <div className="card-text">
                                <h3>Louis Tomlinson</h3>
                                <span className="fw-light">Web Developer</span>
                                <p className="w-75 ms-5">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Card">
                            <div className="bg-img">
                                <div className="card-img">
                                    <Image src={harry} className="img7" />
                                </div>
                            </div>
                            <div className="card-text">
                                <h3>Harry Styles</h3>
                                <span className="fw-light">Web Developer</span>
                                <p className="w-75 ms-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem numquam vero atque, porro aut.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Card">
                            <div className="bg-img">
                                <div className="card-img">
                                    <Image src={niall} className="img7"/>
                                </div>
                            </div>
                            <div className="card-text">
                                <h3>Niall Horan</h3>
                                <span className="fw-light">Web Developer</span>
                                <p className="w-75 ms-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, veniam?</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Card">
                            <div className="bg-img">
                                <div className="card-img">
                                    <Image src={louis} className="img7"/>
                                </div>
                            </div>
                            <div className="card-text">
                                <h3>Louis Tomlinson</h3>
                                <span className="fw-light">Web Developer</span>
                                <p className="w-75 ms-5">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
            </>
        </div>
    );
};

export default CardHome;