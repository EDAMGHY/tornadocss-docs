import React from 'react';
import '../css/typography.css';
const Table = ({ name, classMk, example }) => {
  return (
    <>
      <h3>{name}</h3>
      <div class='table-container'>
        <table class='table'>
          <thead>
            <tr>
              <th>Class/Markup</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {classMk
              ? classMk.map((c, index) => {
                  return (
                    <tr>
                      <td>
                        <code>
                          <span class='tag'>
                            {c.includes('<') ? c : `.${c}`}
                          </span>
                        </code>
                      </td>
                      {example ? (
                        <td
                          dangerouslySetInnerHTML={{
                            __html: `<h${index + 1}>${example} h${
                              index + 1
                            } </h${index + 1}>`,
                          }}
                        />
                      ) : (
                        <td>
                          <p className={c}>This is a simple paragraph</p>
                        </td>
                      )}
                    </tr>
                  );
                })
              : 'Loading'}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
