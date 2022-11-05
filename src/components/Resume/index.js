import React from 'react'

function Resume() {
  return (
    
    <div>
        <h1>Resume</h1>
        <a href="../../assets/AWResume.pdf" download="AWResume.pdf">Click Here to Download My Resume</a>
    <div className='my-5'>
    <ul className='resume'>
      <li>
        <h2>Education</h2>
        <h4>Bachelor Degree in Integrated Studies</h4>
        <p>2017 - Florida Gulf Coast University</p>
        
        <h4>Certificate in Full Stack Development</h4>
        <p>2022 - University of Central Florida</p>
      </li>
      
      <li>
        <h2>Technical Training</h2>
        <p>Frontend development (HTML, CSS and JavaScript), REACT</p>
        <p>Database (MySQL, MongoDB, GraphQL)</p>
        <p>Backend development (Node.js; express.js)</p>
      </li>
      
      
    </ul>
    </div>
    </div>
      
  )
}

export default Resume