import React, { Component } from 'react';
import './studentGuide.css';

class StudentGuide extends Component {
    constructor() {
        super()
        this.state = {
            studentGuides: []
        }
    }

    componentDidMount() {
        this.getStudentGuide()
    }

    getStudentGuide = () => {
        fetch('/api/student-guide')
            .then(response => response.json())
            .then(response => this.setState({ studentGuides: response.data }))
            .catch(err => console.log(err))
    }

    renderStudentGuide = ({id , name}) => <div key={id}>name {id}: {name}</div>

  render() {
    const { studentGuides } = this.state 
    return (
      <div>
        <h2>Student Guide</h2>
        {studentGuides.map(this.renderStudentGuide)}
      </div>
    );
  }
}

export default StudentGuide;
