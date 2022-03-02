import React from 'react';
import Tr from './Tr';
const TableUtility = ({ property, values }) => {
  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Class/Markup</th>
            <th>Property</th>
          </tr>
        </thead>
        <tbody>
          {values.map((items, index) => (
            <Tr key={index} property={property} {...items} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableUtility;
