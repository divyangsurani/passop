import React from 'react'


function Contactus(props) {
  return (
    <div className='container'>
     <h1 className="my-3" >Contact Us</h1>
            <div >
    <h1 className="display-4 text-center"style={{color: 'white',
        textshadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Contact Us EverGreenNews</h1>

      <form method="post" action='https://formspree.io/f/mpzvdlda'>
            <div class="form-group">
              <label class="control-label text-light">Full Name <span>*</span></label>
              <input type="text" name="fullname" class="form-control white_bg" id="fullname" placeholder="Full Name" required/>
            </div>
            <br />
            <div class="form-group">
              <label class="control-label text-light">Email Address <span>*</span></label>
              <input type="email" name="email" class="form-control white_bg" id="emailaddress" placeholder="Email Address" required/>
            </div>
             <br />
            <div class="form-group">
              <label class="control-label text-light">Phone Number <span>*</span></label>
              <input type="text" name="contactno" class="form-control white_bg" id="phonenumber" placeholder="Phone Number" required maxlength="10" pattern="[0-9]+"/>
            </div>
            <br />
            <div class="form-group">
              <label class="control-label text-light">Message <span>*</span></label>
              <textarea class="form-control white_bg" name="message" rows="4" placeholder="Message" required></textarea>
            </div>
            <br />
            <div class="form-group ">
              <button class="btn-primary bg-primary " style={{borderRadius:'10px' }} type="submit" name="send" href="/" >Send Message </button>
            </div>
          </form>
          </div>

    </div>
  )
}

export default Contactus;