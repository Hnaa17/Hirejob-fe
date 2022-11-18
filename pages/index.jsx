import React, {useEffect, Fragment} from "react";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Navbar from "../components/Navbar/Navbar";
import niall from "../public/ellipse-niall.png";
import harry from "../public/ellipse-harry.png";
import louis from "../public/ellipse-louis.png";
import CardHome from "../components/CardHome";
import axios from "axios";

export async function getStaticProps() {
    const result = await axios.get(`${process.env.API_BACKEND}users/card`);
    console.log(result.data);
    return {props: { detail: JSON.parse(JSON.stringify(result.data.data)) }};
}

export default function Home({ detail }) {
    console.log(detail);
    return (
        <div>
            <style jsx>
                {`
                    .contain-text {
                        margin: auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .space-content {
                        margin-top: 80px;
                    }
                    .contain-first-text {
                        margin-top: 70px;
                        margin-left: 30px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .title {
                        width: 510px;
                        height: 200px;
                        font-weight: 600;
                        font-size: 44px;
                        color: #1F2A36;
                    }
                    .btn-custom {
                        background: #5E50A1;
                        width: 35%;
                        color: white;
                        margin-left: -280px;
                        margin-top: 30px;
                    }
                    .ul li {
                        list-style: none;
                        margin-bottom: 10px;
                    }
                    .daftar {
                        margin-left: -300px;
                    }
                    .daftar li span {
                        margin-left: 10px;
                    }
                    .bi-check-circle-fill {
                        color: #5E50A1 !important;
                    }
                    .text-color {
                        color: #FBB017 !important;
                    }
                    .list-skill {
                        margin-left: -30px !important;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        row-gap: 1rem;
                    }
                    .contain-text2 {
                        margin: auto;
                        display: flex;
                        flex-direction: column;
                        margin-left: 60px;
                        align-items: start !important;

                    }
                    .container_swiper {
                        width: 100%;
                        height: 100%;
                    }
                    .container-content3 {
                        margin-bottom: 60px;
                        width: 100%;
                        height: 500px;
                        margin-top: 100px;
                    }
                    .Card {
                        margin: 40px auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        height: 400px;
                        width: 300px;
                        background: #FFFFF;
                        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
                    }
                    .bg-img {
                        width: 300px;
                        height: 300px;
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
                    .img7 {
                        border-radius: 50%;
                        margin-top: 0px !important;
                    }
                    .btn3 {
                        color: #5E50A1;
                    }
                    .container-img4 {
                        display: grid;
                        grid-template-columns: 45% 55%;
                        align-items: center;
                        justify-content: end;
                        width: 100%;
                        height: 290px;
                        border-radius: 30px 0px 30px 0px;
                        background-color: #5e50a1;
                        margin-top: 120px;
                    }
                    .bold {
                        font-weight: bolder;
                    }
                    .container-skill {
                        margin-top: 40px;
                        margin-left: 40px;
                    }
                `}
            </style>
            <Head>
                <title>Landing Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Fragment>
                <Navbar />
                <div className="container">
                    <div className="row space-content justify-content-center">
                        <div className="col-6">
                            <div className="contain-first-text">
                                <p className="title">Talenta terbaik negeri untuk perubahan revolusi 4.0</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci asperiores, voluptates recusandae voluptatibus labore.</p>
                                <button className="btn btn-custom me-5">Mulai dari sekarang</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <Image 
                                src='/landing1.png'
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-6">
                            <Image
                                src='/landing2.png'
                                alt="Picture of the author" 
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="col-6 mt-5">
                            <div className="contain-text mt-3">
                                <h1>Kenapa harus mencari tallent di peworld</h1>
                                <ul className="daftar me-5">
                                    <div className="mt-4"><i className="bi bi-check-circle-fill" /><span> Lorem ipsum dolor sit amet.</span> </div>
                                    <div className="mt-4"><i className="bi bi-check-circle-fill" /><span> Lorem ipsum dolor sit amet.</span> </div>
                                    <div className="mt-4"><i className="bi bi-check-circle-fill" /><span> Lorem ipsum dolor sit amet.</span> </div>
                                    <div className="mt-4"><i className="bi bi-check-circle-fill" /><span> Lorem ipsum dolor sit amet.</span> </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-6">
                            <div className="contain-text2 mt-5">
                                <h1 className="mt-3">Skill Tallent</h1>
                                <span className="fw-light mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione unde sint aliquid, dolorum voluptatem animi sapiente culpa?.</span>
                                <div className="container-skill">
                                    <ul className="list-skill">
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> Java</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> Kotlin</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> PHP</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> JavaScript</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> Golang</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> C++</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> Ruby</span></div>
                                        <div><i className="bi bi-check-circle-fill text-color" /><span> 10+ Bahasa lainnya</span></div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <Image 
                                src='/landing3.png'
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    <CardHome data={detail} />

                    <div className="container-content4 my-5">
                        <div className="container-img4">
                            <div>
                                <p className="text-white w-50 ms-5 fs-2 bold">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="d-flex justify-content-end me-5">
                                <button className="btn bg-white py-2 fs-5 btn3 bold">Mulai Dari Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        </div>
    );
};