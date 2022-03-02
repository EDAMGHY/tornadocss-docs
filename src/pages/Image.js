import React from 'react';
import Code from '../components/Code';
import Header from '../components/Header';
const Image = () => {
  return (
    <>
      <Header
        title='Image'
        content={
          <p>
            When it comes for images We kept it simple by adding a{' '}
            <span className='tag'>.image</span> class that allows to object fit
            an image for a tag.
          </p>
        }
      />
      <section style={{ marginTop: '-1rem' }}>
        <div className='usage'>
          <h2>Usage :</h2>
          <div className='box-container'>
            <div className='box image-class'>
              <img
                src='https://source.unsplash.com/random/300x300'
                alt='random'
                className='image radius-xl'
              />
            </div>
          </div>
        </div>
        <Code
          content={
            <>
              &lt;<span className='tag'>img</span>{' '}
              <span className='attr'>src</span>=
              <span className='value'>
                "https://source.unsplash.com/random/300x300"
              </span>{' '}
              <span className='attr'>alt</span>=
              <span className='value'>"random image"</span>{' '}
              <span className='attr'>class</span>=
              <span className='value'>"image radius-xl"</span> /&gt; <br />
            </>
          }
        />
      </section>
    </>
  );
};
export default Image;
