import React from 'react';
import Code from '../components/Code';
import Header from '../components/Header';
const Alerts = () => {
  return (
    <>
      <Header
        title='Alerts'
        content={
          <>
            <p>
              We provide a simple and elegant way to display alerts for any
              circumstances or actions from the users with bunch of{' '}
              <strong>TornadoCSS</strong> colors for both{' '}
              <span className='tag'>dark</span> and{' '}
              <span className='tag'>light</span> styles
            </p>
            <p>
              Badges can notify you that there are new or unread messages or
              notifications, as you already have guessed they also come with the{' '}
              <strong>Tornado</strong> colors palettes.
            </p>
            <p>
              Buttons come in multiple color palettes with tow flavors in hand{' '}
              <span className='tag'>basic</span> and{' '}
              <span className='tag'>outlined</span>
            </p>
            <p>
              Cards are a way of displaying data (content) or images into a
              pre-styled containers, We provide a default setup for these
              containers with a flexible customization with all of Our color
              palettes (blue to orange / gray not included) from 1 to 8
            </p>
            <p>
              Lists are a flexible and powerful component for displaying a
              series of content. We provide a series of list for all of Our main
              color palettes small and larger are included.
            </p>
            <p>
              Forms are an essential components for every project. Here are some
              examples and their usages to get familiar with how forms work in{' '}
              <strong>TornadoCSS</strong>
            </p>
            <p>
              Create a Responsive Navbar that can support images with{' '}
              <strong>TornadoCSS</strong>
            </p>
          </>
        }
      />
      <section style={{ marginTop: '-1rem' }}>
        <h2>Usage</h2>
        <div className='usage'>
          <h3>Simple Alert</h3>
          <p>
            Alerts are available for any length of text. and for over 15 color
            palette you can choose from.{' '}
          </p>
          <div className='box-container'>
            <div className='box alerts'>
              <div className='alert alert-default'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
              <div className='alert alert-blue-dark'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
              <div className='alert alert-blue-light'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
              <div className='alert alert-red-dark'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
              <div className='alert alert-red-light'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
              <div className='alert alert-green-dark'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
              <div className='alert alert-green-light'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert"</span>&gt; Lorem ipsum, dolor
                sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-blue-dark"</span>&gt; Lorem
                ipsum, dolor sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-blue-light"</span>&gt;
                Lorem ipsum, dolor sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-red-dark"</span>&gt; Lorem
                ipsum, dolor sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-red-light"</span>&gt; Lorem
                ipsum, dolor sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-green-dark"</span>&gt;
                Lorem ipsum, dolor sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-green-light"</span>&gt;
                Lorem ipsum, dolor sit amet consectetur adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Alert Link</h3>
          <p>
            Use the .alert-link utility class to quickly provide matching
            colored links within any alert.
          </p>
          <div className='box-container'>
            <div className='box alerts'>
              <div className='alert alert-yellow-dark'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-yellow-light'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-orange-dark'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-orange-light'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-purple-dark'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-purple-light'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-white'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
              <div className='alert alert-black'>
                Lorem ipsum, dolor sit amet&nbsp;
                <a href='https://github.com/EDAMGHY' className='alert-link'>
                  consectetur
                </a>
                &nbsp;adipisicing.
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-yellow-dark"</span>&gt;
                Lorem ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-yellow-light"</span>&gt;
                Lorem ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-orange-dark"</span>&gt;
                Lorem ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-orange-light"</span>&gt;
                Lorem ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-purple-dark"</span>&gt;
                Lorem ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-purple-light"</span>&gt;
                Lorem ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-white"</span>&gt; Lorem
                ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt; <br />
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"alert alert-black"</span>&gt; Lorem
                ipsum, dolor sit amet &lt;<span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>"#"</span>{' '}
                <span class='attr'>class</span>=
                <span className='value'>"alert-link"</span>&gt;consectetur&lt;/
                <span className='tag'>a</span>&gt; adipisicing. &lt;/
                <span className='tag'>div</span>&gt;
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Simple Badge</h3>
          <p>
            Use these to create a nice looking simple badges across your
            project.
          </p>
          <div className='box-container'>
            <div className='box badges'>
              <span className='badge badge-default'>badge</span>
              <span className='badge badge-blue'>badge</span>
              <span className='badge badge-red'>badge</span>
              <span className='badge badge-green'>badge</span>
              <span className='badge badge-yellow'>badge</span>
              <span className='badge badge-purple'>badge</span>
              <span className='badge badge-orange'>badge</span>
              <span className='badge badge-white'>badge</span>
              <span className='badge badge-black'>badge</span>
            </div>
          </div>
          <Code
            content={
              <>
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-blue"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-red"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-green"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-yellow"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-purple"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-orange"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-white"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;<span className='tag'>span</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-black"</span>&gt; badge &lt;/
                <span className='tag'>span</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Buttons</h3>
          <p>
            You can also use <strong>badges</strong> in buttons to provide a
            counter.
          </p>
          <div className='box-container'>
            <div className='box badges'>
              <button className='btn'>
                Click Me
                <span className='badge badge-default margin-1'>1</span>
              </button>

              <button className='btn-red-30'>
                Click Me
                <span className='badge badge-red margin-1'>2</span>
              </button>

              <button className='btn-green-30'>
                Click Me
                <span className='badge badge-green margin-1'>3</span>
              </button>

              <button className='btn-purple-30'>
                Click Me
                <span className='badge badge-purple margin-1'>4</span>
              </button>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Click Me <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>
                  span
                </span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge"</span>&gt;1&lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-red-30"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Click Me <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>
                  span
                </span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-red"</span>&gt;2&lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-green-30"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Click Me <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>
                  span
                </span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-green"</span>&gt;3&lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-purple-30"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Click Me <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className='tag'>
                  span
                </span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"badge-purple"</span>&gt;4&lt;/
                <span className='tag'>span</span>&gt; <br />
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Basic Buttons</h3>
          <p>
            Use the basic styles for the buttons{' '}
            <span className='tag'>.btn-`color`-`number`0</span> (from 1 to 6)
            with <span className='tag'>.btn</span> is the default
          </p>
          <div className='box-container'>
            <div className='box buttons'>
              <div>
                <button className='btn'>Click Me</button>
              </div>
              <div>
                <button className='btn-blue-10'>Click Me</button>
                <button className='btn-blue-20'>Click Me</button>
                <button className='btn-blue-30'>Click Me</button>
                <button className='btn-blue-40'>Click Me</button>
                <button className='btn-blue-50'>Click Me</button>
                <button className='btn-blue-60'>Click Me</button>
              </div>
              <div>
                <button className='btn-red-10'>Click Me</button>
                <button className='btn-red-20'>Click Me</button>
                <button className='btn-red-30'>Click Me</button>
                <button className='btn-red-40'>Click Me</button>
                <button className='btn-red-50'>Click Me</button>
                <button className='btn-red-60'>Click Me</button>
              </div>
              <div>
                <button className='btn-green-10'>Click Me</button>
                <button className='btn-green-20'>Click Me</button>
                <button className='btn-green-30'>Click Me</button>
                <button className='btn-green-40'>Click Me</button>
                <button className='btn-green-50'>Click Me</button>
                <button className='btn-green-60'>Click Me</button>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn"</span>&gt; Click Me &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-blue-*0"</span>&gt; Click Me
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-red-*0"</span>&gt; Click Me
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-green-*0"</span>&gt; Click Me
                &lt;/
                <span className='tag'>button</span>&gt;
                <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Outlined Buttons</h3>
          <p>
            Use the outlined styles for the buttons{' '}
            <span className='tag'>.btn-outlined-`color`-`number`0</span> (from 1
            to 6) with <span className='tag'>.btn-outlined</span> is the default
          </p>
          <div className='box-container'>
            <div className='box buttons'>
              <div>
                <button className='btn-outlined-yellow-10'>Click Me</button>
                <button className='btn-outlined-yellow-20'>Click Me</button>
                <button className='btn-outlined-yellow-30'>Click Me</button>
                <button className='btn-outlined-yellow-40'>Click Me</button>
                <button className='btn-outlined-yellow-50'>Click Me</button>
                <button className='btn-outlined-yellow-60'>Click Me</button>
              </div>
              <div>
                <button className='btn-outlined-purple-10'>Click Me</button>
                <button className='btn-outlined-purple-20'>Click Me</button>
                <button className='btn-outlined-purple-30'>Click Me</button>
                <button className='btn-outlined-purple-40'>Click Me</button>
                <button className='btn-outlined-purple-50'>Click Me</button>
                <button className='btn-outlined-purple-60'>Click Me</button>
              </div>
              <div>
                <button className='btn-outlined-orange-10'>Click Me</button>
                <button className='btn-outlined-orange-20'>Click Me</button>
                <button className='btn-outlined-orange-30'>Click Me</button>
                <button className='btn-outlined-orange-40'>Click Me</button>
                <button className='btn-outlined-orange-50'>Click Me</button>
                <button className='btn-outlined-orange-60'>Click Me</button>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-outlined-yellow-*0"</span>&gt;
                Click Me &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-outlined-purple-*0"</span>&gt;
                Click Me &lt;/
                <span className='tag'>button</span>&gt;
                <br />
                {/* one */}
                &lt;<span className='tag'>button</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"btn btn-outlined-orange-*0"</span>&gt;
                Click Me &lt;/
                <span className='tag'>button</span>&gt;
                <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Basic Card</h3>
          <p>
            Use this default pre-styled Card component and add all the colors u
            need for your own card style.
          </p>
          <div className='box-container'>
            <div className='box cards'>
              <div class='card'>
                <div class='card-context'>
                  <h1 class='card-context-title'>This is a title</h1>
                  <p class='card-context-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    sunt, quo totam aliquam praesentium ducimus tempore sapiente
                    quia nulla optio? Lorem ipsum, dolor sit amet consectetur .
                    Libero laboriosam laborum exercitationem
                  </p>
                  <a href='https://github.com/EDAMGHY' class='btn'>
                    View Article
                  </a>
                </div>
              </div>
              <div class='card'>
                <div class='card-context'>
                  <h1 class='card-context-title text-red-10'>
                    This is a title
                  </h1>
                  <p class='card-context-text text-red-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    sunt, quo totam aliquam praesentium ducimus tempore sapiente
                    quia nulla optio? Lorem ipsum, dolor sit amet consectetur .
                    Libero laboriosam laborum exercitationem
                  </p>
                  <a href='https://github.com/EDAMGHY' class='btn-red-30'>
                    View Article
                  </a>
                </div>
              </div>
              <div class='card'>
                <div class='card-context'>
                  <h1 class='card-context-title text-purple-10'>
                    This is a title
                  </h1>
                  <p class='card-context-text text-purple-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    sunt, quo totam aliquam praesentium ducimus tempore sapiente
                    quia nulla optio? Lorem ipsum, dolor sit amet consectetur .
                    Libero laboriosam laborum exercitationem
                  </p>
                  <a href='https://github.com/EDAMGHY' class='btn-purple-30'>
                    View Article
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'card'</span>&gt; <br />
                &nbsp;&nbsp; &lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'card-context'</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>h1</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-title'</span>
                &gt; This is a title &lt;/<span className='tag'>
                  h1
                </span>&gt; <br /> &nbsp;&nbsp; &nbsp;&nbsp;&lt;
                <span className='tag'>p</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-text'</span> &gt; ....
                &lt;/<span className='tag'>p</span>&gt; <br /> &nbsp;&nbsp;
                &nbsp;&nbsp; &lt;
                <span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'docs'</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'btn'</span> &gt; View Article &lt;/
                <span className='tag'>a</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span> &gt; <br />{' '}
                &lt;/
                <span className='tag'>div</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'card bg-red-60'</span>&gt; <br />
                &nbsp;&nbsp; &lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'card-context '</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>h1</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-title text-red-10'</span>
                &gt; This is a title &lt;/<span className='tag'>
                  h1
                </span>&gt; <br /> &nbsp;&nbsp; &nbsp;&nbsp;&lt;
                <span className='tag'>p</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-text text-red-10'</span>{' '}
                &gt; .... &lt;/<span className='tag'>p</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'docs'</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'btn-red-30'</span> &gt; View Article
                &lt;/<span className='tag'>a</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span> &gt; <br />{' '}
                &lt;/
                <span className='tag'>div</span> &gt;
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'card bg-purple-60'</span>&gt; <br />
                &nbsp;&nbsp; &lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'card-context '</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>h1</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>
                  'card-context-title text-purple-10'
                </span>
                &gt; This is a title &lt;/<span className='tag'>h1</span>&gt;{' '}
                <br /> &nbsp;&nbsp; &nbsp;&nbsp;&lt;
                <span className='tag'>p</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>
                  'card-context-text text-purple-10'
                </span>{' '}
                &gt; .... &lt;/<span className='tag'>p</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'docs'</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'btn-purple-30'</span> &gt; View Article
                &lt;/<span className='tag'>a</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span> &gt; <br />{' '}
                &lt;/
                <span className='tag'>div</span> &gt;
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Image Card</h3>
          <p>
            You can also use the Card Component to display an img alongside the
            content you are working with.
          </p>
          <div className='box-container'>
            <div className='box cards'>
              <div class='card'>
                <div class='image-container'>
                  <img src='https://source.unsplash.com/random' alt='' />
                </div>
                <div class='card-context'>
                  <h1 class='card-context-title'>This is a title</h1>
                  <p class='card-context-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    sunt, quo totam aliquam praesentium ducimus tempore sapiente
                    quia nulla optio? Lorem ipsum, dolor sit amet consectetur .
                    Libero laboriosam laborum exercitationem
                  </p>
                  <a href='https://github.com/EDAMGHY' class='btn'>
                    View Article
                  </a>
                </div>
              </div>
              <div class='card'>
                <div class='image-container'>
                  <img src='https://source.unsplash.com/random' alt='' />
                </div>
                <div class='card-context'>
                  <h1 class='card-context-title text-red-10'>
                    This is a title
                  </h1>
                  <p class='card-context-text text-red-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    sunt, quo totam aliquam praesentium ducimus tempore sapiente
                    quia nulla optio? Lorem ipsum, dolor sit amet consectetur .
                    Libero laboriosam laborum exercitationem
                  </p>
                  <a href='https://github.com/EDAMGHY' class='btn-red-30'>
                    View Article
                  </a>
                </div>
              </div>
              <div class='card'>
                <div class='image-container'>
                  <img src='https://source.unsplash.com/random' alt='' />
                </div>
                <div class='card-context'>
                  <h1 class='card-context-title text-purple-10'>
                    This is a title
                  </h1>
                  <p class='card-context-text text-purple-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    sunt, quo totam aliquam praesentium ducimus tempore sapiente
                    quia nulla optio? Lorem ipsum, dolor sit amet consectetur .
                    Libero laboriosam laborum exercitationem
                  </p>
                  <a href='https://github.com/EDAMGHY' class='btn-purple-30'>
                    View Article
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'card'</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'image-container'</span> &gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>img</span>{' '}
                <span className='attr'>src</span>=
                <span className='value'>
                  'https://source.unsplash.com/random'
                </span>{' '}
                <span className='attr'>alt</span>=
                <span className='value'>'random image'</span> /&gt;
                <br />
                &nbsp;&nbsp; &lt;/
                <span className='tag'>div</span>&gt;
                <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'card-context'</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>h1</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-title'</span>
                &gt; This is a title &lt;/<span className='tag'>
                  h1
                </span>&gt; <br /> &nbsp;&nbsp; &nbsp;&nbsp;&lt;
                <span className='tag'>p</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-text'</span> &gt; ....
                &lt;/<span className='tag'>p</span>&gt; <br /> &nbsp;&nbsp;
                &nbsp;&nbsp; &lt;
                <span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'docs'</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'btn'</span> &gt; View Article &lt;/
                <span className='tag'>a</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span> &gt; <br />{' '}
                &lt;/
                <span className='tag'>div</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'card bg-red-60'</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'image-container'</span> &gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>img</span>{' '}
                <span className='attr'>src</span>=
                <span className='value'>
                  'https://source.unsplash.com/random'
                </span>{' '}
                <span className='attr'>alt</span>=
                <span className='value'>'random image'</span> /&gt;
                <br />
                &nbsp;&nbsp; &lt;/
                <span className='tag'>div</span>&gt;
                <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'card-context'</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>h1</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-title text-red-10'</span>
                &gt; This is a title &lt;/<span className='tag'>
                  h1
                </span>&gt; <br /> &nbsp;&nbsp; &nbsp;&nbsp;&lt;
                <span className='tag'>p</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'card-context-text text-red-10'</span>{' '}
                &gt; .... &lt;/<span className='tag'>p</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'docs'</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'btn-red-10'</span> &gt; View Article
                &lt;/
                <span className='tag'>a</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span> &gt; <br />{' '}
                &lt;/
                <span className='tag'>div</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'card bg-purple-10'</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'image-container'</span> &gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>img</span>{' '}
                <span className='attr'>src</span>=
                <span className='value'>
                  'https://source.unsplash.com/random'
                </span>{' '}
                <span className='attr'>alt</span>=
                <span className='value'>'random image'</span> /&gt;
                <br />
                &nbsp;&nbsp; &lt;/
                <span className='tag'>div</span>&gt;
                <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'card-context'</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>h1</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>
                  'card-context-title text-purple-10'
                </span>
                &gt; This is a title &lt;/<span className='tag'>h1</span>&gt;{' '}
                <br /> &nbsp;&nbsp; &nbsp;&nbsp;&lt;
                <span className='tag'>p</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>
                  'card-context-text text-purple-10'
                </span>{' '}
                &gt; .... &lt;/<span className='tag'>p</span>&gt; <br />{' '}
                &nbsp;&nbsp; &nbsp;&nbsp; &lt;
                <span className='tag'>a</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'docs'</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'btn-purple-10'</span> &gt; View Article
                &lt;/
                <span className='tag'>a</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span> &gt; <br />{' '}
                &lt;/
                <span className='tag'>div</span>&gt; <br />
              </>
            }
          />
        </div>{' '}
        <div className='usage'>
          <h3>Simple List width 100%</h3>
          <p>
            Use <span className='tag'>.items</span> class on a{' '}
            <span className='tag'>ul</span> tag for a basic list, as you already
            have guessed they also come with Our color palettes.
          </p>
          <div className='box-container'>
            <div className='box lists'>
              <ul class='items'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
              <ul class='items'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
              <ul class='items'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items items-black"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items items-white"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Simple List 400px</h3>
          <p>
            Use <span className='tag'>.items-sm</span> class on a{' '}
            <span className='tag'>ul</span> tag for a basic small list (400px).
          </p>
          <div className='box-container'>
            <div className='box lists'>
              <ul class='items-sm'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
              <ul class='items-sm'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items items-red"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items items-green"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Simple List</h3>
          <p>
            Use <span className='tag'>.items</span> class on a{' '}
            <span className='tag'>ul</span> tag for a basic large list (600px).
          </p>
          <div className='box-container'>
            <div className='box lists'>
              <ul class='items-lg'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
              <ul class='items-lg'>
                <li class='item'>Item1</li>
                <li class='item'>Item2</li>
                <li class='item'>Item3</li>
                <li class='item'>Item4</li>
              </ul>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items items-blue"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items items-yellow"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item1&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item2&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item3&lt;/
                <span className='tag'>li</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>li</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt;Item4&lt;/
                <span className='tag'>li</span>&gt; <br /> &lt;/
                <span className='tag'>ul</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Content Between List</h3>
          <p>
            Use <span className='tag'>.items-between</span> class on a{' '}
            <span className='tag'>ul</span> for a space between list the{' '}
            <span className='tag'>sm</span> and <span className='tag'>lg</span>{' '}
            also work.
          </p>
          <div className='box-container'>
            <div className='box lists'>
              <ul class='items-between'>
                <div class='item'>
                  <h3>1</h3>
                  <h3>Item1</h3>
                </div>

                <div class='item'>
                  <h3>2</h3>
                  <h3>Item2</h3>
                </div>

                <div class='item'>
                  <h3>3</h3>
                  <h3>Item3</h3>
                </div>

                <div class='item'>
                  <h3>4</h3>
                  <h3>Item4</h3>
                </div>
              </ul>
              <ul class='items-between'>
                <div class='item'>
                  <h3>1</h3>
                  <h3>Item1</h3>
                </div>

                <div class='item'>
                  <h3>2</h3>
                  <h3>Item2</h3>
                </div>

                <div class='item'>
                  <h3>3</h3>
                  <h3>Item3</h3>
                </div>

                <div class='item'>
                  <h3>4</h3>
                  <h3>Item4</h3>
                </div>
              </ul>
              <ul class='items-between'>
                <div class='item'>
                  <h3>1</h3>
                  <h3>Item1</h3>
                </div>

                <div class='item'>
                  <h3>2</h3>
                  <h3>Item2</h3>
                </div>

                <div class='item'>
                  <h3>3</h3>
                  <h3>Item3</h3>
                </div>

                <div class='item'>
                  <h3>4</h3>
                  <h3>Item4</h3>
                </div>
              </ul>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items-between"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;1&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item1&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;2&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item2&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;3&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item3&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;4&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item4&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &lt;/
                <span className='tag'>ul</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items-between items-purple"</span>&gt;{' '}
                <br />
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;1&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item1&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;2&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item2&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;3&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item3&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;4&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item4&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &lt;/
                <span className='tag'>ul</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"items-between items-orange"</span>&gt;{' '}
                <br />
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;1&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item1&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;2&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item2&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;3&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item3&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &nbsp;&nbsp; &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"item"</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;4&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>h3</span>
                &gt;Item4&lt;/<span className='tag'>h3</span>&gt; <br />
                &nbsp;&nbsp;&lt;/<span className='tag'>div</span>&gt; <br />{' '}
                &lt;/
                <span className='tag'>ul</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Simple Input</h3>
          <p>
            Use <span className='tag'>.form-line</span> or{' '}
            <span className='tag'>.form-line-`color`</span> class to form a
            input with its label and as expected they come also with Our color
            palettes.
          </p>
          <div className='box-container'>
            <div className='box forms'>
              <div>
                <div class='form-line'>
                  <label for='textInput'>Text Input</label>
                  <input
                    type='text'
                    placeholder='Text Input...'
                    id='textInput'
                  />
                </div>
                <div class='form-line purple'>
                  <label for='numberInput'>Number Input</label>
                  <input
                    type='number'
                    placeholder='Number Input...'
                    id='numberInput'
                  />
                </div>
              </div>
              <div>
                <div class='form-line orange'>
                  <label for='emailInput'>Email Input</label>
                  <input
                    type='email'
                    placeholder='Email Input...'
                    id='emailInput'
                  />
                </div>
                <div class='form-line blue'>
                  <label for='dateInput'>Date Input</label>
                  <input
                    type='date'
                    placeholder='Date Input...'
                    id='dateInput'
                  />
                </div>
              </div>
              <div>
                <div class='form-line form-line-red'>
                  <label for='fileInput'>File Input</label>
                  <input
                    type='file'
                    placeholder='File Input...'
                    id='fileInput'
                  />
                </div>
                <div class='form-line form-line-green'>
                  <label for='rangeInput'>Range Input</label>
                  <input
                    type='range'
                    placeholder='Range Input...'
                    id='rangeInput'
                  />
                </div>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'form-line'</span> &gt; <br />{' '}
                &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'textInput'</span> &gt;Text Input&lt;/
                <span className='tag'>label</span> &gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'text'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Text Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'textInput'</span>
                /&gt; <br /> &lt;/<span className='tag'>div</span> &gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'form-line-orange'</span> &gt; <br />{' '}
                &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'emailInput'</span> &gt;Email Input&lt;/
                <span className='tag'>label</span> &gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'email'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Email Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'emailInput'</span>
                /&gt; <br /> &lt;/<span className='tag'>div</span> &gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'form-line-purple'</span> &gt; <br />{' '}
                &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'numberInput'</span> &gt;Number
                Input&lt;/
                <span className='tag'>label</span> &gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'number'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Number Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'numberInput'</span>
                /&gt; <br /> &lt;/<span className='tag'>div</span> &gt;
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Radio & Checkbox Inputs </h3>
          <p>
            Use <span className='tag'>.radio/check-line</span> or{' '}
            <span className='tag'>.radio/check-line-`color`</span> class to form
            a input with its label and as expected they come also with Our color
            palettes.
          </p>
          <div className='box-container'>
            <div className='box forms'>
              <div>
                <div class='radio-line'>
                  <input type='radio' id='radioInput' />
                  <label for='radioInput'>Radio Input</label>
                </div>
                <div class='radio-line'>
                  <input type='radio' id='radioInputRadioed' checked />
                  <label for='radioInputRadioed'>Radio Input</label>
                </div>
                <div class='radio-line'>
                  <input type='radio' id='radioInputDisa' disabled />
                  <label for='radioInputDisa'>Radio Input</label>
                </div>
              </div>
              <div>
                <div class='check-line-blue'>
                  <input type='checkbox' id='checkboxInput' />
                  <label for='checkboxInput'>Checkbox Input</label>
                </div>
                <div class='check-line-blue'>
                  <input type='checkbox' id='checkboxInputCheckboxed' checked />
                  <label for='checkboxInputCheckboxed'>Checkbox Input</label>
                </div>
                <div class='check-line-blue'>
                  <input type='checkbox' id='checkboxInputDisa' disabled />
                  <label for='checkboxInputDisa'>Checkbox Input</label>
                </div>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'radio-line'</span> &gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'radio'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Radio Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'radioInput'</span>
                /&gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'radioInput'</span> &gt;Radio Input&lt;/
                <span className='tag'>label</span> &gt; <br />
                &lt;/<span className='tag'>div</span> &gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'radio-line'</span> &gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'radio'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Radio Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'radioInput'</span>{' '}
                <span className='attr'>checked</span>
                /&gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'radioInput'</span> &gt;Radio Input&lt;/
                <span className='tag'>label</span> &gt; <br />
                &lt;/<span className='tag'>div</span> &gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'radio-line'</span> &gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'radio'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Radio Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'radioInput'</span>{' '}
                <span className='attr'>disabled</span>
                /&gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'radioInput'</span> &gt;Radio Input&lt;/
                <span className='tag'>label</span> &gt; <br />
                &lt;/<span className='tag'>div</span> &gt; <br />
                {/* one */}
                &lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>'check-line-blue'</span> &gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>input</span>{' '}
                <span className='attr'>type</span> ={' '}
                <span className='value'>'checkbox'</span>
                <span className='attr'>placeholder</span> ={' '}
                <span className='value'>'Checkbox Input...'</span>
                <span className='attr'>id</span> ={' '}
                <span className='value'>'checkboxInput'</span>
                /&gt; <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>label</span>{' '}
                <span className='attr'>for</span> ={' '}
                <span className='value'>'checkboxInput'</span> &gt;Checkbox
                Input&lt;/
                <span className='tag'>label</span> &gt; <br />
                &lt;/<span className='tag'>div</span> &gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Select </h3>
          <p>
            Use <span className='tag'>.select-line</span> or{' '}
            <span className='tag'>.select-line-`color`</span> class to form a
            input with its label and as expected they come also with Our color
            palettes.
          </p>
          <div className='box-container'>
            <div className='box forms'>
              <div>
                <select class='select-line-yellow' id='countries'>
                  <option disabled selected>
                    Select Country
                  </option>
                  <option value='USA'>USA</option>
                  <option value='Canada'>Canada</option>
                  <option value='UK'>UK</option>
                </select>
              </div>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>select</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>"select-line-yellow"</span>&gt; <br />
                &nbsp;&nbsp; &lt;<span className='tag'>option</span>{' '}
                <span className='attr'>value</span>=
                <span className='value'>"item"</span>&gt;Select Country&lt;/
                <span className='tag'>option</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>option</span>{' '}
                <span className='attr'>value</span>=
                <span className='value'>"USA"</span>&gt;USA&lt;/
                <span className='tag'>option</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>option</span>{' '}
                <span className='attr'>value</span>=
                <span className='value'>"Canada"</span>&gt;Canada&lt;/
                <span className='tag'>option</span>&gt; <br /> &nbsp;&nbsp; &lt;
                <span className='tag'>option</span>{' '}
                <span className='attr'>value</span>=
                <span className='value'>"UK"</span>&gt;UK&lt;/
                <span className='tag'>option</span>&gt; <br /> &lt;/
                <span className='tag'>select</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>TextArea </h3>
          <p>
            Use <span className='tag'>.textarea-`color`</span> class to form a
            input with its label and as expected they come also with Our color
            palettes.
          </p>
          <div className='box-container'>
            <div className='box forms'>
              <textarea class='textarea-red' placeholder='TextArea Input...'>
                this is a textarea
              </textarea>
              <textarea
                class='textarea-red'
                placeholder='TextArea Input...'
                disabled
              >
                this is a textarea
              </textarea>
            </div>
          </div>
          <Code
            content={
              <>
                {/* one */}
                &lt;<span className='tag'>textarea</span>{' '}
                <span className='attr'>class</span>={' '}
                <span className='value'>'textarea-red'</span>{' '}
                <span className='attr'>placeholder</span>={' '}
                <span className='value'>'TextArea Input...'</span> &gt; this is
                a textarea &lt;/
                <span className='tag'>textarea</span>&gt; <br />
                {/* one */}
                &lt;<span className='tag'>textarea</span>{' '}
                <span className='attr'>class</span>={' '}
                <span className='value'>'textarea-red'</span>{' '}
                <span className='attr'>placeholder</span>={' '}
                <span className='value'>'TextArea Input...'</span>{' '}
                <span className='attr'>disabled</span> &gt; this is a textarea
                &lt;/
                <span className='tag'>textarea</span>&gt; <br />
              </>
            }
          />
        </div>
        <div className='usage'>
          <h3>Basic Navbar</h3>
          <p>
            Use <span className='tag'>.navbar</span> class for a default colors
            or You can add{' '}
            <span className='tag'>.navbar-`color`-`number`0</span> (number :
            from 1 to 6) with Our color palette
          </p>
          <div className='box-container'>
            <div className='box navbars'>
              <nav class='navbar navbar-blue-60'>
                <div class='container navbar-container' id='main-navbar'>
                  <a href='https://github.com/EDAMGHY' class='logo'>
                    Navbar
                  </a>
                  {/* <img src="https:source.unsplash.com/random" class="logo-image" alt="" />  */}
                  <ul class='navbar-list'>
                    <li>
                      <a class='current' href=''>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/EDAMGHY'>About</a>
                    </li>
                    <li>
                      <a href='https://github.com/EDAMGHY'>Services</a>
                    </li>
                    <li>
                      <a href='https://github.com/EDAMGHY'>Projects</a>
                    </li>
                    <li>
                      <a href='https://github.com/EDAMGHY'>Contact</a>
                    </li>
                  </ul>
                </div>
                <div class='container navbar-container' id='mobile-navbar'>
                  <a href='https://github.com/EDAMGHY' class='logo'>
                    Navbar
                  </a>
                  {/* <img src="https:source.unsplash.com/random" class="logo-image" alt="" />  */}
                  <button id='open-nav'>
                    <i class='fas fa-bars'></i>
                  </button>
                </div>
              </nav>
              <nav class='navbar-mobile navbar-mobile-blue-60' id='list-mobile'>
                <i class='fas fa-times' id='close-nav'></i>
                <ul class='mobile-list'>
                  <li>
                    <a class='current' href='https://github.com/EDAMGHY'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/EDAMGHY'>About</a>
                  </li>
                  <li>
                    <a href='https://github.com/EDAMGHY'>Services</a>
                  </li>
                  <li>
                    <a href='https://github.com/EDAMGHY'>Projects</a>
                  </li>
                  <li>
                    <a href='https://github.com/EDAMGHY'>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <Code
            content={
              <>
                &lt;<span className='tag'>nav</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'navbar navbar-blue-60'</span>&gt;
                <br />
                &nbsp;&lt;<span className='tag'>div</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'container navbar-container'</span>{' '}
                <span className='attr'>id</span>=
                <span className='value'>'main-navbar'</span>&gt;
                <br />
                &nbsp;&nbsp;&lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>''</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'logo'</span>&gt; Navbar &lt;/
                <span className='tag'>a</span>&gt;
                <br />
                //or
                <br />
                &nbsp;&nbsp;&lt;
                <span class='tag'>img</span> <span class='attr'>src</span>=
                <span className='value'>
                  'https:source.unsplash.com/random'
                </span>
                <span className='attr'>class</span>=
                <span className='value'>'logo-image'</span>{' '}
                <span className='attr'>alt</span>=
                <span className='value'>''</span> /&gt;
                <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>ul</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'navbar-list'</span>&gt;
                <br /> &nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>class</span>={' '}
                <span className='value'>'current'</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt; Home &lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt; <br />
                &nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;About&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt;
                <br /> &nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;Services&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt;
                <br /> &nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;Projects&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt;
                <br /> &nbsp;&nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;Contact&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt; <br />
                &nbsp;&nbsp;&lt;/
                <span className='tag'>ul</span>&gt;
                <br /> &nbsp;&lt;/
                <span className='tag'>div</span>&gt; <br />
                &nbsp;&lt;
                <span className='tag'>div</span>{' '}
                <span className='attr'>class</span>={' '}
                <span className='value'>'container navbar-container'</span>{' '}
                <span className='attr'>id</span>=
                <span className='value'>'mobile-navbar'</span>&gt;
                <br /> &nbsp;&nbsp;&lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>
                <span className='attr'>class</span>=
                <span className='value'>'logo'</span>&gt; Navbar &lt;/
                <span className='tag'>a</span>&gt; <br />
                //or
                <br />
                &nbsp;&nbsp;&lt;
                <span class='tag'>img</span> <span class='attr'>src</span>=
                <span className='value'>
                  'https:source.unsplash.com/random'
                </span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'logo-image'</span>{' '}
                <span className='attr'>alt</span>=
                <span className='value'>''</span> /&gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>button</span>{' '}
                <span className='attr'>id</span>=
                <span className='value'>'open-nav'</span>&gt; &lt;
                <span className='tag'>i</span>{' '}
                <span className='attr'>class</span>=
                <span className='value'>'fas fa-bars'</span> &gt;&lt;/
                <span className='tag'>i</span>&gt; &lt;/
                <span className='tag'>button</span>&gt; <br />
                &nbsp;&lt;/
                <span className='tag'>div</span>&gt;
                <br /> &lt;/
                <span className='tag'>nav</span>&gt;
                <br /> &lt;
                <span className='tag'>nav</span>{' '}
                <span className='attr'>class</span> ={' '}
                <span className='value'>
                  'navbar-mobile navbar-mobile-blue-60'
                </span>{' '}
                <span className='attr'>id</span>=
                <span className='value'>'list-mobile'</span> &gt;
                <br /> &nbsp;&lt;<span className='tag'>i</span>{' '}
                <span className='attr'>class</span> =
                <span className='value'>'fas fa-times'</span>
                <span className='attr'>id</span>=
                <span className='value'>'close-nav'</span>&gt;&lt;/
                <span className='tag'>i</span>&gt;
                <br /> &nbsp;&lt;
                <span className='tag'>ul</span>
                <span className='attr'>class</span> =
                <span className='value'>'mobile-list'</span>&gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>class</span> ={' '}
                <span className='value'>'current'</span>{' '}
                <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt; Home &lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;About&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt;
                <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;Services&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt; <br />
                &nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;Projects&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt;
                <br /> &nbsp;&nbsp;&lt;
                <span className='tag'>li</span>&gt; &lt;
                <span class='tag'>a</span> <span className='attr'>href</span>=
                <span className='value'>'#'</span>&gt;Contact&lt;/
                <span className='tag'>a</span>&gt; &lt;/
                <span className='tag'>li</span>&gt;
                <br /> &nbsp;&lt;/
                <span className='tag'>ul</span>&gt;
                <br /> &lt;/
                <span className='tag'>nav</span>&gt;
              </>
            }
          />
        </div>
      </section>
    </>
  );
};
export default Alerts;
