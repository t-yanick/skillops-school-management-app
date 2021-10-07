import React from 'react';
import ClassroomForm from './ClassroomForm';
import { useParams } from 'react-router-dom';

const EditClassroom = ({ history, classrooms, setClassrooms }) => {
  const { id } = useParams();
  const classroomToEdit = classrooms.find((classroom) => classroom.id === id);

  const handleOnSubmit = (classroom) => {
    const filteredClassrooms = classrooms.filter((classroom) => classroom.id !== id);
    setClassrooms([classroom, ...filteredClassrooms]);
    history.push('/classrooms');
  };

  return (
    <div>
      <ClassroomForm classroom={classroomToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditClassroom;
