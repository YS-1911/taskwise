import React from 'react';
// testimonial css
import "../css/Testimonial.css"
// testimonials component
import Testimonials from "../constant/Testimonials"

const Testimonial = () => {
    return (
        // Testimonial

        <div className="testimonial-section mb-5 d-flex flex-column align-items-center justify-content-center">
            <div className="title-testimonial mb-5 d-flex align-items-center flex-column justify-content-center">
                <div className="title-features-home mb-4 " style={{ width: "fit-content" }}>
                    <h6 className='text-center m-0 fs-6'>TESTIMONIAL</h6>
                </div>
                <h2 className='text-center'>Loved by Professionals
                    Everywhere</h2>
                <p className='text-center m-0 my-3'>Here's what our users have to say.</p>
            </div>
            <div className="container testimonial-container">
                
                    <div className="row d-flex align-items-stretch justify-content-center">
                        {Testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="col-lg-4 col-md-6 d-flex align-items-stretch justify-content-center flex-column"
                            >
                                <div className="testimonial-card my-2 d-flex align-items-stretch justify-content-center flex-column">
                                    <img src={item.company_image} className='img-testimonial-marquee' loading="lazy" alt="" />
                                    <p className="my-3">{item.text}</p>
                                    <div className="person-name-testimonial d-flex align-items-center">
                                        <img
                                            src={item.image}
                                            style={{ width: "40px", height: "40px" }}
                                            loading="lazy"
                                            alt=""
                                        />
                                        <div className="d-flex flex-column ms-3 ">
                                            <h6 className="m-0">{item.name}</h6>
                                            <p className="m-0">{item.jop}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
            </div>
        </div>
    );
}

export default Testimonial;
