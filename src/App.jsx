import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './ui-components/Navbar';
import Employeedashboard from './pages/Employeedashboard';
import Employeeform from './pages/Employeeform';

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  const addEmployeeData = (formData) => {
    setEmployeeData((prevData) => [...prevData, formData]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Employeedashboard employeeData={employeeData} />}
        />
        <Route
          path="/employee-form"
          element={<Employeeform onSubmit={addEmployeeData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
