import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const StudentForm = (props) => {
  const [student, setStudent] = useState({
    studentname: props.student ? props.student.studentname : '',
    level: props.student ? props.student.level : '',
    date: props.student ? props.student.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { studentname, level, date } = student;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [studentname, level, date];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const student = {
        id: uuidv4(),
        studentname,
        level,
        date
      };
      props.handleOnSubmit(student);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'level':
        if (value === '' || parseInt(value) === +value) {
          setStudent((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;

      default:
        setStudent((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="studentname"
            value={studentname}
            placeholder="Enter name of student"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="level">
          <Form.Label>Student level</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="level"
            value={level}
            placeholder="Enter student's current level"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="date"
            value={date}
            placeholder="Enter student's date of birth"
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

export default StudentForm;