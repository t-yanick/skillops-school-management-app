import React from 'react';
import _ from 'lodash';
import Classroom from './Classroom';

const ClassroomList = ({ classrooms, setClassrooms }) => {

  const handleRemoveClassroom = (id) => {
    setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
  };
  return (
    <React.Fragment>
      <div className="classroom-list">
        {!_.isEmpty(classrooms) ? (
          classrooms.map((classroom) => (
            <Classroom key={classroom.id} {...classroom} handleRemoveClassroom={handleRemoveClassroom} />
          ))
        ) : (
          <p className="message">No classroom available. Please add a new classroom.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ClassroomList;
