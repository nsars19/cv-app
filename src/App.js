import React from "react";
import Category from "./components/category";
import uniqid from "uniqid";
import { general, work, education, hobbies } from "./inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: [
        <Category
          inputs={general}
          sectionClass="info-general"
          key={uniqid()}
        />,
      ],
      work: [
        <Category inputs={work} sectionClass="info-work" key={uniqid()} />,
      ],
      education: [
        <Category
          inputs={education}
          sectionClass="info-education"
          key={uniqid()}
        />,
      ],
      hobbies: [
        <Category
          inputs={hobbies}
          sectionClass="info-hobbies"
          key={uniqid()}
        />,
      ],
    };
  }

  buildCategory(inputs, className) {
    return (
      <Category
        inputs={inputs}
        className={className}
        active="true"
        key={uniqid()}
      />
    );
  }

  appendSection(stateKey, inputs, className) {
    this.setState({
      [stateKey]: this.state[stateKey].concat(
        this.buildCategory(inputs, className)
      ),
    });
  }

  render() {
    return (
      <div className="app">
        <a href="https://google.com" className="github-logo">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* GENERAL INFO */}
        <section className="section-general">
          {this.state.general.map((item) => item)}
        </section>

        {/* WORK INFO */}
        <section className="section-work">
          <h2>Work Experience</h2>
          <div className="work-wrap" id="work-exp">
            {this.state.work.map((item) => item)}
          </div>
          <button
            onClick={() => {
              this.appendSection("work", work, "info-work");
            }}
          >
            New +
          </button>
        </section>

        {/* EDUCATION INFO */}
        <section className="section-education">
          <h2>Education</h2>
          <div className="edu-wrap" id="edu-exp">
            {this.state.education.map((item) => item)}
          </div>
          <button
            onClick={this.appendSection.bind(
              this,
              "education",
              education,
              "info-education"
            )}
          >
            New +
          </button>
        </section>

        {/* HOBBY INFO */}
        <section className="section-hobbies">
          <h2>Hobbies</h2>
          <div className="hobbies-wrap">
            {this.state.hobbies.map((item) => item)}
          </div>
          <button
            onClick={this.appendSection.bind(
              this,
              "hobbies",
              hobbies,
              "info-hobbies"
            )}
          >
            New +
          </button>
        </section>
      </div>
    );
  }
}

export default App;
