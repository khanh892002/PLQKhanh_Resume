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
    // set a tags target and rel
    const As = document.querySelectorAll('a');
    As.forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
    
    // setting theme switching feature
    const input = document.querySelector('label.theme-mode>input');
    const body = document.body;
    const label = document.querySelector('label.theme-mode');
    const div = document.querySelector('label.theme-mode>div');
    const manyElements = document.querySelectorAll('h1,h2,b,button,.icon-frame,.portrait-frame,.content');
    function changeTheme() {
      [body, label, div].forEach(item => item.classList.toggle('dark-theme', input.checked));
      manyElements.forEach(item => item.classList.toggle('dark-theme', input.checked));
    }
    input.addEventListener('change', changeTheme);
    
    // setting download button behaviour
    // clicking on the download copy button: div with darken-layout div appear
    const downBtn = document.getElementById('download-btn');
    const divForDarkLayout = document.querySelector('.App>div:last-child');
    function clickDownBtn () {
      divForDarkLayout.hidden = false;
    }
    downBtn.addEventListener('click', clickDownBtn);

    // clicking not on #popup and #down-file-btn: close the div with darken-layout div
    const darkLayout = document.getElementById('darken-layout');
    function clickDarkLayout() {
      divForDarkLayout.hidden = true;
    }
    darkLayout.addEventListener('click', clickDarkLayout);

    return () => {
      input.removeEventListener('change', changeTheme);
      darkLayout.removeEventListener('click', clickDarkLayout);
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

      <button id="download-btn">Make a pdf copy</button>
      <div style={{position:"absolute", top: "0", left: "0"}} hidden>
        <div id='darken-layout'>
          <div id="popup"></div>
          <button id="down-file-btn">Download PDF file</button>
        </div>
      </div>
    </div>
  ) : <div>Loading...</div>;
}

export default App;
