import React from 'react';
import _ from 'lodash';
import Student from './Student';

const StudentsList = ({ students, setStudents }) => {

  const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  return (
    <React.Fragment>
      <div className="student-list">
        {!_.isEmpty(students) ? (
          students.map((student) => (
            <Student key={student.id} {...student} handleRemoveStudent={handleRemoveStudent} />
          ))
        ) : (
          <p className="message">No student registered. Please add a new student.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default StudentsList;
