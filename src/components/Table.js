import React from 'react';
import '../css/typography.css';
const Table = ({ name, classMk, example, scroll }) => {
  return (
    <>
      <h3>{name}</h3>
      <div className={`table-container ${scroll && scroll}`}>
        <table className='table'>
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
                    <tr key={index}>
                      <td>
                        <code>
                          <span className='tag'>
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
