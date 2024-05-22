import React from 'react';
import './about.css';

const about = () => {
    return (
        <>
            <section id='about_section' className='about_section'>
                <div className="container">
                    <div className="row">
                        <div className="about my-3">
                            <div className="col-12 about_top py-5 px-5">
                                <h1 className='text-light text-center fw-light mb-2'>WHO WE ARE & WHAT WE DO</h1>
                                <p className='text-light text-center pb-4 about_des'>Caras suscripit porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
                                <div className="about_button d-flex justify-content-center alighnalign-items-center">
                                    <p className='py-1 px-5 m-0 rounded-1 text-light fw-bold'>MEET THE TEAM</p>
                                    <span className=''>
                                        <i className='bx bxs-down-arrow fs-4'></i>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between about_bottom py-5">
                                <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                    <div className="card w-100 flex-grow-1 py-5 text-light text-opacity-50">
                                        <div className="card-img-top d-flex justify-content-center">
                                            <i className='bx bxs-user-circle'></i>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-center">ANTON PETROV</h5>
                                            <p className="card-text text-center ">General Manager</p>
                                        </div>
                                        <div className="card-body mt-auto p-2 d-flex align-items-center justify-content-around">
                                            <i className='bx bxl-facebook p-1 fs-4 '></i>
                                            <i className='bx bxl-twitter p-1 fs-4 '></i>
                                            <i className='bx bxl-gmail p-1 fs-4 '></i>
                                            <i className='bx bxl-linkedin p-1 fs-4 '></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                    <div className="card w-100 flex-grow-1 py-5 text-light text-opacity-50">
                                        <div className="card-img-top d-flex justify-content-center">
                                            <i className='bx bxs-user-circle'></i>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-center">KIRL DONCHEV</h5>
                                            <p className="card-text text-center ">Design Master</p>
                                        </div>
                                        <div className="card-body mt-auto p-2 d-flex align-items-center justify-content-around">
                                            <i className='bx bxl-facebook p-1 fs-4 '></i>
                                            <i className='bx bxl-twitter p-1 fs-4 '></i>
                                            <i className='bx bxl-gmail p-1 fs-4 '></i>
                                            <i className='bx bxl-linkedin p-1 fs-4 '></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                    <div className="card w-100 flex-grow-1 py-5 text-light text-opacity-50">
                                        <div className="card-img-top d-flex justify-content-center">
                                            <i className='bx bxs-user-circle'></i>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-center">ILIAN BONEV</h5>
                                            <p className="card-text text-center ">Developer Ninja</p>
                                        </div>
                                        <div className="card-body mt-auto p-2 d-flex align-items-center justify-content-around">
                                            <i className='bx bxl-facebook p-1 fs-4 '></i>
                                            <i className='bx bxl-twitter p-1 fs-4 '></i>
                                            <i className='bx bxl-gmail p-1 fs-4 '></i>
                                            <i className='bx bxl-linkedin p-1 fs-4 '></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default about;