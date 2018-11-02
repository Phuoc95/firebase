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
      <div className="col">
      <div id="noteList" role="tablist" aria-multiselectable="true">
        <div className="card">
          <div className="card-header" role="tab" id="section1HeaderId">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                Ghi chú 1.2.2018
              </a>
            </h5>
          </div>
          <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quae magni voluptatibus quasi nesciunt deleniti repellendus, cupiditate, obcaecati, minus reprehenderit doloremque vero dolorem officia quo ipsa quisquam in quis delectus!
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="section1HeaderId">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                Ghi chú 1.2.2018
              </a>
            </h5>
          </div>
          <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quae magni voluptatibus quasi nesciunt deleniti repellendus, cupiditate, obcaecati, minus reprehenderit doloremque vero dolorem officia quo ipsa quisquam in quis delectus!
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default NoteForm;
