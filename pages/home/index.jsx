import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import Card from '../../components/Card'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/NavbarHome';
import Pagination from "../../components/Pagination";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { GeoAlt } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import defaultPhoto from "../../public/default-photo.jpg";

export async function getServerSideProps() {
    const res = await axios.get(`${process.env.API_BACKEND}users/profile`);
    return {
      props: { data: res.data.data },
    };
}

export default function Home ({data}) {
    console.log(data);
    const [search, setSearch] = useState("");
    const [dataSearch, setDataSearch] = useState([]);
    const [page, setPage] = useState(1);
    const [usersPerPage] = useState(5);

    const handleSearch = (e) => {
        e.preventDefault();
        fetch();
    };
    console.log(search);

    const fetch = async() => {
        const result = await axios.get(`${process.env.API_BACKEND}users/profile?search=${search}`);
        setDataSearch(result.data.data);
        console.log(dataSearch);
    };

    const fetchSort = async (sort, mode) => {
        const result = await axios.get(
          `${process.env.API_BACKEND}users/profile?sort=${sort}&mode=${mode}`
        );
        setDataSearch(result.data.data);
        console.log(result.data.data);
    };

    const increment = () => {
        if(page == 2) {
            return;
        } else if (page >= 1){
            setPage(page + 1);
            fetch();
        }
    };

    const decrement = () => {
        if(page <= 1) {
            return;
        }else{
            setPage(page - 1);
            fetch();
        }
    };

    useEffect(() => {
        fetch();
    }, [ page ]);

    console.log(data);

    const indexOfLastPost = page * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentPosts = dataSearch.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setPage(pageNumber);

    return (
        <Fragment>
            <style jsx>
                {`
                    .hero {
                        width: 100%;
                        background: #f6f7f8;
                    }
                    .content {
                        width: 100%;
                        min-height: 100%;
                        background: #f6f7f8;
                        padding-bottom: 15px;
                    }
                    .main {
                        padding-top: 50px;
                        width: 80%;
                        margin: 0 auto;
                    }
                    @media screen and (max-width: 567px) {
                        .main {
                          width: 95%;
                        }
                      }
                    .searchDiv {
                        width: 100%;
                        height: 15vh;
                        display: flex;
                        flex-direction: row;
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: center;
                    }
                    .searchContainer {
                        width: 80vw;
                        height: 10vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .searchDiv input {
                        width: 100%;
                        background: #ffffff;
                        box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
                        border-radius: 8px;
                        border: none;
                        height: 70px;
                        padding: 20px;
                    }
                    .searchDiv input:focus-visible {
                        border: none;
                        outline: none;
                        box-shadow: 0 0 6px #5e50a1;
                    }
                    .searchDiv > div,
                    .searchDiv > button {
                        position: absolute;
                    }
                    .inputSelect:focus {
                        height: 60px;
                        width: auto;
                        border: 1px solid #5e50a1;
                    }
                    .inputSelect option {
                        border: none;
                    }

                    .serachDiv > div {
                        height: 100%;
                        right: 135px;   
                    }
                    .pagination {
                        width: auto;
                        margin: 0 auto;
                        display: flex;
                        gap: 5px;
                        justify-content: center;
                    }
                    .buttonsearch {
                        width: 110px;
                        height: 50px;
                        color: white;
                        background-color: #5e50a1;
                        border-radius: 10px;
                        border: none;
                        font-size: 18px;
                        margin-left: 900px;
                    }
                    .cardContainer {
                        background-color: white;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                      }
                      .cardBody {
                        width: 80vw;
                        min-height: 30vh;
                        border: 2px solid#F2F3F4;
                        display: flex;
                        align-items: center;
                        padding: 5px;
                      }
                      .photo {
                        margin-left: 10px;
                        width: 100px;
                        height: 100px;
                        position: relative;
                      }
    
                      .photo .image {
                        image-rendering: -moz-crisp-edges;
                        /* Firefox        */
                        image-rendering: -o-crisp-edges;
                        /* Opera          */
                        image-rendering: -webkit-optimize-contrast;
                        /* Safari         */
                        image-rendering: optimize-contrast;
                        /* CSS3 Proposed  */
                        -ms-interpolation-mode: nearest-neighbor;
                        /* IE8+           */
                        border-radius: 50%;
                      }
                      .biodata {
                        padding-left: 20px;
                      }
                      .name {
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                        margin-top: 15px;
                      }
                      .jobdesk {
                        padding-top: 1px;
                        color: #9ea0a5;
                      }
                      .location {
                        padding-top: 10px;
                        color: #9ea0a5;
                      }
                      .skills {
                        padding-top: 1px;
                        display: flex;
                      }
                      .skill {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        min-width: 50px;
                        height: 25px;
                        background-color: rgba(251, 176, 23, 0.6);
                        border: 1px solid rgba(251, 176, 23, 1);
                        border-radius: 5px;
                        margin: 5px;
                        padding: 10px;
                      }
                      .detail {
                        position: absolute;
                        display: flex;
                        margin-left: 70vw;
                        height: 20vh;
                      }
                    .detail button {
                        border: none;
                        background-color: #5e50a1;
                        color: white;
                        min-width: 100px;
                        height: 40px;
                        margin-top: auto;
                        margin-bottom: auto;
                    }
                    .bg-top{
                        width: 100%;
                        height: 67px !important;
                        z-index: -1;
                        background: #5E50A1;
                        padding-left: 70px;
                    }
                    .sort::before{
                        content: "";
                        width: 1px;
                        height: 72px;
                        margin-right: 35px;
                        background: black;
                    }
                    .sort{
                        margin-left: 590px;
                    }
                    .mainSearch{
                        width: 100%;
                        margin-top: 30px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                `}
            </style>

            <Head>
                <title>Home | HireJob</title>
            </Head>

            <div className="hero">
                <Navbar />

                <section>
                    <div className="bg-top">
                        <div className="d-flex">
                            <h4 className="fw-bold text-white mt-3">Top Jobs</h4>
                        </div>
                    </div>
                </section>
                
                <div className="content">
                    <div className="main">

                        <section>
                            <div className="searchDiv">
                                {/* <div className="searchContainer">
                                    <form onSubmit={(e) => onSubmit}>
                                        <form> */}
                                        <input 
                                            type='text'
                                            placeholder='Search for any skill'
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <div className="sort dropdown d-flex flex-row justify-content-center align-items-center">
                                            <button
                                                className="btn btn-transparent dropdown-toggle me-4"
                                                type="button"
                                                id="registerDropdown"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Sort By
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="registerDropdown">
                                                <li>
                                                    <button
                                                        className="dropdown-item" 
                                                        onClick={() => {
                                                            fetchSort("fullname", "desc");
                                                        }}
                                                    >
                                                        Name
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item" 
                                                        onClick={() => {
                                                            fetchSort("jobdesk", "asc");
                                                        }}
                                                    >
                                                        Position
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item" 
                                                        onClick={() => {
                                                            fetchSort("domisili", "asc");
                                                        }}
                                                    >
                                                        Location
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                        {/*
                                        Ga Di Pake

                                        <select
                                            className="inputSelect"
                                            style={{
                                                height: '5vh',
                                                width: 'auto',
                                                border: 'none',
                                                marginRight: '30px',
                                            }}
                                            // onChange={(e) => {
                                            //     setField(e.target.value);
                                            // }}
                                            // value={field}
                                        >
                                            <option value=''>Kategori</option>
                                            <option value='name'>Sortir by Name</option>
                                            <option value='position'>Sortir by Position</option>
                                            <option value='location'>Sortir by Location</option>
                                            <option value='skill'>Sortir by Skill</option>
                                        </select>

                                        <Search />

                                        */}
                                        {/* <button onClick={handleSearch} className="buttonsearch" type="submit">Search</button> */}
                                        <button className="buttonsearch" type="submit" onClick={handleSearch}>Search</button>
                                    {/* </form>
                                </div> */}
                            </div>
                        </section>
                        
                        <section>
                            <div className="mainSearch">
                                <div className="cardContainer">
                                    {search ? (
                                        currentPosts?.map((data, index) => {
                                            console.log(data.fullname)
                                            return (
                                                <div key={index} className="cardBody">
                                                <div className="photo">
                                                    <Image 
                                                        className="image rounded-circle"
                                                        src={defaultPhoto}
                                                        layout='fill'
                                                        priority='true'
                                                    />
                                                </div>
                                        <div className="biodata">
                                        
                                                <div className="name">
                                                    <p>{data.fullname}</p>
                                                </div>
                                            <div className="jobdesk text-muted">
                                                <p>{data.jobdesk}</p>
                                            </div>
                                            <div className="d-flex align-items-center skills">
                                                <p className="skill">HTML</p>
                                                <p className="skill">CSS</p>
                                                <p className="skill">JavaScript</p>
                                            </div>
                                            <div className="location text-muted d-flex justify-content-start align-items-center mb-3">
                                                <GeoAlt />
                                                <span className="ms-2">{data.domisili === undefined ? "Unknown" : data.domisili}</span>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <Link href={`/home/${data.id}`}>
                                                <button>Lihat Profile</button>
                                            </Link>
                                        </div>
                                    </div>
                                            )
                                        })
                                    ) : (
                                        <>
                                        {currentPosts?.map((data, index) => {
                                            console.log(data.fullname);
                                            return (
                                                <div key={index} className="cardBody">
                                                <div className="photo">
                                                    <Image 
                                                        className="image rounded-circle"
                                                        src={defaultPhoto}
                                                        layout='fill'
                                                        priority='true'
                                                    />
                                                </div>
                                        <div className="biodata">
                                        
                                                <div className="name">
                                                    <p>{data.fullname}</p>
                                                </div>
                                            
                                            <div className="jobdesk text-muted">
                                                <p>{data.jobdesk}</p>
                                            </div>
                                            <div className="d-flex align-items-center skills">
                                                <p className="skill">HTML</p>
                                                <p className="skill">CSS</p>
                                                <p className="skill">JavaScript</p>
                                            </div>
                                            <div className="location text-muted d-flex justify-content-start align-items-center mb-3">
                                                <GeoAlt />
                                                <span className="ms-2">{data.domisili === undefined ? "Unknown" : data.domisili}</span>
                                            </div>
                                            <div className="skills">
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <Link href={`/home/${data.id}`}>
                                                <button>Lihat Profile</button>
                                            </Link>
                                        </div>
                                    </div>
                                            )
                                        })}
                                        </>
                                    )
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="pagination">
                    <Pagination 
                        increment={increment}
                        decrement={decrement}
                        usersPerPage={usersPerPage}
                        totalUsers={dataSearch.length}
                        paginate={paginate}
                    />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};