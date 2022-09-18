import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App  () {
 const[progress, setProgress] = useState(0)

//  const apiKey = "471414ac424f4806977501225c21aa3a"
//  const state = {progress:0}


 const pageSize = 6
 var apiKey = process.env.REACT_APP_NEWS_API

 
 
    return (
      <div>
      <Router> 
      <LoadingBar
        color='cyan'
        
        progress={progress}
       
      />
      <Navbar/>
          <Route exact path="/"> <News setProgress = {setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country='in' category="general"/> </Route>
          <Route exact path="/business"> <News setProgress = {setProgress} apiKey={apiKey} key="business"  pageSize={pageSize} country='in' category="business"/> </Route>
          <Route exact path="/entertainment"> <News setProgress = {setProgress} apiKey={apiKey} key="entertainment"  pageSize={pageSize} country='in' category="entertainment"/> </Route>
          <Route exact path="/general"> <News setProgress = {setProgress} apiKey={apiKey} key="general"  pageSize={pageSize} country='in' category="general"/> </Route>
          <Route exact path="/health"> <News setProgress = {setProgress} apiKey={apiKey} key="health"  pageSize={pageSize} country='in' category="health"/> </Route>
          <Route exact path="/science"> <News setProgress = {setProgress} apiKey={apiKey} key="science"  pageSize={pageSize} country='in' category="science"/> </Route>
          <Route exact path="/sports"> <News setProgress = {setProgress} apiKey={apiKey} key="sports"  pageSize={pageSize} country='in' category="sports"/> </Route>
          <Route exact path="/technology"> <News setProgress = {setProgress} apiKey={apiKey} key="technology"  pageSize={pageSize} country='in' category="technology"/> </Route>
       </Router>
      </div>
    )
  }


export default App;