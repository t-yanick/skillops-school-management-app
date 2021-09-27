import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Student = ({
  id,
  studentname,
  level,
  date,
  handleRemoveStudent
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="student-name">{studentname}</Card.Title>
        <div className="student-details">
          {/* <div>Name of student: {studentname}</div> */}
          <div>Class/Level: {level} </div>
          {/* <div>Date: {(date).toDateString()}</div> */}
          <div>Date: {date}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveStudent(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Student;
