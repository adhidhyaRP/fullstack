import axios from 'axios';


const backendURL = 'http://localhost:3000/studentsDB';

const GetallStudents = async () => {
  const res = await axios.get(backendURL);
  return res;
};

export { GetallStudents };
