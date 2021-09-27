import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ClassroomForm = (props) => {
  const [classroom, setClassroom] = useState({
    classroomname: props.classroom ? props.classroom.classroomname : '',
    student: props.classroom ? props.classroom.student : '',
    specialty: props.classroom ? props.classroom.specialty : ''

  });

  const [errorMsg, setErrorMsg] = useState('');
  const { classroomname, student, specialty } = classroom;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [classroomname, student, specialty];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const classroom = {
        id: uuidv4(),
        classroomname,
        student,
        specialty
      };
      props.handleOnSubmit(classroom);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClassroom((prevState) => ({
      ...prevState,
      [name]: value
    }));
    // switch (name) {
    //   case 'level':
    //     if (value === '' || parseInt(value) === +value) {
    //       setStudent((prevState) => ({
    //         ...prevState,
    //         [name]: value
    //       }));
    //     }
    //     break;

    //   default:
    //     setStudent((prevState) => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    // }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Classroom Name/Code</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="classroomname"
            value={classroomname}
            placeholder="Enter classroom name or code"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="student">
          <Form.Label>Student level</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="student"
            value={student}
            placeholder="Enter name of student to assign to classroom"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="specialty">
          <Form.Label>Specialty</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="specialty"
            value={specialty}
            placeholder="Enter specialty"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ClassroomForm;