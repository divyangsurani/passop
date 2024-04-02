import React from 'react';
import { FaPhone} from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='fixed bottom-0  bg-slate-200 flex flex-col justify-center items-center w-full py-0'>
      <div className='logo font-bold text-xl'>
        <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
      </div>
      Created 😎  By Divyang Surani.
      <div className="container" align="center ">     
            <SocialIcon url="https://github.com/divyangsurani" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.instagram.com/__imdivyang13/"style={{height:'40px',width:'40px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://twitter.com/DivyangSur47663?t=brS1xIiBo1DBKZN0B9LQMQ&s=09"style={{height:'40px',width:'40px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.facebook.com/divyang.surani.1" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://divyangsurani49@gmail.com/" style={{height:'40px',width:'40px'}}/>
          </div>
    </div>
  );
};

export default Footer;
// import React from 'react'



// function footer() {
//   return (
// <div className="fixed-bottom" >
//         <footer className="footer mt-auto py-3 bg-dark">
        
//         </footer>
//       </div>
//       )
// }

// export default footer   