import React, { useState, useEffect } from 'react';

export default function AboutMe() {
  const [resumeSize, setResumeSize] = useState('Calculating size...');

  useEffect(() => {
    fetch('/resume.pdf')
      .then(response => {
        const size = response.headers.get('Content-Length');
        if (size) {
          const sizeKB = parseInt(size, 10);
          setResumeSize(`${sizeKB} Bytes`);
        } else {
          setResumeSize('Size not available');
        }
      })
      .catch(error => {
        console.error('Error fetching file:', error);
        setResumeSize('Error fetching size');
      });
  }, []);

  const aboutMeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '50px',
    height: '80vh',
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '90%',
  };

  const mainInfoStyle = {
    paddingTop: '20%',
  }

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
    <div className='AboutMe' style={aboutMeStyle}>
      <div style={leftColumnStyle}>
        <div style={mainInfoStyle}>
          <p className='heading'>Hello World! I'm a computer science major in my third year at Cleveland State University.</p>
          <p className='paragraph'>My name is Charlie Thompson and I love coffee and coding.<br /> I am an aspiring software developer who is actively looking for a summer internship.</p>
        </div>
        <div>
          <img className='AboutMe_ImageL' src='/me.jpg' alt="Charlie Thompson" style={imageStyle} />
        </div>
        <div>
          <p>Find me on <a href='https://github.com/charliethompson217'>GitHub</a>, <a href='https://www.linkedin.com/in/charles-thompson-36735b1ab/'>LinkedIn</a></p>
          <p><span>Email me at </span>charlie@charliethompson.dev</p>
          <p>Download my <a href='/resume.pdf' download="Charlie_Thompson_Resume">Resume</a> ({resumeSize})</p>
        </div>
      </div>
      <div style={rightColumnStyle}>
        <img className='AboutMe_ImageR' src='/me.jpg' alt="Charlie Thompson" style={imageStyle} />
      </div>
    </div>
  )
}
