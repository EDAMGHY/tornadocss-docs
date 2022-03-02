import React from 'react';
import Code from '../components/Code';
import Header from '../components/Header';
const Paragraph = () => {
  return (
    <>
      <Header
        title='Paragraph'
        content={
          <p>
            Make a paragraph to stands out by adding{' '}
            <span className='tag'>.main</span> or
            <span className='tag'>.sub</span>
          </p>
        }
      />
      <section style={{ marginTop: '-1rem' }}>
        <div className='usage'>
          <h2>Usage :</h2>
          <div className='box-container'>
            <div className='box paragraph'>
              <p className='main'>
                <span>main</span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                accusantium, eligendi nobis veritatis atque quas dolore, fuga
                officia placeat beatae rem animi dolorum nulla nisi dignissimos
                autem quo, aperiam quasi sunt culpa nostrum eos aliquam! Soluta
                a quis, repellendus eligendi earum ipsam. Dolorum accusantium
                soluta aliquid consectetur magnam sed nisi.
              </p>
              <p className='sub'>
                <span>sub</span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                accusantium, eligendi nobis veritatis atque quas dolore, fuga
                officia placeat beatae rem animi dolorum nulla nisi dignissimos
                autem quo, aperiam quasi sunt culpa nostrum eos aliquam! Soluta
                a quis, repellendus eligendi earum ipsam. Dolorum accusantium
                soluta aliquid consectetur magnam sed nisi.
              </p>
            </div>
          </div>
        </div>
        <Code
          content={
            <>
              &lt;<span className='tag'>p</span>{' '}
              <span className='attr'>class</span>=
              <span className='value'>"main"</span>&gt;.....&lt;/
              <span className='tag'>p</span>&gt; <br />
              &lt;<span className='tag'>p</span>{' '}
              <span className='attr'>class</span>=
              <span className='value'>"sub"</span>&gt;.....&lt;/
              <span className='tag'>p</span>&gt; <br />
            </>
          }
        />
      </section>
    </>
  );
};
export default Paragraph;
