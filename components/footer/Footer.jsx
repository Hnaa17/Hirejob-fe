import Image from "next/image";
import React, { Fragment } from "react";
import logo from "../../public/logo-white.png";

const Footer = () => {
    return (
        <Fragment>
            <style jsx>
                {`
                    .main {
                        margin-top: 25px;
                        height: 300px;
                        background-color: #5e50a1;
                        color: white;
                        width: 100%;
                    }
                    .content {
                        width: 87%;
                        position: absolute;
                        margin-top: 20px;
                    }
                    .contentTop {
                        margin-left: 33px;
                        margin-top: 15px;
                    }
                    .photo {
                        position: relative;
                        width: 150px;
                        height: 40px;
                    }
                    .text {
                        padding-top: 20px;
                        display: flex;
                        width: 330px;
                    }
                    .line {
                        margin-left: 30px;
                        width: 90%;
                        height: 50px;
                        border-bottom: 2px solid white;
                    }
                    .buttomContent {
                        display: flex;
                        width: 90%;
                        justify-content: between;
                        margin-top: 20px;
                        margin-left: 30px;
                    }
                    .text1 {
                        width: 80%;
                    }
                    .text2 {
                        width: 7%;
                    }
                    .blank {
                        width: 10%;
                    }
                    @media screen and (max-width: 610px){
                        .photo{
                            width: 120px;
                            height: 30px;
                        }
                        .content {
                            margin-top: 10px;
                        }
                        .text {
                            width: 300px;
                        }
                        .line {
                            height: 40px;
                        }
                        .buttomContent {
                            flex-direction: column-reverse;
                            margin-top: 10px;
                        }
                        .text1 {
                            margin-left: 35px;
                            margin-top: 5px;
                        }
                        .text2 {
                            margin-left: 120px;
                            margin-right: 7px;
                            text-align: center;
                        }
                        .blank {
                            margin-right: 7px;
                            text-align: center;
                        }
                        .text3 {
                            margin-right: 7px;
                            text-align: center;
                        }
                    }
                `}
            </style>
            <div className="main">
                <div className="container">
                    <div className="content">
                        <div className="contentTop">
                            <div className="photo">
                                <Image src={logo} />
                            </div>
                            <span className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut sunt at perspiciatis, modi ratione.
                            </span>
                        </div>
                        <div className="line"></div>
                        <div className="buttomContent">
                            <div className="text1">2020 Pewworld. All right reserved</div>
                            <div className="text2">Telepon</div>
                            <div className="blank"></div>
                            <div className="text3">Email</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;