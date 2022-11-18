import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Skills = () => {
    const [loading, setLoading] = useState(false);
    const [skill, setSkill] = useState({
        skill_name: "",
    });

    const handleSkill = (e) => {
        e.preventDefault();
        setSkill({
          ...skill,
          [e.target.name]: e.target.value,
        });
        console.log(skill);
      };
    
      const skillSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
          .post(process.env.API_BACKEND + "skills/create", skill)
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
         <style jsx>{`
         `}</style>
         <div className="card mt-3">
            <div className="card-body">
                <h3>Skill</h3>
                <hr />
                <div className="container">
                    <div className="mb-3">
                        <form onSubmit={skillSubmit}>
                            <div className="d-flex gap-3">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Eg: Javascript, Java, PHP, dll"
                                    name="skill_name"
                                    id="skill_name"
                                    onChange={handleSkill}
                                />
                                {loading ? (
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-warning btn-w">
                                        <span
                                            className="spinner-border text-light spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                ) : (
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-warning btn-w">
                                    Simpan
                                    </button>
                                </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;