import React from 'react';
// home feature component css
import "../css/HomeFeatureComponent.css"
const HomeFeatureComponent = () => {
    return (
        <>
            <div className="features-home-component mx-lg-5 mx-md-3 mx-1">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6 d-flex align-items-start mb-5   ">
                            <div className="features-home-component-text me-5">
                                <div className="title-features-home-component mb-4 d-flex align-items-center justify-content-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--heroicons"
                                        width="15px"
                                        height="15px"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h5 className='m-0 ms-2'>smart scheduling</h5>
                                </div>
                                <h2>Schedule Smarter, <br /> Not Harder.</h2>
                                <p className='my-3'>Let AI take the guesswork out of planning. Automatically find the best time for meetings and events without endless back-and-forth</p>
                                <div className="rate-content d-flex align-items-center  ">
                                    <div className="image-rate-content d-flex">
                                        <img src="./image/eafe_Image-32-1.svg" loading='lazy' alt="rate" />
                                        <img src="./image/Image-32-2.svg" loading='lazy' alt=" rate" />
                                        <img src="./image/Image-32.svg" alt=" rate" loading='lazy' />
                                    </div>
                                    <div className="rate-text ms-4 d-flex flex-column " >
                                        <div className="icon-star-rate d-flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="iconify iconify--heroicons"
                                                width="12px"
                                                height="12px"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 20 20"
                                                color='#FFC107'
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102l-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637l3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382l-1.831-4.401Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="iconify iconify--heroicons"
                                                width="12px"
                                                height="12px"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 20 20"
                                                color='#FFC107'
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102l-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637l3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382l-1.831-4.401Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="iconify iconify--heroicons"
                                                width="12px"
                                                height="12px"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 20 20"
                                                color='#FFC107'
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102l-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637l3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382l-1.831-4.401Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="iconify iconify--heroicons"
                                                width="12px"
                                                height="12px"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 20 20"
                                                color='#FFC107'
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102l-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637l3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382l-1.831-4.401Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="iconify iconify--heroicons"
                                                width="12px"
                                                height="12px"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 20 20"
                                                color='#FFC107'
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102l-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637l3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382l-1.831-4.401Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                        </div>
                                        <p className='rate-text-p mb-0'><span>4.5+</span> customer rating</p>
                                    </div>

                                </div>
                                <div className="mt-3 d-flex align-items-center flex-wrap">
                                    <a href="#" className=' btn-get '>
                                        Get Started Now
                                    </a>
                                    <p className='ms-lg-3 rate-text-p text-center mt-lg-0 mt-2 mb-0'>14 day trial – No credit card required</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center  ">
                            <div className="features-home-component-img">
                                <img src="./image/features-image01-p-1600.webp" className='img-fluid' loading='lazy' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5  d-flex justify-content-between align-items-center">
                        <div className="mt-lg-5 mt-3  col-lg-6 col-md-6 d-flex align-items-center justify-content-center order-2 order-lg-1  ">
                            <div className="features-home-component-img">
                                <img src="./image/features-image02-p-1600.webp" className='img-fluid' loading='lazy' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex align-items-start mb-5 mt-5 order-1 order-lg-2">
                            <div className="features-home-component-text ms-lg-5 ms-md-3 ms-1">
                                <div className="title-features-home-component mb-4 d-flex align-items-center justify-content-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--heroicons"
                                        width="15px"
                                        height="15px"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h5 className='m-0 ms-2'>shared calendars</h5>
                                </div>
                                <h2>Stay Connected with<br className='d-lg-block d-none' /> Shared Calendars</h2>
                                <p className='my-3'>Collaborate effortlessly with your team, family, or friends. Share schedules, plan events, and stay in sync—no matter the size of your group.</p>
                                <div className="mt-3 d-flex align-items-center flex-wrap">
                                    <a href="#" className=' btn-get '>
                                        Get Started Now
                                    </a>
                                    <p className='ms-lg-3 ms-2 rate-text-p text-center mt-lg-0 mt-2 mb-0'>14 day trial – No credit card required</p>

                                </div>
                                <div className="mt-5 d-flex align-items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--heroicons"
                                        width="15px"
                                        height="15px"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                        color='#FFC107'
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className='m-0 ms-2 text-correct-feature'>Manage group schedules seamlessly with our shared calendar.</p>
                                </div>
                                <div className="mt-2 d-flex align-items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--heroicons"
                                        width="15px"
                                        height="15px"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                        color='#FFC107'
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className='m-0 ms-2 text-correct-feature'>Manage group schedules seamlessly with our shared calendar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5  d-flex justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6 d-flex align-items-start mb-5 mt-5 ">
                            <div className="features-home-component-text me-lg-5 me-md-3 me-1">
                                <div className="title-features-home-component mb-4 d-flex align-items-center justify-content-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--heroicons"
                                        width="15px"
                                        height="15px"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364a.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43l1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899l-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h5 className='m-0 ms-2'>Task Integration</h5>
                                </div>
                                <h2>Simplify Planning with<br className='d-lg-block d-none ' />Task Integration</h2>
                                <p className='my-3'>“Collaborate effortlessly with your team, family, or friends. Share schedules, plan events, and stay in sync—no matter the size of your group.”</p>
                            
                            <div className="jadan-smith d-flex align-items-center">
                            <img src="./image/Image-40.svg" loading='lazy'  alt="" />
                            <div className="jadan-smith-text ms-2">
                                <h6 className='m-0'>Jaden Smith</h6>
                                <p className='m-0 '>CEO + Founder BlackOps.Inc</p>
                                </div>
                            </div>
                            <div className="mt-3 d-flex align-items-center flex-wrap">
                                    <a href="#" className=' btn-get '>
                                        Get Started Now
                                    </a>
                                    <p className='ms-lg-3 rate-text-p text-center mt-lg-0 mt-2 mb-0 ms-2'>14 day trial - No credit card required</p>

                                </div>
                            </div>
                        </div>
                        <div className="mt-lg-5 mt-3  col-lg-6 col-md-6 d-flex align-items-center justify-content-center   ">
                            <div className="features-home-component-img">
                                <img src="./image/features-image03-p-1600.png" className='img-fluid' loading='lazy' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeFeatureComponent;
