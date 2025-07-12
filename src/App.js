// import logo from './logo.svg';
import './App.css';
import { PersonalInfo } from './Components/PersonalInfo';
import { Education } from './Components/Education';
import { Objective } from './Components/Objective';
import { WorkingExp } from './Components/WorkingExp';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { LanguageSkill } from './Components/LanguageSkill';

//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Education />
      <Objective />
      <WorkingExp />
      <Projects />
      <Skills />
      <LanguageSkill />
    </div>
  );
}

export default App;
