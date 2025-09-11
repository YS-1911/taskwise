import React from 'react';
import "../css/features_home.css"
const FeaturesHome = () => {
    return (
        <>
            <div >
                <section className=" features-home ">
                    <div className="features-home-text d-flex flex-column align-items-center justify-content-center">
                        <div className="title-features-home mb-4">
                            <h5 className='text-center m-0'>TOP FEATURES</h5>
                        </div>
                        <h2 className='text-center m-0'>
                            Built to Help You Stay <span>Focused, Organized, and Ahead.</span>
                        </h2>
                        <p className='text-center my-3'>Effortless organization to help you stay ahead every day.</p>
                    </div>

                    <div className="container-fluid  mt-5" >
                        <div className="row d-flex justify-content-center align-items-center mx-lg-5 mx-md-3 mx-1">
                            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mb-4 ">
                                <div className="features-home-card ">
                                    <div className="home_features_card_icon m-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="size-5"
                                            width="20px"
                                            height="20px"
                                            preserveAspectRatio="xMidYMid meet"
                                            aria-hidden="true"
                                            role="img"
                                        >
                                            <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                                        </svg>
                                    </div>
                                    <h3 className='m-4'>Connect Calendar</h3>
                                    <p className='m-4'>Effortlessly find the ideal time for meetings and events.</p>
                                    <img src="./image/home-features-image01.png" className="img-fluid" loading='lazy' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mb-4">
                                <div className="features-home-card ">
                                    <div className="home_features_card_icon m-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--heroicons"
                                            width="20px"
                                            height="20px"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" />
                                                <path d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096l-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h3 className='m-4'>Set Availability
                                    </h3>
                                    <p className='m-4'>Easily pinpoint the optimal times for meetings and events.</p>
                                    <img src="./image/home-features-image02.webp" className="img-fluid" loading='lazy' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mb-4">
                                <div className="features-home-card ">
                                    <div className="home_features_card_icon m-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--heroicons"
                                            width="20px"
                                            height="20px"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082c.312.214.641.405.985.57c.182.088.277.228.297.35l.178 1.071a1.876 1.876 0 0 0 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349c.344-.165.673-.356.985-.57c.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5a3.75 3.75 0 0 0 0 7.5Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='m-4'>Smart Integrations</h3>
                                    <p className='m-4'>Seamlessly determine the most suitable times for meetings and events.</p>
                                    <img src="./image/home-features-image03.webp" className="img-fluid" loading='lazy' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center mx-lg-5 mx-md-3 mx-1">
                            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mb-4">
                                <div className="features-home-card d-flex flex-column align-items-center">
                                    <img src="./image/home-features-bottom-image01-p-1600.webp" className="img-fluid " loading='lazy' alt="" />

                                    <div className="home_features_card_icon mt-4 mb-2   ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--heroicons"
                                            width="20px"
                                            height="20px"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                    </div>
                                    <h3 className='my-2 '>Event Analytics</h3>
                                    <p className='my-2 text-center'>Utilize advanced algorithms to analyze participants' schedules and suggest the most convenient time slots, ensuring maximum attendance and productivity.</p>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mb-4">
                                <div className="features-home-card d-flex flex-column align-items-center">
                                    <img src="./image/home-features-bottom-image02-p-1080.webp" className="img-fluid " loading='lazy' alt="" />

                                    <div className="home_features_card_icon mt-4 mb-2   ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="size-5"
                                            width="20px"
                                            height="20px"
                                            preserveAspectRatio="xMidYMid meet"
                                            aria-hidden="true"
                                            role="img"
                                        >
                                            <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                                        </svg>


                                    </div>
                                    <h3 className='my-2 '>Connect Calendar
                                    </h3>
                                    <p className='my-2 text-center'>Easily coordinate meetings and events by leveraging our intuitive scheduling tools that automatically suggest the best times based on participants' availability and preferences.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default FeaturesHome;
