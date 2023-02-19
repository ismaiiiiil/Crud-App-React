import './App.css';
import React, { Component } from 'react'
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state = {
    courses : [
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'jQuery'}
    ] ,
    current : ''
  }

  // ----------  CourseForm   ------------

  // UpdateCourse (input)
  updateCourse = (e) => {
    // console.log(e.target.value)
    this.setState({
      current: e.target.value
    })
  }

  // addCourse (submit form)
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;

    if(current != '') { // input != vide

      courses.push({name:current})
      this.setState({
        courses,
        current: '' // vider current
      })

    } else {
      alert('Le champ Obligatoire')
    }
  }

  // ----------  CourseList  ------------

  // deleteCourse
  deleteCourse = (index) => {
    // console.log(index)
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // editeCourse
  editeCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }






  render() {
    const { courses } = this.state;
    const coursesLength = courses.length;
    const courseList = courses.map( (course, index) => {

        return  <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editeCourse={this.editeCourse}/>
        
    })

    return (
      <div className='container'>
        <div className="col-md-8 mx-auto">
          <h2 className='ms-5 mt-5 mb-3 text-primary'>
            <i class="fa-solid fa-computer"></i> Add Cours
          </h2>

          <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />

          <ul className='list-group'>
            {coursesLength ? courseList : <h3 className='list-group-item text-danger text-center'>No Language Exist</h3> }
          </ul>
        </div>
      </div>
    )
  }
}
export default App;
