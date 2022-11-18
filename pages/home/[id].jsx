import React, {Fragment, useEffect, useState} from "react";
import Head from "next/head";
import Profile from "../../components/profile";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/NavbarAfterLogin";
import Footer from "../../components/footer/Footer";

export async function getServerSideProps(context) {
    const id = context.params.id
    console.log(id)
    const res = await axios.get(`${process.env.API_BACKEND}users/${id}`);
    return {
      props: { hasil: res.data.data},
    };
}

function profile ({ hasil }) {
    console.log(hasil);
//     const router = useRouter();
//     const [portfolio, setPortfolio] = useState([]);
//     const [experience, setExperience] = useState([]);
//     console.log(experience)
//     const id = router.query.id
//     console.log(portfolio)
//     const fetchPort = async() =>{
//     const result = await axios.get(`${process.env.API_BACKEND}portfolio/${id}`)
//     setPortfolio(result.data.data)
//   }

//   const fetchExperience = async() =>{
//     const result = await axios.get(`${process.env.API_BACKEND}experience/${id}`)

//     setExperience(result.data.data)
//   }

//   useEffect(() =>{
//     fetchPort()
//     fetchExperience()
//   }, [])

  return(
    <div>
        <Head>
            <title>Hirejob | Profile</title>
        </Head>
        <Navbar />
            <div className="container">
                <Profile detail={hasil}></Profile>
            </div>
        <Footer />
  </div>
  );
}

export default profile;