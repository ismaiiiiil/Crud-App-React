import React, { Component , Fragment } from 'react'

class CourseList extends Component {

    state = {
        isEdit : false
    }

    // toggleState
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit // false # true (contraire)
        }) 
    }
    // updateCourseItem
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editeCourse(this.props.index , this.input.value); // input value => ref
        this.toggleState(); // rj3o false
    }

    // render ------- Update --------- Form 
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <div className="input-group">
                    <input className='form-control' type="text" 
                        ref={(v) => { this.input = v }} 
                        defaultValue={ this.props.details.name }
                    />

                    <button type='submit' className="btn btn-warning">
                        <i className="fa-solid fa-pen-to-square"></i> Update Course
                    </button>
                </div>
            </form>
        )
    }


    // render Course Item
    renderCourse = () => {
        return (
            <li className='list-group-item'>
                <span> {this.props.details.name} </span>

                    {/* modifier */}
                <button className="btn btn-secondary"
                    onClick={() => {this.toggleState()}} // => true
                >
                    <i className="fa-solid fa-pencil"></i> Edit Course
                </button>

                <button className="btn btn-danger"
                    onClick={() => {this.props.deleteCourse(this.props.index)}}
                >
                    <i className="fa-solid fa-trash-can"></i> Delete Course
                </button>
                
            </li>
        )
    }

    render() {
        let {isEdit} = this.state;
        return (
            <Fragment>
            {/* true =>  this.renderUpdateForm() || false => this.renderCourse()*/}
                { isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        )
    }
}
export default  CourseList;