import Category from "./components/category";
import { general, work, education, hobbies } from "./inputs";

function App() {
  return (
    <div className="app">
      <section className="section">
        <Category inputs={general} sectionClass="info-general" />
      </section>
      <section className="section">
        <h2>Work Experience</h2>
        <Category inputs={work} sectionClass="info-work" />
      </section>
      <section className="section">
        <h2>education</h2>
        <Category inputs={education} sectionClass="info-education" />
      </section>
      <section className="section">
        <h2>Hobbies</h2>
        <Category inputs={hobbies} sectionClass="info-hobbies" />
      </section>
    </div>
  );
}

export default App;
