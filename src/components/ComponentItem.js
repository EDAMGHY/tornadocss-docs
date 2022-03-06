import React from 'react';
import Code from './Code';
import Header from './Header';
const ComponentItem = ({ name, nameClass, paragraph, usages }) => {
  return (
    <>
      <Header title={name} content={paragraph} />
      <section style={{ marginTop: '-1rem' }}>
        <h2>Usage</h2>
        {usages.map((use, index) => {
          return (
            <div key={index}>
              <div className='usage'>
                <h3>{use.header}</h3>
                {use.usageParagraph}
                <div className='box-container'>
                  <div className={`box ${nameClass}`}>{use.example}</div>
                </div>
              </div>
              <Code content={use.code} />
            </div>
          );
        })}
      </section>
    </>
  );
};
export default ComponentItem;
