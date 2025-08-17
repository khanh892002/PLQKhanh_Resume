import './App.css';
import { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { PersonalInfo } from './Components/PersonalInfo';
import { Education } from './Components/Education';
import { Objective } from './Components/Objective';
import { WorkingExp } from './Components/WorkingExp';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { LanguageSkill } from './Components/LanguageSkill';
import cv from './cv.json';

function App() {
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    // set a tags target and rel
    const As = document.querySelectorAll('a');
    As.forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
    
    // setting theme switching feature
    const themeToggle = document.querySelector('label.theme-mode>input');
    const body = document.body;
    const label = document.querySelector('label.theme-mode');
    const div = document.querySelector('label.theme-mode>div');
    const manyElements = document.querySelectorAll('h1,h2,b,button,.icon-frame,.portrait-frame,.content');
    function changeTheme() {
      [body, label, div].forEach(item => item.classList.toggle('dark-theme', themeToggle.checked));
      manyElements.forEach(item => item.classList.toggle('dark-theme', themeToggle.checked));
    }
    themeToggle.addEventListener('change', changeTheme);
    
    // setting download button behaviour
    // clicking on the download copy button: div with darken-layout div appear
    const createPDFBtn = document.getElementById('createPDF-btn');
    const divForDarkLayout = document.querySelector('.App>div:last-child');
    async function clickCreatePDFBtn () {
      divForDarkLayout.hidden = false;
      try {
        const element = document.querySelector('.App');
        const opt = {
          margin: 10,
          filename: 'PLQKhanh_CV.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, letterRendering: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        const pdf = await html2pdf().set(opt).from(element).outputPdf('blob');
        setPdfBlob(pdf);
        const url = URL.createObjectURL(pdf);
        setPdfUrl(url);

        document.getElementById('popup').innerHTML = `<iframe title="PDF Preview" src="${url}" style="width:100%; height:600px"></iframe>`
      } catch (err) { console.error("Error in creating PDF file"); }
    }
    createPDFBtn.addEventListener('click', clickCreatePDFBtn);
    
    // clicking on the Cancel button: close the div with darken-layout div
    const cancelBtn = document.getElementById('cancel-download');    
    function clickCancel() { divForDarkLayout.hidden = true; }
    cancelBtn.addEventListener('click', clickCancel);
    //clicking on the darkened layout
    const darkLayoutDiv = document.getElementById('darken-layout');
    function clickDarkLayout(e) { 
      if (e.target === darkLayoutDiv) divForDarkLayout.hidden = true; 
    }
    darkLayoutDiv.addEventListener('click', clickDarkLayout);

    // if there is not any of the check boxes checked, the download button will be disabled
    const checkBoxes = document.querySelectorAll('.checkBox-layout>input');
    function downloadable() {
      createPDFBtn.disabled = [...checkBoxes].every(item => !(item.checked));
    }
    checkBoxes.forEach(item => item.addEventListener('change', downloadable));

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);

      themeToggle.removeEventListener('change', changeTheme);
      createPDFBtn.removeEventListener('click', clickCreatePDFBtn);
      darkLayoutDiv.removeEventListener('click', clickDarkLayout);
      cancelBtn.removeEventListener('click', clickCancel);
      checkBoxes.forEach(item => item.removeEventListener('change', downloadable));
    }
  }, [pdfUrl]);
    

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
      <div style={{textAlign: 'center'}}>
        <button id="createPDF-btn" disabled>Make a pdf copy</button>
      </div>
      <div style={{position:'absolute', top: '0', left: '0'}} hidden>
        <div id='darken-layout'>
          <div id="popup"></div>
          <div style={{display: 'block'}}>
            {pdfBlob && <button onclick={() => {
              const a = document.createElement('a');
              a.href = pdfUrl;
              a.download = 'PLQKhanh_CV.pdf';
              a.click();
            }}>Download PDF file</button>}
            <button id="cancel-download">Cancel</button>  
          </div>
        </div>
      </div>
    </div>
  ) : <div>Loading...</div>;
}

export default App;
