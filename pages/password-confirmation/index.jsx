import Head from "next/head";
import React, { Fragment, useState } from "react";
import Decoration from "../../components/decoration";
import Link from "next/link";

const PasswordConfirmation = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        password: '',
        confirmPassword: '',
    });
    const onSubmit = (e) => {};
    return (
        <Fragment>
            <style jsx>
                {`
                    .body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 80vh;
                        display: flex;
                    }
                    .content {
                        width: 40vw;
                        min-height: 80vh;
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
                `}
            </style>
            <Head>
                <title>Confirmation Password</title>
            </Head>
            <div className="body">
                <Decoration />
                <div className="content">
                    <div className="form">
                        <div className="greeting mb-2">Reset password</div>
                        <div className="sebGreeting">
                            You need to change your password to activate your account
                        </div>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mt-5">
                                <div className="row d-flex">
                                    
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group text-muted">
                                            <label htmlFor="password">Kata Sandi</label>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    id='password'
                                                    placeholder='Masukan kata sandi'
                                                    onChange={(e) =>
                                                        setForm({...form, password: e.target.value})
                                                    } 
                                                />
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-5">
                                        <div className="form-group text-muted">
                                            <label className="mb-1" htmlFor="confirmPassword">Confirmation new password</label>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    id='confirmPassword'
                                                    placeholder='Masukan konfirmasi kata sandi'
                                                    onChange={(e) =>
                                                        setForm({...form, confirmPassword: e.target.value})
                                                    } 
                                                />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12 flex-column justify-content-center align-content-center mt-2">
                                        {loading ? (
                                            <button 
                                                type="submit"
                                                className="btn btn-warning col-12 text-white"
                                                disabled>
                                                <span 
                                                    className="spinner-border spinner-border-sm"
                                                    role='status'
                                                    aria-hidden='true'
                                                />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="btn btn-warning col-12 text-white">
                                                    Reset password
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PasswordConfirmation;