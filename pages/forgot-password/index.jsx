import Head from "next/head";
import React, { Fragment, useState } from "react";
import Decoration from "../../components/decoration";
import Link from "next/link";

const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
    return (
        <Fragment>
            <style jsx>
                {`
                    .body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 70vh;
                        display: flex;
                    }
                    .content {
                        width: 40vw;
                        min-height: 70vh;
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
                <title>Reset Password</title>
            </Head>
            <div className="body">
                <Decoration />
                <div className="content">
                    <div className="form">
                        <div className="greeting mb-3">Reset password</div>
                        <div className="sebGreeting mb-3">
                            Enter your user accounts verified email address and we will send you a password reset link.
                        </div>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mt-4">
                                <div className="row d-flex">
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group text-muted">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='email'
                                                placeholder='Masukan alamat email'
                                                onChange={(e) =>
                                                    setForm({...form, email: e.target.value})
                                                } 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 flex-column justify-content-center align-content-center mt-3">
                                        {loading ? (
                                            <Link href='/password-confirmation'>
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
                                            </Link>
                                            
                                        ) : (
                                            <Link href='/password-confirmation'>
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning col-12 text-white">
                                                        Send password reset email
                                                </button>
                                            </Link>
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

export default ResetPassword;