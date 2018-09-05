import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TextInput from './components/TextField/TextField';
import CourseList from './components/CourseList/CourseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CourseList/>
      </div>
    );
  }
}

export default App;
