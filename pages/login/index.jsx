import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Decoration from "../../components/decoration";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../configs/redux/actions/authActions";
import Router, { useRouter } from "next/router";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { setCookie } from "nookies";
import cookies from "next-cookies";

const WorkerLogin = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [status, setStatus] = useState("");

    async function loginHendler(e) {
        e.preventDefault();
        setStatus('loading');
        const loginReq = await fetch(`http://localhost:8001/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(form),
        });

        if(!loginReq.ok) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Data yang kamu inputkan salah",
            });
            return setStatus(loginReq.status);
        }

        const loginRes = await loginReq.json();
        Cookies.set('token', loginRes.data.token);
        Cookies.set('id', loginRes.data.id);
        Cookies.set('role', loginRes.data.role);
        Cookies.set('refreshToken', loginRes.data.refreshToken);
        
        //   Cookies.set('token', loginRes.data.data.token);
        //   Cookies.set('id', loginRes.data.data.id);
        //   Cookies.set('refreshToken', loginRes.data.data.refreshToken);
          console.log(loginRes.data);
        Swal.fire({
        icon: "success",
        title: "Selamat kamu berhasil login",
        });
        router.push("/landing-page");
    }
    

    function formHendler(e) {
        const name = e.target.getAttribute('name');
        setForm({
            ...form,
            [name]: e.target.value
        });
    }

    return (
        <Fragment>
            <style jsx>
                {`
                    .body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 90vh;
                        display: flex;
                    }
                    .content {
                        width: 40vw;
                        min-height: 90vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 5vh;
                    }
                    @media screen and (max-width: 1000px) {
                        .content {
                            width: 100%;
                            min-height: 90vh;
                            align-items: center; 
                            justify-content: start;
                        }
                        .body {
                            width: 100%;
                            height: 120vh;
                            display: flex;
                            flex-direction: column;
                            align-items: center; 
                            justify-content: start;
                        }
                        .form {
                            width: 0vw;
                        }
                    }
                    .posisi {
                        text-align: right;
                    }
                    .form {
                        width: 40vw;
                    }
                    .greeting {
                        color: black;
                        font-size: 25px;
                        font-weight: bolder;
                    }
                    .subGreeting {
                        color: rgba(70, 80, 92, 1);
                        font-size: 18px;
                    }
                    .text-link {
                        text-decoration: none;
                        color: #FBB017;
                        margin-left: 3px;
                    }
                    .forgotps {
                        text-decoration: none;
                        color: #1F2A36;
                    }
                `}
            </style>
            <Head>
                <title>Login | Hire Job</title>
            </Head>
            <div className="body">
                <Decoration />
                <div className="content">
                    <div className="form">
                        <div className="greeting mb-3">Halo, Pewpeople</div>
                        <div className="sebGreeting">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure aut voluptas, unde voluptates sit voluptatibus magnam.
                        </div>
                        <form onSubmit={loginHendler.bind(this)}>
                            <div className="mt-4">
                                <div className="row d-flex">
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group text-muted">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type='email'
                                                name="email"
                                                className='form-control'
                                                id='email'
                                                placeholder='Masukan alamat email'
                                                // value={data.email}
                                                onChange={formHendler.bind(this)} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group text-muted">
                                            <label htmlFor="password">Kata Sandi</label>
                                                <input
                                                    type='password'
                                                    name="password"
                                                    className='form-control'
                                                    id='password'
                                                    placeholder='Masukan kata sandi'
                                                    // value={data.password}
                                                    onChange={formHendler.bind(this)} 
                                                />
                                        </div>
                                    </div>
                                    <div className="posisi mb-4">
                                        <Link className="forgotps" href='/forgot-password'>
                                            Lupa kata sandi?
                                        </Link>
                                    </div>
                                    <div className="col-md-12 flex-column justify-content-center align-content-center">
                                        {/* {loading ? (
                                            <button 
                                            type="submit"
                                            className="btn btn-warning col-12 text-white"
                                            disabled>
                                            <span 
                                                className="spinner-border spinner-border-sm"
                                                role='worker'
                                                aria-hidden='true'
                                            />
                                            </button>
                                        ) : ( */}
                                            <button
                                                type="submit"
                                                className="btn btn-warning col-12 text-white">
                                                    Masuk
                                            </button>
                                        {/* )} */}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <span className="text-black">
                                    Belum punya akun?    
                                </span>
                                <Link className="text-link" href='/register-worker'>
                                     Daftar disini
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default WorkerLogin;