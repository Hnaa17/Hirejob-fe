import React, { Fragment } from "react";
import Image from "next/image";
import { GeoAlt } from "react-bootstrap-icons";
import Link from "next/link";

const Card = () => {
    return (
        <Fragment>
            <style jsx>
                {` 
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
                  }
                  .jobdesk {
                    padding-top: 10px;
                    color: #9ea0a5;
                  }
                  .location {
                    padding-top: 10px;
                    color: #9ea0a5;
                  }
                  .skills {
                    padding-top: 5px;
                    display: flex;
                  }
                  .skill {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    min-width: 90px;
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
                `}
            </style>

            <div className="cardContainer">
                <div className="cardBody">
                    <div className="photo">
                        <Image
                            className="image rounded-circle"
                            src='/louis.png'
                            layout='fill'
                            priority='true' 
                        />
                    </div>
                    <div className="biodata">
                        <div className="name">Louis Tomlinson</div>
                        <div className="jobdesk">Web developer</div>
                        <div className="location d-flex justify-content-start align-items-center">
                            <GeoAlt />
                            <span className="ms-2">Lorem ipsum</span>
                        </div>
                        <div className="skills">
                            <div className="skill">JavaScript</div>
                            <div className="skill">PHP</div>
                            <div className="skill">Python</div>
                        </div>
                    </div>
                    <div className="detail">
                        <Link href={`/profile`}>
                            <button>Lihat Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;