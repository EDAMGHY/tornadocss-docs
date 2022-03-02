import React from 'react';
const GridOptions = () => {
  return (
    <div>
      <h2>Grid Options :</h2>
      <p>
        TornadoCSS grid system can adapt across all five default breakpoints,
        and any breakpoints you customize. The six default grid tiers are as
        follow:
        <ul class='list'>
          <li>Base=0 (xs)</li>
          <li>Small (sm)</li>
          <li>Medium (md)</li>
          <li>Large (lg)</li>
          <li>Extra large (xl)</li>
        </ul>
        <p>
          As noted above, each of these breakpoints have their own container,
          unique class prefix, and modifiers. Here’s how the grid changes across
          these breakpoints:
        </p>
        <div class='table-container'>
          <table class='table'>
            <thead>
              <tr>
                <th></th>
                <th>xs(0px)</th>
                <th>sm(500px)</th>
                <th>md(768px)</th>
                <th>lg(990px)</th>
                <th>xl(1200px)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  Container <small>(max-width)</small> <br />
                  <small>default: 1100px</small>
                </th>
                <td>None 0px</td>
                <td>500px</td>
                <td>768px</td>
                <td>990px</td>
                <td>1200px</td>
              </tr>
              <tr>
                <th>Suffix</th>
                <td>col-*-xs</td>
                <td>col-*-sm</td>
                <td>col-*-md</td>
                <td>col-*-lg</td>
                <td>col-*-xl</td>
              </tr>
              <tr>
                <th>Number of cols</th>
                <td>12</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </p>
    </div>
  );
};
export default GridOptions;
