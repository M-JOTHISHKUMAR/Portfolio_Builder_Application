import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './Navbar'

export class Routing extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
        <Route exact path='' element={<Home/>}></Route>
        <Route exact path='login' element={<App/>}></Route>
        </Routes>
        </BrowserRouter>

    )
  }
}

export default Routing