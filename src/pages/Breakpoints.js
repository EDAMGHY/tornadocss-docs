import React from 'react';
import Header from '../components/Header';
import Code from '../components/Code';
const Breakpoints = () => {
  return (
    <>
      <Header
        title='Breakpoints'
        content={
          <>
            <p>
              Breakpoints are customizable widths that determine how your
              responsive layout behaves across device or viewport sizes to build
              adaptive user interfaces.
            </p>
            <br />
            <p>
              Every utility class in Tornado can be applied conditionally at
              different breakpoints, which makes it a piece of cake to build
              complex responsive interfaces without ever leaving your HTML.
            </p>
            <br />
            <p>
              There are five breakpoints by default, inspired by common device
              resolutions:
            </p>
          </>
        }
      />
      <section style={{ paddingTop: '0px', marginTop: '0px' }}>
        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Prefix</th>
                <th>Min Width</th>
                <th>CSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>xs</span>
                </td>
                <td>
                  <span>0px</span>
                </td>
                <td>
                  <span>@media (min-width: 0px) &#123; .... &#125;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>sm</span>
                </td>
                <td>
                  <span>500px</span>
                </td>
                <td>
                  <span>@media (min-width: 500px) &#123; .... &#125;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>md</span>
                </td>
                <td>
                  <span>768px</span>
                </td>
                <td>
                  <span>@media (min-width: 768px) &#123; .... &#125;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>lg</span>
                </td>
                <td>
                  <span>990px</span>
                </td>
                <td>
                  <span>@media (min-width: 990px) &#123; .... &#125;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>xl</span>
                </td>
                <td>
                  <span>1200px</span>
                </td>
                <td>
                  <span>@media (min-width: 1200px) &#123; .... &#125; </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p>
          To add a utility but only have it take effect at a certain breakpoint,
          all you need to do is prefix the utility with the breakpoint name,
          followed by the <strong>`-`</strong> character:
        </p>
        <Code
          content={
            <>
              <span className='gray'>
                &lt;-- font by default md, lg on small screens , xl on tablet
                screens and 2xl on large screens--&gt;{' '}
              </span>
              <br />
              <br />
              &lt;<span className='tag'>p</span>{' '}
              <span className='attr'>class</span>=
              <span className='value'>
                "font-md sm-font-lg md-font-xl lg-font-2xl"
              </span>
              &gt;This is a simple paragraph.&lt;/<span className='tag'>p</span>
              &gt;
            </>
          }
        />
      </section>
    </>
  );
};
export default Breakpoints;
