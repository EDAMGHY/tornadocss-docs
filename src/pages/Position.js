import React from 'react';
import Header from '../components/Header';
import TableUtility from '../components/TableUtility';
import Usage from '../components/Usage';
import position from '../utils/position';
const Position = () => {
  return (
    <>
      <Header
        title='Position'
        content={
          <p>
            Tornado supports the helpers that helps with positioning for quickly
            configuring the position of an element.
          </p>
        }
      />
      <section style={{ marginTop: '-1rem' }}>
        {position.map((pos, index) => (
          <div key={index}>
            {pos.name !== 'Position' && <h2>{pos.name} :</h2>}
            <TableUtility property={pos.property} values={pos.values} />
            <Usage usage={pos.usage} />
          </div>
        ))}
      </section>
    </>
  );
};
export default Position;
