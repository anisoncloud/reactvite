import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Components/Card'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='col-sm-6 mx-auto'>
    <h1 className="headingStyle" >Todo List</h1>
    <Card/>
    <Card/>
    <Card/>
  </div>
)
