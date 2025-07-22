import './App.css';
import { useEffect } from 'react';
import { PersonalInfo } from './Components/PersonalInfo';
import { Education } from './Components/Education';
import { Objective } from './Components/Objective';
import { WorkingExp } from './Components/WorkingExp';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { LanguageSkill } from './Components/LanguageSkill';
import cv from './cv.json';

function App() {
  useEffect(() => {
    const input = document.querySelector('label.theme-mode>input');
    const body = document.body;
    const label = document.querySelector('label.theme-mode');
    const div = document.querySelector('label.theme-mode>div');
    const btn = document.querySelector('.normal-btn');
    const hbs = document.querySelectorAll('h1,h2,b');
    function changeTheme() {
      [body, label, div, btn].forEach(item => item.classList.toggle('dark-theme', input.checked));
      hbs.forEach(item => item.classList.toggle('dark-theme', input.checked));
    }
    input.addEventListener('change', changeTheme);
    
    return () => {
      input.removeEventListener('change', changeTheme);
    }
  }, []);
    

  return (cv) ? (
    <div className="App">
      <label className='theme-mode'><input type="checkbox"/><div></div></label>
      <PersonalInfo data={cv.PersonalInfo}/>
      <Education data={cv.Education}/>
      <Objective data={cv.Objective}/>
      <WorkingExp data={cv.WorkingExp}/>
      <Projects data={cv.Projects}/>
      <Skills data={cv.Skills}/>
      <LanguageSkill data={cv.LangSkills}/>
      <button className='normal-btn'>Download a pdf copy</button>
    </div>
  ) : <div>Loading...</div>;
}

export default App;
