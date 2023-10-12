import React from 'react'
import Calculator from './Calculator'
import Finance from './Finance'

const App = () => {
  return (
    <>
    
    <h1>Welcome to my App</h1>

    <h3>Calculator:</h3>
    <Calculator/>

    <h3>Here is a monthly mortgage calculation</h3>
    <Finance/>

    
    </>
  )
}

export default App