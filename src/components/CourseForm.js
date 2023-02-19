import React from 'react'

const CourseForm = ( props ) => {
    return (
        <div>
            <form className='mb-3' onSubmit={props.addCourse}>
                <div className="input-group">
                    <input className='form-control' type="text" onChange={props.updateCourse}
                        value={props.current} placeholder='Ajouter un Language...'
                    />
                    <button className='btn btn-primary' type="submit">
                        <i class="fa-solid fa-folder-plus"></i> Add Course
                    </button>
                </div>
            </form>
        </div>
    )
}
export default CourseForm;