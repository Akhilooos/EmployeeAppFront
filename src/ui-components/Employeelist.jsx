import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import React from 'react';

const Employeelist = ({ employeeData }) => {
  return (
    <>
      {employeeData && employeeData.map((employee) => (
        <EmployeeListItem key={employee.id}>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
          <div className="icon-container">
            <FontAwesomeIcon className='EditIcon' icon={faPenFancy} />
            <FontAwesomeIcon className='DeleteIcon' icon={faTrashCan} />
          </div>
        </EmployeeListItem>
      ))}
    </>
  );
}

export default Employeelist;

const EmployeeListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;

  .icon-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
