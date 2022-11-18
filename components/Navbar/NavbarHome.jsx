import React from "react";
import logo from "../../public/logo-purple.png";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.png";
import mail from "../../public/mail.png";
import bell from "../../public/bell.png";
import { Dropdown, DropdownButton} from "react-bootstrap";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Navbar = () => {
    const router = useRouter();
    const [profile, setProfile] = useState([])
    console.log(profile.image)
    const role = Cookies.get('role');
    console.log(role)
    const token = Cookies.get('token')
    const handleSignOut = () =>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#32C33B",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("token")
                Cookies.remove("refreshToken")
                Cookies.remove("id");
                Cookies.remove("role");
                router.push('/')
            }
        });
    }

    const fetch = async() =>{
        axios.get(`${process.env.API_BACKEND}users/profile`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res =>{
            console.log(res)
            setProfile(res.data.data[0])
        })

    }
    // const fetchRecruiter = async() =>{
    //     axios.get(`${process.env.API_BACKEND}authRecruiter/profile`, {
    //         headers:{
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(res =>{
    //         console.log(res)
    //         setProfile(res.data.data[0])
    //     })

    // }

    useEffect(() =>{
        fetch()
    },[])

    // async function handleSignOut(e) {

    //     e.preventDefault();

    //     const logoutReq = await fetch('http://localhost:8001/auth/login', {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //     });

    //     const logoutRes = await logoutReq.json();
    //     Swal.fire({
    //         icon: "success",
    //         title: "Selamat kamu berhasil logout",
    //       });
    //     Cookies.remove('token', logoutRes.data.token);
    //     Cookies.remove('id', logoutRes.data.id);
    //     Cookies.remove('refreshToken', logoutRes.data.refreshToken);
    //     Swal.fire({
    //         icon: "success",
    //         title: `Good Bye!!`,
    //     });
    //     router.push("/");
    // }
    return (
        <>
            <style jsx>
                {`
                    .photo {
                        position: absolute;
                        width: 127px;
                        left: 150px;
                        top: 15px;
                    }
                    @media screen and (max-width: 610px){
                        .photo {
                            left: 30px;
                        }
                        .auth {
                            display: flex;
                            flex-direction: row;
                            margin-top: 20px;
                            margin-right: 5px !important;
                        }
                    }
                    .border_none{
                        border: none !important;
                    }
                    .icon-profile{
                        width: 0px ;
                    }
                    .position {
                        margin-right: 30px;
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <Link href='/landing-page'>
                        <a className="navbar-brand ms-5" href="">
                            <div className="photo">
                                <Image src={logo}></Image>
                            </div>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-end position navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-end me-3">
                            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 auth`}>
                                <li className={`border_none nav-item mx-3 my-2`}>
                                    <Image 
                                        className="icon-profile"
                                        src={bell}
                                    />
                                </li>
                                <li className={`border_none nav-item mx-3 my-2`}>
                                    <Image 
                                        className="icon-profile"
                                        src={mail}
                                    />
                                </li>
                                </ul>
                                {/* <DropdownButton 
                                align="end"
                                title={
                                    <image 
                                    src={profile}
                                    className="icon-profile"
                                    width={35}
                                    height={35}
                                    />
                                }
                                /> */}
                                {/* { props.posts.foreach(post => {
                                    return ( */}
                                        {/* <li className={`nav-item mx-1 my-1`}> */}

                                    <DropdownButton
                                    title={
                                        <Image 
                                        className="icon-profile"
                                        src={profile}
                                        width={22}
                                        height={22}
                                        />
                                    }
                                    variant="link"
                                    id="dropdown-menu-align-start"
                                    >
                                        <Dropdown.Item>
                                            {" "}
                                            <p className="text-center m-auto">Hello</p>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item variant="secondary" eventKey="4">
                                            {/* {" "} */}
                                            <Link to="/profile" href="/profile">
                                            <p className=" text-center m-auto">
                                            Profile
                                            </p>
                                            </Link>
                                            
                                            {/* <p className="text-center m-auto">Profile</p> */}
                                        </Dropdown.Item>
                                        
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4" variant="danger">
                                            <form 
                                            onClick={handleSignOut}
                                            className=" text-center m-auto">
                                            Logout
                                            </form>
                                        </Dropdown.Item>
                                    </DropdownButton>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;