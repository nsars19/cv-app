import React, { useState } from "react";
import Category from "./components/category";
import uniqid from "uniqid";
import {
  generalDefault,
  workDefault,
  educationDefault,
  hobbiesDefault,
} from "./inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles/App.css";

const App = (props) => {
  const general = [
    <Category
      inputs={generalDefault}
      sectionClass="info-general"
      key={uniqid()}
    />,
  ];

  const [work, setWork] = useState([
    <Category inputs={workDefault} sectionClass="info-work" key={uniqid()} />,
  ]);

  const [education, setEducation] = useState([
    <Category
      inputs={educationDefault}
      sectionClass="info-education"
      key={uniqid()}
    />,
  ]);

  const [hobbies, setHobbies] = useState([
    <Category
      inputs={hobbiesDefault}
      sectionClass="info-hobbies"
      key={uniqid()}
    />,
  ]);

  const buildCategory = (inputs, className) => {
    return (
      <Category
        inputs={inputs}
        className={className}
        active="true"
        key={uniqid()}
      />
    );
  };

  const appendSection = (cb, stateVar, inputs, className) => {
    const newCategory = buildCategory(inputs, className);
    cb(stateVar.concat(newCategory));
  };

  return (
    <div className="app">
      <a
        href="https://github.com/nsars19/cv-app"
        className="github-logo"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      {/* GENERAL INFO */}
      <section className="section-general">
        {general.map((item) => item)}
      </section>

      {/* WORK INFO */}
      <section className="section-work">
        <h2>Work Experience</h2>
        <div className="work-wrap" id="work-exp">
          {work.map((item) => item)}
        </div>
        <button
          onClick={() => {
            appendSection(setWork, work, workDefault, "info-work");
          }}
        >
          New +
        </button>
      </section>

      {/* EDUCATION INFO */}
      <section className="section-education">
        <h2>Education</h2>
        <div className="edu-wrap" id="edu-exp">
          {education.map((item) => item)}
        </div>
        <button
          onClick={() => {
            appendSection(
              setEducation,
              education,
              educationDefault,
              "info-education"
            );
          }}
        >
          New +
        </button>
      </section>

      {/* HOBBY INFO */}
      <section className="section-hobbies">
        <h2>Hobbies</h2>
        <div className="hobbies-wrap">{hobbies.map((item) => item)}</div>
        <button
          onClick={() => {
            appendSection(setHobbies, hobbies, hobbiesDefault, "info-hobbies");
          }}
        >
          New +
        </button>
      </section>
    </div>
  );
};

export default App;
