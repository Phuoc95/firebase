import React, { Component } from 'react';
import * as firebase from 'firebase';
import {noteData} from './firebaseConnect';
// const btnTest = {
//   margin: '40px',
//   fontSize:'20px',
//   padding: '10px',
// };

class App extends Component {
  pushData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title: 'Ghi chu 3',
      contentNote: 'day la content note push 1',
    })
    console.log('push data 111');
  }

   deleteData = (id) => {
     var connectData = firebase.database().ref('dataForNote');
         connectData.child(id).remove();
         console.log(`delete thanh cong ${id}`);
   }
  render() {
    console.log(noteData);
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      <button type="button" name="" id="" style={btnTest}  onClick={ () => {this.pushData()} } > Push </button>
      <button type="button" name="" id="" style={btnTest}  onClick={ () => {this.deleteData('-LQIN9eFJgJpGAI-sEMM')} } > Delete </button>
      

      </div>
    );
  }
}

export default App;
