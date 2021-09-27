import React from 'react';
import StudentForm from './StudentForm';

const AddStudent = ({ history, students, setStudents }) => {
  const handleOnSubmit = (student) => {
    setStudents([student, ...students]);
    history.push('/students')
  };

  return (
    <React.Fragment>
      <StudentForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddStudent;
