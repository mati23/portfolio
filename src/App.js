import './App.css';
import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom'

import LeftProjects from './components/LeftProjects';
import PageHeader from './components/PageHeader'
import ThreeDViewer from './components/ThreeDViewer';
import logo from './logo.svg';
import RightProjects from './components/RightProjects';
import MyDescription from './components/MyDescription';



function App() {
  return (
    <div>
      <PageHeader />
      <ThreeDViewer />
      <div className='grid-template'>
        <MyDescription />
        <LeftProjects />
        <RightProjects />
      </div>
    </div>);
}

export default App;
