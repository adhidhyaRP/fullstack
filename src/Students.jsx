import React from 'react';


const StudentList = ({ students }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Current Mentor</th>
            <th>Previous Mentor</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.CurrentMentor}</td>
              <td>{student.PreviousMentor}</td>
            </tr>
          ))}
        </tbody>
        </table>
     
    </div>
  );
};

export default StudentList;
