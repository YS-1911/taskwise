import React from 'react';
// hero css
import "../css/hero.css"
// looplogo
import Looplogo from "./looplogo"

const Hero = () => {
    return (
        <div className="hero-section d-flex flex-column align-items-center  ">
            <div className="Smarter-tools mt-5 d-flex align-items-center justify-content-center ">
                <img src="./image/hero-tag-icon.svg" alt="" loading='lazy' />
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
                        Discover Feature <span>  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="15px" height="15px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" className=""></path></svg> </span>
                    </a>
                </div>
                <div className="companies-trust mt-5 d-flex flex-column align-items-center justify-content-center">
                    <p className='text-center mt-4'>The world's best companies trust TaskWise</p>
                </div>
                <div className="container d-flex align-items-center justify-content-center mt-3 mb-4">
                    <Looplogo />
                </div>

            </div>
            <div className="imag-hero mx-3 mx-lg-5  my-3 my-lg-5 py-3">
                <img src="./image/hero-image-p-1600.webp" className='img-fluid  ' alt="" loading='lazy' />
            </div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center mb-5">
                    <div className="col-lg-3 col-md-4">
                        <div className="features-hero d-flex  ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225l.569-9.47l5.227 7.917l-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"></path></svg>
                            <p className='mx-2'> <span>Integration </span> with Work Tools Connect to Slack, Zoom, Asana, and project management tools.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="features-hero d-flex  ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M14 17h2.75A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H14v14ZM12.5 3h-5v14h5V3ZM3.25 3H6v14H3.25A2.25 2.25 0 0 1 1 14.75v-9.5A2.25 2.25 0 0 1 3.25 3Z"></path></svg>
                            <p className='mx-2'> <span>Analytics Dashboard  </span> Track productivity trends and analyze how you spend your time. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="features-hero d-flex  ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clip-rule="evenodd"></path></svg>
                            <p className='mx-2'> <span>Analytics Report</span> recommend times to relax, exercise, or focus based on your schedule.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="features-hero d-flex  ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Zm9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>
                            <p className='mx-2'> <span>Ai Suggestions</span> Ai Suggestions, recommend times to relax, exercise, or focus based on your schedule.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
