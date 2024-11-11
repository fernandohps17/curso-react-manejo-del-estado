import React from "react"
import './App.css'

// Components
import { UseState } from "./Components/UseState"
import { ClassState } from "./Components/ClassState"


function App() {

  return (
    <div className="App">
      <UseState name='UseState' />
      <ClassState name='ClassState' />
    </div>
  )
}

export default App
