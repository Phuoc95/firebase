import React, { Component } from 'react';
import * as firebase from 'firebase';

class NoteForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noteTitle: '',
        noteContent: '',    
      }
  }
  
render() {
    return (      
      <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:'black'}}>
        <a className="navbar-brand" href="#">Firebase</a>
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
    </nav>
    );
  }
}

export default NoteForm;
