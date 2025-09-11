import React from 'react';
// testimonial css
import "../css/Testimonial.css"

const Testimonial = () => {
    return (
        // Testimonial

        <div className="testimonial-section  d-flex flex-column align-items-center justify-content-center">
            <div className="title-testimonial mb-4 d-flex align-items-center flex-column justify-content-center">
                <div className="title-features-home mb-4 " style={{width:"fit-content"}}>
                    <h6 className='text-center m-0 fs-6'>TESTIMONIAL</h6>
                </div>
                <h2 className='text-center '>Loved by Professionals
                    Everywhere</h2>
                    <p className='text-center m-0 mt-3'>Here's what our users have to say.</p>
            </div>
        </div>
    );
}

export default Testimonial;
