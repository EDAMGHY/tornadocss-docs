import React from 'react';
import Examples from '../components/Examples';
import GridOptions from '../components/GridOptions';
import Header from '../components/Header';
import HowToUse from '../components/HowToUse';
import '../css/grid.css';

const Grid = () => {
  return (
    <>
      <Header
        title='Grid System'
        content={
          <p>
            <strong>TornadoCSS</strong> provides a mobile-first approach to
            build responsive layouts of all shapes and sizes thanks to a twelve
            column system.
          </p>
        }
      />
      <section className='howtouse'>
        <HowToUse />
        <GridOptions />
        <Examples />
      </section>
    </>
  );
};

export default Grid;
