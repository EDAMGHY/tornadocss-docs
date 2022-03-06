import React from 'react';
import '../css/docs.css';

const Docs = ({ cssVersion }) => {
  return (
    <section>
      <h1>Introduction :</h1>
      <p>
        Get started with TornadoCSS, A framework for building responsive, sites,
        with unpkg <u>CDN</u> or Install the <u>NPM</u> package.
      </p>
      <h2>Quick Start :</h2>
      <p>
        Looking to quickly add TornadoCSS to your project? Use unpkg, a free
        open source CDN. or even use a package manager
      </p>
      <h2>CSS :</h2>
      <p>
        Copy-paste the stylesheet <strong>&lt;link&gt;</strong> into your
        <strong> &lt;head&gt;</strong> before all other stylesheets to load our
        CSS.
      </p>

      <code className='code'>
        &lt;<span className='tag'>link</span> <span className='attr'>rel</span>=
        <span className='value'>"stylesheet"</span>
        <span className='attr'>href</span>=
        <span className='value'>
          "https://unpkg.com/tornadocss@{cssVersion}/dist/css/tornado.min.css"
        </span>
        /&gt;
      </code>
      <h2>JS :</h2>
      <p>
        The Only Component that requires the use of JavaScript is The{' '}
        <strong>Navbar</strong> if you intend to use it you should include the{' '}
        <strong>&lt;script&gt;</strong> before the closing tag of{' '}
        <strong>&lt;body&gt;</strong>
      </p>

      <code className='code'>
        &lt;<span className='tag'>script</span>{' '}
        <span className='attr'>src</span>=
        <span className='value'>
          "https://unpkg.com/tornadocss@{cssVersion}/dist/js/tornado.min.js"
        </span>
        &gt;&lt;<span className='tag'>script</span>&gt;
      </code>
      <h2>NPM :</h2>
      <p>
        Using the NPM package Manager to install <strong>TornadoCSS</strong>
      </p>

      <code className='code'>
        <span className='attr'>npm</span> <span className='key'>install</span>{' '}
        <span>tornadocss</span>
      </code>
      <p>
        And Import the package in your App Level Project (index.js / App.js)
        <strong>(ReactJS)</strong>
      </p>
      <code className='code'>
        <span className='key'>import</span>{' '}
        <span className='value'>'tornadocss/dist/css/tornado.min.css'</span>
      </code>
    </section>
  );
};
export default Docs;
