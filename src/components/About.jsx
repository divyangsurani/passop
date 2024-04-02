import React from 'react'

function About () {
   
    
    return (
        <div className="container"style={{backgroundSize:'covor',color: 'white',
        textshadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
            <h1 className="my-3"    >About Us</h1>
            <div className="text-center" >
    <h1 className="display-4">About EverGreenNews</h1>
    <p className="lead">Your source for reliable and unbiased news.</p>
  </div>
  
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <h2>Our Mission</h2>
        <p className="text-justify">EverGreenNews is committed to delivering the latest news and updates while upholding the highest standards of journalism. Our mission is to empower individuals by providing them with access to accurate, impartial, and comprehensive news coverage.</p>
        
        <h2>Our Team</h2>
        <p className="text-justify">Our team consists of experienced journalists, editors, and technologists dedicated to delivering quality news content across various topics and regions. We prioritize integrity, objectivity, and transparency in our reporting.</p>
        
        
      </div>
    </div>
  </div>
  
        </div>
    )
}   
export default About 