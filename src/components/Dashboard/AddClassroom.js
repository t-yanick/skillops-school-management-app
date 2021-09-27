import React from 'react';
import ClassroomForm from './ClassroomForm';

const AddClassroom = ({ history, classrooms, setClassrooms }) => {
  const handleOnSubmit = (classroom) => {
    setClassrooms([classroom, ...classrooms]);
    history.push('/classrooms')
  };

  return (
    <React.Fragment>
      <ClassroomForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddClassroom;