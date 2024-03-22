import React from 'react';

export default function AboutMe() {

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '90%',
  };

  const rightColumnStyle = {
    maxWidth: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '5%',
  };

  return (
    <div className='AboutMe'>
      <div style={leftColumnStyle}>
        <div className='aboutMeInfo'>
          <p className='heading'>Hello World! I'm a computer science major in my third year at Cleveland State University.</p>
          <p className='paragraph'>My name is Charlie Thompson and I love coffee and coding.<br /> I am an aspiring software developer who is actively looking for a summer internship.</p>
        </div>
        <div>
          <img className='AboutMe_ImageL' src='/me.jpg' alt="Charlie Thompson" style={imageStyle} />
        </div>
        <div>
          <p>Find me on <a href='https://github.com/charliethompson217'>GitHub</a>, or <a href='https://www.linkedin.com/in/charles-thompson-36735b1ab/'>LinkedIn</a><br/>Email me at charlie@charliethompson.dev<br/>Download my <a href='/resume.pdf' download="Charlie_Thompson_Resume">Resume</a> (61 KB)</p>
        </div>
        
      </div>
      <div style={rightColumnStyle}>
        <img className='AboutMe_ImageR' src='/me.jpg' alt="Charlie Thompson" style={imageStyle} />
      </div>
      
    </div>
  )
}
