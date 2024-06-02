import React, { useEffect, useState } from 'react';
import { GetallStudents } from './apis';
import StudentList from './Students';

const App = () => {
  const [students, setStudents] = useState([]);

  const loadData = async () => {
    try {
      const response = await GetallStudents();
      console.log(response.data); // Check the data here
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <StudentList students={students} /> 
    </div>
  );
};

export default App;
