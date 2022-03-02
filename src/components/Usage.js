import React, { Fragment } from 'react';
const Usage = ({ usage: { nameClass, properties, syntax } }) => {
  return (
    <div className='usage'>
      <h2>Usage :</h2>
      <p>
        Use the{' '}
        <strong dangerouslySetInnerHTML={{ __html: `${syntax}` }}></strong> to
        set a {nameClass} to an element
      </p>
      <div className='box-container'>
        <div className={`box ${nameClass}`}>
          {nameClass === 'display'
            ? properties.map((p, index) => (
                <div key={index}>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
                    <span class={p}>{p}</span> Reprehen nulla ducimus neque quas
                    dolorem nostrum!
                  </p>
                </div>
              ))
            : nameClass === 'padding' || nameClass === 'margin'
            ? properties.map((p, index) => (
                <div key={index} class={p}>
                  <div>{p}</div>
                </div>
              ))
            : nameClass === 'flex'
            ? properties.map((p, index) => (
                <div key={index} class={p}>
                  <span>{p}</span>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              ))
            : nameClass === 'borders-style' || nameClass === 'borders-color'
            ? properties.map((p, index) => (
                <div key={index} className={p}>
                  {nameClass === 'borders-color'
                    ? `${p.split('-')[1]}-30`
                    : p.split('-')[1]}
                </div>
              ))
            : nameClass === 'position'
            ? properties.map((p, index) => (
                <div key={index} className='pos-relative'>
                  <span className={p}>{p}</span>
                </div>
              ))
            : nameClass === 'top' ||
              nameClass === 'left' ||
              nameClass === 'right' ||
              nameClass === 'bottom'
            ? properties.map((p, index) => (
                <div key={index} className='pos-relative'>
                  <span className={`pos-absolute ${p}`}>{p}</span>
                </div>
              ))
            : properties.map((p, index) => (
                <div key={index} className={p}>
                  {p}
                </div>
              ))}
        </div>
      </div>
      <code className='example'>
        {nameClass === 'flex'
          ? properties.map((p, index) => (
              <Fragment key={index}>
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"display-f {p}"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>div</span>
                &gt;1&lt;/
                <span className='tag'>div</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>div</span>
                &gt;2&lt;/
                <span className='tag'>div</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>div</span>
                &gt;3&lt;/
                <span className='tag'>div</span>&gt; <br /> &lt;/
                <span className='tag'>div</span>&gt; <br />
              </Fragment>
            ))
          : nameClass === 'top' ||
            nameClass === 'left' ||
            nameClass === 'right' ||
            nameClass === 'bottom'
          ? properties.map((p, index) => (
              <Fragment key={index}>
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"pos-absolute {p}"</span>&gt; {p} &lt;/
                <span className='tag'>div</span>&gt; <br />
              </Fragment>
            ))
          : properties.map((p, index) => (
              <Fragment key={index}>
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"{p}"</span>&gt; {p} &lt;/
                <span className='tag'>div</span>&gt; <br />
              </Fragment>
            ))}
      </code>
    </div>
  );
};
export default Usage;
