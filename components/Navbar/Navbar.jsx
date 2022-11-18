import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-purple.png";

const Navbar = () => {
    return (
        <Fragment>
            <style jsx>
                {`
                    .photo {
                        position: absolute;
                        width: 127px;
                        left: 150px;
                        top: 15px;
                    }
                    @media screen and (max-width: 610px){
                        .photo{
                            left: 40px;
                        }
                        .auth{
                            display: flex;
                            flex-direction: row;
                            margin-top: 20px;
                            margin-right: 10px !important;
                        }    
                    }
                    .login {
                        color: #5E50A1;
                        border: 2px solid #5E50A1;
                        text-align: center; 
                        background-color: #fff;
                        border-radius: 10px;
                        padding: 10px;
                    }
                    .regis {
                        border-radius: 10px;
                        background-color: #5E50A1;
                        color: white;
                        border: 2px solid #5E50A1;
                        text-align: center;
                        padding: 10px;
                    }
                    .color {
                        color: #5E50A1;
                    }
                    .color:hover{
                        color: #5E50A1;
                    }
                    .nav-space{
                        top: 20px;
                    }
                    .border-none {
                        border: none !important;
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg bg-transparent nav-space">
                <div className="container">
                    <Link className="navbar-brand" href="/home">
                        <div className="photo">
                            <Image src={logo} alt="Logo Navbar"></Image>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex justify-content-end me-2">
                            <div className="navbar-nav ms-auto mb-2 mb-lg-0 auth ">
                                <div className="border-none nav-item mx-3 my-1 ">
                                    <Link href="/login">
                                        <button className="login color nav-link reg me-3 w-100">
                                            Masuk
                                        </button>
                                    </Link>
                                </div>
                                <div className="border-none nav-item mx-1 my-1">
                                    <Link href="/register-worker">
                                        <button 
                                            className="regis nav-link reg me-3 w-100"
                                        >
                                            Daftar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;