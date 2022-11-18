import React, { Fragment, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Decoration from "../../components/decoration";
import Swal from "sweetalert2";
import Link from "next/link";

const WorkerRegister = () => {
    const router = useRouter();
    // const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
    });

    const [status, setStatus] = useState("")

    async function registerHendler(e) {
        e.preventDefault();

        setStatus('loading');

        const registerReq = await fetch(`${process.env.API_BACKEND}auth/register-worker`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        });

        if(!registerReq.ok){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Data yang kamu inputkan salah",
            });
            return setStatus(registerReq.status);
        }

        const registerRes = await registerReq.json();
        Swal.fire({
            icon: "success",
            title: "Selamat kamu berhasil buat akun",
            text: `Silakan Login!!`,
          });
          router.push("/login");

        console.log(registerRes);
    }

    function formHendler(e) {
        const name = e.target.getAttribute('name');

        setForm({
            ...form,
            [name]: e.target.value
        })
    }
    
    return (
        <Fragment>
            <style jsx>
                {`
                    .body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 120vh;
                        display: flex;
                    }
                    .content {
                        width: 40vw;
                        min-height: 120vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 5vh;
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
                `}
            </style>
            <Head>
                <title>Register as Worker</title>
            </Head>
            <div className="body">
                <Decoration />
                <div className="content">
                <div className="form">
                        <div className="greeting mb-3">Halo, Pewpeople</div>
                        <div className="sebGreeting">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure aut voluptas, unde voluptates sit voluptatibus magnam.
                        </div>
                        {/* <form onSubmit={(e) => onSubmit(e)}> */}
                        <form onSubmit={registerHendler.bind(this)}>
                            <div className="mt-4">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group text-muted">
                                            <label className="mb-1" htmlFor="name">Nama</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='name'
                                                name="fullname"
                                                placeholder='Masukan nama panjang'
                                                onChange={formHendler.bind(this)} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group text-muted">
                                            <label className="mb-1" htmlFor="email">Email</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='email'
                                                    name="email"
                                                    placeholder='Masukan alamat email'
                                                    onChange={formHendler.bind(this)} 
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group text-muted">
                                            <label className="mb-1" htmlFor="phone">No handphone</label>
                                                <input
                                                    type='phone'
                                                    className='form-control'
                                                    id='phone'
                                                    name="phone"
                                                    placeholder='Masukan no handphone'
                                                    onChange={formHendler.bind(this)} 
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group text-muted">
                                            <label className="mb-1" htmlFor="password">Kata Sandi</label>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    id='password'
                                                    name="password"
                                                    placeholder='Masukan kata sandi'
                                                    onChange={formHendler.bind(this)} 
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group text-muted">
                                            <label className="mb-1" htmlFor="confirmPassword">Konfirmasi kata sandi</label>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    id='confirmPassword'
                                                    name="confirmPassword"
                                                    placeholder='Masukan konfirmasi kata sandi'
                                                    onChange={formHendler.bind(this)} 
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-12 flex-column justify-content-center align-content-center mt-4">
                                        {/* {loading ? (
                                            <Link href="/login-worker">
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
                                            </Link>
                                        ) : (
                                            <Link href="/login-worker"> */}
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning col-12 text-white">
                                                        Daftar
                                                </button>
                                            {/* </Link>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <span className="text-black">
                                    Sudah punya akun?
                                </span>
                                <Link className="text-link" href='/login'>
                                    Masuk disini
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <span className="text-black">Belum punya akun perekrut?</span>
                                <Link className="text-link" href='/register-recruiter'>
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

export default WorkerRegister;