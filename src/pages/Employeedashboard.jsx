import React, { useEffect, useState } from 'react';
import { getData } from '../API/eployeeapi';
import Employeelist from '../ui-components/Employeelist';
import { Link } from 'react-router-dom';

const Employeedashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const data = await getData();
        console.log('API Response:', data);
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <Employeelist employeeData={employeeData} />
      <Link to="/employee-form">Go to Employee Form</Link>
    </div>
  );
};

export default Employeedashboard;
