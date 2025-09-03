import React from 'react';
// hero css
import "../css/hero.css"
// looplogo
import Looplogo from "./looplogo"

const Hero = () => {
    return (
        <div className="hero-section d-flex flex-column align-items-center  ">
            <div className="Smarter-tools mt-5 d-flex align-items-center justify-content-center ">
                <img src="../../../public/image/hero-tag-icon.svg" alt="" loading='lazy' />
                <p>Smarter tools for faster insights!</p>
            </div>
            <div className="hero-title mt-3 d-flex flex-column align-items-center justify-content-center">
                <h2 className='text-center mx-5'>
                    Plan with AI. Automate with ease. Work without limits.
                </h2>
                <p className='text-center mx-4 mt-3'>
                    Find smarter ways to solve problems with tools that help you stay creative and efficient.
                </p>
                <div className="button-get-start mt-4 d-flex align-items-center justify-content-center">
                    <a href="#" className=' btn-get mx-2'>
                        Get Started Now
                    </a>
                    <a href="#" className=' btn-Discover'>
                        Discover Feature <span>  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="15px" height="15px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" class=""></path></svg> </span>
                    </a>
                </div>
                <div className="companies-trust mt-5 d-flex flex-column align-items-center justify-content-center">
                    <p className='text-center mt-4'>The world's best companies trust TaskWise</p>
                    </div> 
                    <div className="container d-flex align-items-center justify-content-center mt-3">
                    <Looplogo/>
                    </div>
                    
            </div>
        </div>
    );
}

export default Hero;
