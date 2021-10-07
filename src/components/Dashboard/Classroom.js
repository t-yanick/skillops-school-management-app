import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Classroom = ({
  id,
  classroomname,
  student,
  specialty,
  handleRemoveClassroom
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="classroom">
      <Card.Body>
        <Card.Title className="classroom-name">{classroomname}</Card.Title>
        <div className="classroom-details">
          <div>Students: {student} </div>
          <div>Specialty: {specialty}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit-classroom/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveClassroom(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Classroom;
