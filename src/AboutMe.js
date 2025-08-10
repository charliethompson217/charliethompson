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
          <p className='heading'>Hello World!</p>
          <p className='paragraph'> I'm a computer science senior at Cleveland State University. <br/>My name is Charlie Thompson and I love coffee and coding.</p>
        </div>
        <div>
          <img className='AboutMe_ImageL' src='/assets/me.jpg' alt="Charlie Thompson" style={imageStyle} />
        </div>
        <div>
          <p>Find me on <a href='https://github.com/charliethompson217'>GitHub</a>, or <a href='https://www.linkedin.com/in/charles-thompson-36735b1ab/'>LinkedIn</a><br/>Email me at charlie@charliethompson.dev<br/>Download my <a href='/assets/resume.pdf' download="Charlie_Thompson_Resume">Resume</a> (63 KB)</p>
        </div>
        
      </div>
      <div style={rightColumnStyle}>
        <img className='AboutMe_ImageR' src='/assets/me.jpg' alt="Charlie Thompson" style={imageStyle} />
      </div>
      
    </div>
  )
}
