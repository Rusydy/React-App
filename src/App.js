import React from "react"
import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"

function App() { 
  return (
    <div>
      <Header />
      <Greeting />
      <MainContent />
      <Footer />
  </div>
  )
}

export default App;
