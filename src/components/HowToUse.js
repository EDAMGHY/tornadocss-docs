import React from 'react';
const HowToUse = () => {
  return (
    <>
      <h2>How to Use</h2>
      <p>
        In order to use the Grid System you can start by creating a
        <strong>div</strong> with the class <strong>.row</strong> and creating a
        nested <strong>divs</strong> with the desired columns.
      </p>
      <p>
        -- The Grid supports{' '}
        <a href='breakpoints.html'>five responsive breakpoints</a> Breakpoints
        are based on min-width media queries, meaning they affect that
        breakpoint and all those above it (e.g., .col-4-sm applies to xs,sm, md,
        lg, and xl). This means you can control container and column sizing and
        behavior by each breakpoint.
      </p>
      <p>
        -- In order to center the Grid use can use <strong>.container</strong>{' '}
        for a responsive layout and <a href='containers.html'>containers</a>{' '}
        supports all viewports and devices,(e.g., .container-md,container-lg ,
        etc).
      </p>
      <p>
        -- For the gap between the columns you can use the{' '}
        <strong>.gap-*</strong> (from 0 to 5) that use <u>padding</u> and
        <u>margin</u> approach to control the spacing between them and ensure to
        be within the container. or you can use the <strong>.g-*</strong> (from
        0 to 5) that uses <u>gap</u> property to control the spacing
      </p>
    </>
  );
};
export default HowToUse;
