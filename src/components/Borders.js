import React from 'react';
import borders from '../utils/borders';
import Header from './Header';
import TableUtility from './TableUtility';
import Usage from './Usage';
const Borders = () => {
  return (
    <>
      <Header
        title='Borders'
        content={<p>Utilities for setting the Border of an element.</p>}
      />
      <section style={{ marginTop: '-1rem' }}>
        {borders.map((border) => {
          return (
            <>
              <h2>{border.name} :</h2>
              <TableUtility property={border.property} values={border.values} />
              <Usage usage={border.usage} />
            </>
          );
        })}
      </section>
    </>
  );
};
export default Borders;
