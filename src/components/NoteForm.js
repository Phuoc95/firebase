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
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({name, value});

    this.setState({
       [name]: value, 
    })
  }

  addData = (title, content) => {
    var item = {};
    item.noteTitle = title;
    item.notContent = content;
    // console.log(item);
    this.props.getData(item);
  }

  render() {
    return (      
      <div className="col-4">
        <h4>Edit content Note</h4>	
        <form>
          <div className="form-group">
            <label htmlFor ="">Tiêu đề Note</label>
            <textarea className="form-control" name="noteTitle" id="noteTitle" rows="3" onChange={ (event) => {this.isChange(event)} } ></textarea>
            <small id="helpId" className="text-muted">Điền tiêu đề vào đây</small>
          </div>
          <div className="form-group">
            <label htmlFor ="">Nội dung Note</label>
            <textarea className="form-control" name="noteContent" id="noteContent" rows="3" onChange={ (event) => {this.isChange(event)} } ></textarea>
            <small id="helpId" className="text-muted">Điền tiêu đề vào đây</small>
          </div>
        </form>
        <button type="reset" name="" id="" className="btn btn-primary btn-lg btn-block"  onClick={()=>{this.addData(this.state.noteTitle, this.state.noteContent)}} >Save</button>
      </div>
    );
  }
}

export default NoteForm;
