import { useState, useEffect } from "react";
import {
  about,
  education,
  skillStyles,
  skillsContainer,
  subtitle,
  skillDiv,
} from "./about.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoBox from "../InfoBox/InfoBox";
import axios from "axios";
import Loader from "react-loader-spinner";
import { BASE_API_URL } from "../../utils/constants";

const About = () => {
  const [stack, setStack] = useState([]);

  async function fetchStack() {
    await axios
      .get(`${BASE_API_URL}/stack`)
      .then((res) => setStack(res.data.data))
      .catch((err) => console.log(err));
    return;
  }

  useEffect(() => {
    fetchStack();
  }, []);

  return (
    <section id="about" className={`${about} container`}>
      <SectionTitle title="About me" />
      <div
        className={`${education} w-100 d-flex flex-wrap justify-content-center align-items-start py-4 px-2`}
        style={{ gap: "50px 0" }}
      >
        <InfoBox
          title="Interests"
          description={
            "Web Development<br/>Game Development"
          }
        />
        <InfoBox
          title="Skills"
          description={
            "UI Development<br/>REST API Development<br/>Design Translation"
          }
        />
        <InfoBox title="Experience" description={"2+ years"} />
      </div>

      <div className="my-5 w-100 d-flex flex-column align-items-center">
        <h3 className={`${subtitle} mb-5 mx-auto`}>My stack</h3>
        <div
          className={`${skillsContainer} w-100 align-items-center mx-auto ${
            !stack.length > 0 && "d-flex justify-content-center"
          }`}
        >
          {stack.length > 0 ? (
            stack.map((skill) => (
              <div
                key={skill.name}
                className={`${skillDiv} w-100 h-100 p-3 justify-content-center align-items-center`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={`${skillStyles} mb-2`}
                />
                <p className="m-0">{skill.name}</p>
              </div>
            ))
          ) : (
            <Loader type="Oval" color="#ba31f0" height={60} width={60} />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
