import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-purple.png";
import Cookies from "js-cookie";
import useRouter from "next/router";
import axios from "axios";

export async function IsLogin() {
    useEffect(() => {
        datas();
    }, []);

    const datas = async() => {
        const token = Cookies.get('token');
        const response = await axios
        .get(`http://localhost:8001/users/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data.fullname)
    }

    const router = useRouter();
    const handleSignOut = () => {
        Cookies.remove('token', {path: '/'});
        Cookies.remove('id', {path: '/'});
        Cookies.remove('refreshToken', {path: '/'});
        Swal.fire({
            icon: "success",
            title: `Good Bye!!`,
        });
        router.push("/");
    }

    const posts = await response.json();
    return {
        props: {
            posts: posts.data
        }
    }
}

const Navbar = (props) => {
    console.log(props);
    return (
        <>
            <style jsx>
                {`
                    .border-none {
                        border: none !important;
                    }
                    .photo {
                        position: absolute;
                        width: 130px;
                        top: 12px;
                    }
                    @media screen and (max-width: 610px){
                        .photo{
                            left: 10px;
                            top: 7px;
                        }
                        .auth{
                            display: flex;
                            flex-direction: row;
                            margin-right: 32px !important;
                            margin-top: 10px;
                        }
                    }
                    .login {
                        position: relative;
                        color: black;
                        border: none;
                        left: 220px;
                        text-align: center;
                        font-size: 18px;
                    }
                    .nav-space{
                        top: 10px;
                    }
                    .profile {
                        border-radius: 10px;
                        background-color: #5E50A1;
                        color: white;
                        border: 2px solid #5E50A1;
                        text-align: center;
                        padding: 10px;
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg bg-white nav-space">
                <div className="container">
                    <Link href='/landing-page'>
                        <a className="navbar-brand ms-5 photo" href="#">
                            <Image src={logo} alt='logo'></Image>
                        </a>
                    </Link>
                    <div className="border-none nav-item mx-3 my-1">
                        <Link href="/home">
                            <button className="login btn nav-link reg me-2 w-100 p-1">
                                Home
                            </button>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="d-flex justify-content-end me-2">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 auth">
                                <li className="border-none nav-item mx-3 my-1">
                                    <Link href="/profile">
                                        <button className="profile nav-link reg me-2 w-100">Profile</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;