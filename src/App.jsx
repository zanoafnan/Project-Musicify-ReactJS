import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const App = () => {
  return (
    <div>
      < NavBar />

      <main>
        <div id="home">
          <Home />
        </div>

      
      </main>

    </div>

  )
}

export default App