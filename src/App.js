import React from "react"
import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Jokes from "./Jokes_processing"

function App() { 
  return (
    <div>
      <Header />
      <Greeting />
      <MainContent />
      <Jokes />
      <Footer />
  </div>
  )
}

export default App;
