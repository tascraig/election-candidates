//App.jsx

import React from "react";
import Navbar from "./components/Navbar.jsx";
import Candidates from "./components/Candidates.jsx";
import './app.css'


function App() {

  return (
    <>
      <Navbar />
      <h2 className='header'>Election Candidates</h2>
      <Candidates />
     
    </>
  )
}

export default App
