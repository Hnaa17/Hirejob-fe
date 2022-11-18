import { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import Swal from "sweetalert2";

const fileTypes = ["JPG", "PNG", "JPEG"];

const Portfolio = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

  const handleUpload = (file) => {
    setFile(file);
  };

  const [portfolio, setPortfolio] = useState({
    app_name: "",
    link_repo: "",
    app_type: "",
    image: "",
    // id_worker: id,
  });

  const handleChangePort = (e) => {
    e.preventDefault();
    setPortfolio({
      ...portfolio,
      [e.target.name]: e.target.value,
    });
    console.log(portfolio);
  };

  const handleSubmitPorto = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("app_name", portfolio.app_name);
    formData.append("link_repo", portfolio.link_repo);
    formData.append("app_type", portfolio.app_type);
    formData.append("image", file);
    // formData.append("id_worker", portfolio.id_worker);
    e.preventDefault();
    axios
      .post(process.env.API_BACKEND + "portfolio/create", formData)
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
  };

  return (
    <>
      <style jsx> 
      {``}
      </style>

      <div className="card mt-3">
        <div className="card-body">
            <h3>Portofolio</h3>
            <hr />
            <form 
            className="w-100 form-sign-up"
            onSubmit={handleSubmitPorto}
            >
                <div className="mb-2">
                    <label htmlFor="nama" className="form-label">
                        Nama Aplikasi
                    </label>
                    <input 
                    type="text"
                    name="app_name"
                    className="form-input form-control"
                    id="app_name"
                    placeholder="Masukan nama aplikasi" 
                    onChange={handleChangePort}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="nama" className="form-label">
                        Link repository
                    </label>
                    <input 
                    type="text"
                    name="link_repo"
                    className="form-input form-control"
                    id="link_repo"
                    placeholder="Masukan link repository" 
                    onChange={handleChangePort}
                    />
                </div>
                
                <div className="mb-2 mt-3">
                    <label htmlFor="nama" className="form-label">
                        Type portofolio
                    </label>
                    <div className="container row">
                        <div className="form-check col-4">
                            <input 
                            type="radio"
                            className="ms-3"
                            name="app_type"
                            id="mobile"
                            value="Aplikasi-Mobile"
                            onChange={handleChangePort} 
                            />
                            <label htmlFor="mobile"
                            className="ms-2">
                                Aplikasi mobile
                            </label>
                        </div>
                        <div className="form-check col-4">
                            <input 
                            type="radio" 
                            className="ms-3"
                            name="app_type"
                            id="web"
                            value="Aplikasi-Web"
                            onChange={handleChangePort} 
                            />
                            <label htmlFor="web"
                            className="ms-2">
                                Aplikasi Web
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="nama" className="form-label">
                        Upload Gambar
                    </label>
                    <div>
                        <FileUploader
                        handleChange={handleUpload}
                        name="file"
                        types={fileTypes}
                        />
                    </div>
                </div>
                <hr className="mt-3" />
                {loading ? (
                    <button className="btn btn-warning my-2 mb-3 btn-w">
                        <span 
                          className="spinner-border text-light spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                    </button>
                ) : (
                    <button className="btn btn-warning my-2 mb-3 btn-w">
                        Tambah Portfolio
                    </button>
                )}
            </form>
        </div>
    </div>
    </>
  )
}

export default Portfolio;