import React from 'react';
import Code from '../components/Code';
const Examples = () => {
  return (
    <>
      <h2>Examples :</h2>
      <p>
        For this example the grid system will create 5 even columns if you would
        like to 4 columns you can replace the number with
        <strong>3</strong> and for 3 columns, <strong>3</strong> will be good
        and so on.
      </p>
      <h3>5 Columns</h3>
      <div class='example-show grid-5'>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
      </div>
      <Code
        content={
          <>
            &lt;<span class='tag'>div</span> <span class='attr'>class</span>=
            <span class='value'>"row gap-1"</span>&gt; <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-2-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-2-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-2-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-2-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-2-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &lt;/<span class='tag'>div</span>&gt;
          </>
        }
      />
      <h3>4 Columns</h3>
      <div class='example-show grid-4'>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
      </div>
      <Code
        content={
          <>
            &lt;<span class='tag'>div</span> <span class='attr'>class</span>=
            <span class='value'>"row gap-1"</span>&gt; <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-3-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-3-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-3-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-3-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &lt;/<span class='tag'>div</span>&gt;
          </>
        }
      />
      <h3>3 Columns</h3>
      <div class='example-show grid-3'>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
        <div class='col-2-sm'>1</div>
      </div>
      <Code
        content={
          <>
            &lt;<span class='tag'>div</span> <span class='attr'>class</span>=
            <span class='value'>"row gap-1"</span>&gt; <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-4-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-4-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &nbsp;&nbsp; &lt;<span class='tag'>div</span>
            <span class='attr'>class</span>=
            <span class='value'>"col-4-sm"</span>
            &gt;1&lt;/<span class='tag'>div</span>&gt;
            <br />
            &lt;/<span class='tag'>div</span>&gt;
          </>
        }
      />
      <div>
        <h3>Using The Card Component</h3>
        <p>
          When using the Card Component for your project if you want to a gap
          between the cards YOU SHOULD use the <strong>gap-*</strong> not the
          <strong>g-*</strong> View <a href='card'>Card Component</a> for more
          details.
        </p>
      </div>
      <div>
        <h3>Example for a responsive layout</h3>
        <Code
          content={
            <>
              &lt;<span class='tag'>section</span>
              <span class='attr'>class</span>=
              <span class='value'>"bg-blue-50"</span>&gt;
              <br />
              &nbsp;&nbsp;&lt;<span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>"container"</span>
              &gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>
                "row gap-1 display-f justify-between align-center"
              </span>
              &gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>
                "col-12-xs col-4-sm col-3-md col-2-lg bg-blue-10 text-white p-1
                my-2"
              </span>
              &gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number
              1 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span class='tag'>div</span>
              &gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>
                "col-12-xs col-4-sm col-3-md col-2-lg bg-blue-10 text-white p-1
                my-2"
              </span>
              &gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number
              1 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span class='tag'>div</span>
              &gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>
                "col-12-xs col-4-sm col-3-md col-2-lg bg-blue-10 text-white p-1
                my-2"
              </span>
              &gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number
              1 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span class='tag'>div</span>
              &gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>
                "col-12-xs col-4-sm col-3-md col-2-lg bg-blue-10 text-white p-1
                my-2"
              </span>
              &gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number
              1 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span class='tag'>div</span>
              &gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span class='tag'>div</span>
              <span class='attr'>class</span>=
              <span class='value'>
                "col-12-xs col-4-sm col-3-md col-2-lg bg-blue-10 text-white p-1
                my-2"
              </span>
              &gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number
              1 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span class='tag'>div</span>
              &gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class='tag'>div</span>&gt;{' '}
              <br />
              &nbsp;&nbsp;&lt;/<span class='tag'>div</span>&gt; <br />
              &lt;/<span class='tag'>section</span>&gt;
            </>
          }
        />
      </div>
    </>
  );
};
export default Examples;
