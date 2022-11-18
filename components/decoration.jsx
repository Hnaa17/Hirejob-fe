import React, { Fragment } from "react";
import Image from "next/image";

const Decoration = () => {
    return (
        <Fragment>
            <style jsx>
                {`
                    .body {
                        width: 50vw;
                        max-height: 100vh;
                    }
                    @media screen and (max-width: 1000px) {
                        .body {
                          display: none;
                        }
                    }
                    .content {
                        top: 5vh;
                        left: 15vh;
                        height: 90vh;
                        width: 40vw;
                        position: relative;
                    }
                    .content::after {
                        content: '';
                        width: 40vw;
                        height: 90vh;
                        top: 0px;
                        left: 0px;
                        bottom: 0px;
                        right: 0px;
                        background-color: rgba(94, 80, 161, 0.7);
                        position: absolute;
                    }
                    .logo {
                        left: 3vw;
                        width: 7vw;
                        height: 2vw;
                        z-index: 99;
                        position: absolute;
                        top: 3vh;
                    }
                    .text {
                        position: absolute;
                        z-index: 99;
                        color: white;
                        font-size: 30px;
                        font-weight: bold;
                        letter-spacing: 1px;
                        width: 23vw;
                        left: 10vh;
                        top: 30vh;
                    }
                `}
            </style>
            
            <div className="body">
                <div className="content">
                    <Image src='/pic-lan1.png' layout='fill' />
                    <div className="logo">
                        <Image src='/logo-white.png' layout='fill' />
                    </div>
                    <span className="text">
                        Temukan developer berbakat & terbaik di berbagai bidang keahlian
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

export default Decoration;