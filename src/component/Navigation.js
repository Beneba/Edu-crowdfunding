import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,

//   } from "react-router-dom";
import EducationState from './Education/EducationState';
import HomePage from './HomePage/HomePage';

function Navigation( ) {
  return (
      <>
    <HomePage />
    <EducationState />
    </>
  )
}

export default Navigation