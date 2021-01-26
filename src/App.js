import Section from './components/section';
import { general, work, education, hobbies } from './inputs';

function App() {
  
  return (
    <div className="app">
      <Section inputs={general} sectionClass="info-general" />
      <Section inputs={work} sectionClass="info-work" />
      <Section inputs={education} sectionClass="info-education" />
      <Section inputs={hobbies} sectionClass="info-hobbies" />
    </div>
  );
}

export default App;
