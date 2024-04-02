import React from 'react';
// import About from './About';
// import Contactus from './Contactus';

function Navbar() {
    return (
        <nav className='bg-slate-200 text-black '>
            <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
                <div className='logo font-bold text-xl'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-14'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="About">About</a>
                        <a className='hover:font-bold' href="Contactus">Contact</a>
                    </li>
                </ul> */}
                <a href="https://github.com/divyangsurani">
                    <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-black ring-2'>
                        <img className='invert w-10 p-1' src="/icons/github.svg" alt="github" />
                        <span className='font-bold px-2'>Github</span>
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
