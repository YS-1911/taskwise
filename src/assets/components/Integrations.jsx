import React from 'react';
// style
import '../css/Integrations.css';
// integrationsData from constant
import integrationsData from '../constant/IntegrationsData';
const Integrations = () => {
    return (
        <div className="integrations-section mb-5 d-flex flex-column align-items-center justify-content-center">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 d-flex align-items-start ">
                        <div className="integrations-title  mb-3">
                            <div className="title-features-home mb-4 " style={{ width: "fit-content" }}>
                                <h6 className='text-center m-0 fs-6'>INTEGRATIONS</h6>
                            </div>
                            <h3 >Integrated with all  the  tools
                                you already love!</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="integrations-title-text">
                            <p className='m-0 mb-3 '>Bring all your favorite tools together in one place, so you can manage your tasks, meetings, and projects without missing a beat.</p>
                            <div className="d-flex  gap-2 integrations-title-text-item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className='m-0'>Productivity Streamline workflows for better focus.</p>
                            </div>
                            <div className="d-flex gap-2 integrations-title-text-item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className='m-0'>Keep everyone aligned with our shared calendar.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row integrations-card-container" >
                    {
                        integrationsData.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-lg-5 mb-4" key={item.id}>
                                <div className="integrations-card px-lg-3 px-md-2 px-1 ">
                                    <div className="integrations-card-icon mb-3 d-flex align-items-center justify-content-center mb-3">
                                        {item.icon}
                                    </div>
                                    <h5 className='mb-3 '>{item.title}</h5>
                                    <p className='m-0 me-3'>{item.description}</p>
                                    <a href="" className='integrations-card-link'>View Integration <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                    </a>
                                </div>
                            </div>

                        )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Integrations;
