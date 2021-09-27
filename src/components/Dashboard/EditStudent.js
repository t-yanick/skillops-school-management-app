import React from 'react';
import StudentForm from './StudentForm';
import { useParams } from 'react-router-dom';

const EditStudent = ({ history, students, setStudents }) => {
  const { id } = useParams();
  const studentToEdit = students.find((student) => student.id === id);

  const handleOnSubmit = (student) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents([student, ...filteredStudents]);
    history.push('/students');
  };

  return (
    <div>
      <StudentForm student={studentToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditStudent;
