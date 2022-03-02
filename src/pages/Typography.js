import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import typography from '../utils/typography';

const Typography = () => {
  const headings = [
    '<h1></h1>',
    '<h2></h2>',
    '<h3></h3>',
    '<h4></h4>',
    '<h5></h5>',
    '<h6></h6>',
  ];
  return (
    <>
      <Header
        title='Typography'
        content={
          <p>
            We provide some basic styling on header tags. In the example, you
            can see the 6 header tags' different sizes.
          </p>
        }
      />
      <section style={{ paddingTop: '0px', marginTop: '-2rem' }}>
        <Table classMk={headings} example='Heading' />
        <h2>Utilities</h2>
        <p>
          TornadoCSS supports a bunch of utility classes for{' '}
          <strong>text</strong> and <strong>font</strong> properties.
        </p>
        {typography.map((typo, index) => (
          <Table key={index} {...typo} />
        ))}
      </section>
    </>
  );
};
export default Typography;
