import React from "react"
import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import TodoList from "./components/TodoList"

function App() { 
  return (
    <div>
      <Header />
      <Greeting />
      <MainContent />
      <div className="todo-list">
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
      <Footer />
  </div>
  )
}

export default App;
