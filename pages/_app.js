import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';
import { Fragment, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { wrapper, store } from '../configs/redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Router, { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      </Head>

      <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" 
      />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp;







// import { SSRProvider } from 'react-bootstrap';
// const MyApp = ({ Component, id, role, token, refreshToken, lockCredential, pageProps, ...rest }) => {
//   const { store, props } = wrapper.useWrappedStore(rest);
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//     document.title = "Welcome | JobSeek";

//     Router.events.on("routeChangeStart", () => setIsLoading(true));
//     Router.events.on("routeChangeComplete", () => setIsLoading(false));
//     Router.events.on("routeChangeError", () => setIsLoading(false));

//     return () => {
//       Router.events.off("routeChangeStart", () => setIsLoading(true));
//       Router.events.off("routeChangeComplete", () => setIsLoading(false));
//       Router.events.off("routeChangeError", () => setIsLoading(false));
//     };
//   }, [Router.events]);

//   return (
//     <Fragment> 
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link
//          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
//         />
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
//       </Head>

//       <Script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" 
//       />
//       <SSRProvider>
//       {isLoading ? (
//         <Fragment>
//           <PreLoader isLoading={isLoading} />
//         </Fragment>
//       ) : (
//         <Fragment>
//           <Provider store={store}>
            {/* {router.pathname === "/login-worker" || router.pathname === "/register-worker" || router.pathname === "/login-recruiter" ? null : <NavigationBar id={id} role={role} token={token} refreshToken={refreshToken} lockCredential={lockCredential} />} */}

            {/* <NextNProgress /> */}
            // <Component {...props.pageProps} />

            {/* {router.pathname === "/login-worker" || router.pathname === "/register-worker" || router.pathname === "/login-recruiter" ? null : <Footer />} */}
      //     </Provider>
      //   </Fragment>
      // )}
      // <ToastContainer />
      // </SSRProvider>
      // </Fragment>


//   );
// };

// export default MyApp;

// MyApp.getInitialProps = async ({ ctx }) => {

//   const token = ctx.req?.cookies?.token || null;
//   const refreshToken = ctx.req?.cookies?.refreshToken || null;
//   const role = ctx.req?.cookies?.role || null;
//   const id = ctx.req?.cookies?.id || null;
//   const lockCredential = ctx.req?.cookies?.lockCredential || null;

//   return {
//     token: token,
//     refreshToken: refreshToken,
//     role: role,
//     id: id,
//     lockCredential: lockCredential,
//   };
// };









      // <Head>
      //   <meta name="viewport" content="width=device-width, initial-scale=1" />
      //   <link
      //    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
      //   />
      //   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      // </Head>

      // <Script
      // src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" 
      // />
      // <Provider store={store}>
      //   {/* <Navbar /> */}
      //   <NextNProgress />
      //   <Component {...pageProps} />
      // </Provider>
    // </Fragment>
// export default wrapper.withRedux(MyApp);
