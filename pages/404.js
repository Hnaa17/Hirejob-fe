import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <Fragment>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <div className="page-wrap d-flex flex-row align-items-center min-vh-100 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">
                                The page you are looking for was not found
                            </div>
                            <Link href="/" className="btn btn-link">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;