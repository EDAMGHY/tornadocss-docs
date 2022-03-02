import React from 'react';
import TableUtility from './TableUtility';
import Usage from './Usage';
const Utility = ({ property, name, values, usage }) => {
  const newName = name[0].toUpperCase() + name.slice(1);
  return (
    <section>
      <h1>{newName}:</h1>
      <p>Utilities for setting the {newName.toLowerCase()} of an element.</p>
      <TableUtility property={property} values={values} />
      <Usage usage={usage} />
    </section>
  );
};
export default Utility;
