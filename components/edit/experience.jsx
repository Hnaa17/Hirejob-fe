import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Experience = () => {
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState({
    position : "",
    company_name : "",
    work_time : "",
    descript : "",
    // user_id : id,
  });

  const handleExperience = (e) => {
      e.preventDefault();
      setExperience({
        ...experience,
        [e.target.name]: e.target.value,
      });
      console.log(experience);
  };

  const handleSubmitExpe = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(process.env.API_BACKEND + "experience/create", experience)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          text: res.data.message,
          icon: "success",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    }

    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h3>Pengalaman Kerja</h3>
                    <hr />
                    <form onSubmit={handleSubmitExpe} className="w-100 form-sign-up">
                        <div className="mb-2">
                            <label htmlFor="position" className="form-label">
                                Posisi
                            </label>
                            <input type="text"
                            name="position"
                            className="form-control mt-1"
                            id="position"
                            placeholder="Ex: Web developer"
                            onChange={handleExperience}
                            />
                        </div>
                        <div className="row g-2">
                            <div className="col-md">
                                <div className="mb-2">
                                    <label htmlFor="company_name" className="form-label">
                                        Nama Perusahaan
                                    </label>
                                    <input 
                                    type="text"
                                    name="company_name"
                                    className="form-control form-input mt-1"
                                    id="company_name"
                                    placeholder="PT Maju Terus" 
                                    onChange={handleExperience}
                                    />
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="mb-2">
                                    <label htmlFor="work_time" className="form-label">
                                        Waktu Kerja
                                    </label>
                                    <input 
                                    type="text"
                                    name="work_time"
                                    className="form-control form-input mt-1"
                                    id="work_time"
                                    placeholder="Januari 2020" 
                                    onChange={handleExperience}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="descript" className="form-label">
                                Deskripsi Singkat
                            </label>
                            <textarea 
                            type="text"
                            name="descript"
                            className="form-control mt-1"
                            id="descript"
                            placeholder="Tuliskan Deskripsi Singkat" 
                            onChange={handleExperience}
                            />
                        </div>
                        <hr className="mt-3" />
                        {loading ? (
                          <button className="btn btn-warning my-2 btn-w">
                            <span 
                              className="spinner-border text-light spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            />
                          </button>
                        ) : (
                          <button className="btn btn-warning my-2 btn-w">
                            Tambah Pengalaman Kerja
                          </button>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Experience;