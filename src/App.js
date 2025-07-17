import { useEffect, useState } from 'react';
import './App.css';
import { PersonalInfo } from './Components/PersonalInfo';
import { Education } from './Components/Education';
import { Objective } from './Components/Objective';
import { WorkingExp } from './Components/WorkingExp';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { LanguageSkill } from './Components/LanguageSkill';

function App() {
  const [cv, setCV] = useState(null);
  useEffect(() => {
    fetch("/cv.json")
    .then((res) => res.json())
    .then((json) => setCV(json))
    .catch((err) => console.error("Error: ", err))
  }, []);
  return (cv) ? (
    <div className="App">
      <PersonalInfo data={cv.PersonalInfo}/>
      <Education data={cv.Education}/>
      <Objective data={cv.Objective}/>
      <WorkingExp data={cv.WorkingExp}/>
      <Projects data={cv.Projects}/>
      <Skills data={cv.Skills}/>
      <LanguageSkill data={cv.LangSkills}/>
    </div>
  ) : <div>Loading...</div>;
}

export default App;
