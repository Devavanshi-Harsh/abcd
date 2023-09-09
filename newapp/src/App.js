import React from 'react';
import './App.css'
import Header from './Components/Header';
import Main from './Components/Main'
import ProjectSection from './Components/ProjectSection';
import ContactMeSection from './Components/ContactMeSection';
function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <ProjectSection />
      <ContactMeSection />
    </div>
  );
}

export default App;
