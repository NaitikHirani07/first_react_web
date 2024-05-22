import React from 'react';
import img1 from './../asset/img/work_img_1.jpg';
import img2 from './../asset/img/work_img_2.jpg';
import img3 from './../asset/img/work_img_3.jpg';
import img4 from './../asset/img/work_img_4.jpg';
import img5 from './../asset/img/work_img_5.jpg';
import img6 from './../asset/img/work_img_6.jpg';
import './work.css';

const work = () => {
    return (
        <>
            <section id='work_section' className='work_section py-5 bg-secondary'>
                <div className="container">
                    <div className="row">
                        <div className="work_top_section py-5">
                            <h1 className='text-center text-light'>OUR WORK</h1>
                            <p className='text-center text-light'>Caras suscripit porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between work_bottom_section py-5">
                            <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                <div className="card w-100 flex-grow-1 text-light text-opacity-50">
                                    <div className="card-img-top d-flex justify-content-center">
                                        <img src={img1} className="card-img-top" alt="..." />
                                        <i className='bx bx-plus plus-icon'></i>
                                    </div>
                                    <div className="card-body d-flex flex-column justify-content-center position-relative">
                                        <i className='bx bxs-up-arrow text-light position-absolute'></i>
                                        <h5 className="card-title text-center">AENEAN A ELIT</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                <div className="card w-100 flex-grow-1 text-light text-opacity-50">
                                    <div className="card-img-top d-flex justify-content-center">
                                        <img src={img2} className="card-img-top" alt="..." />
                                        <i className='bx bx-plus plus-icon'></i>
                                    </div>
                                    <div className="card-body d-flex flex-column position-relative">
                                        <i className='bx bxs-up-arrow text-light position-absolute'></i>
                                        <h5 className="card-title text-center">DONEC VEHICULA</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                <div className="card w-100 flex-grow-1 text-light text-opacity-50">
                                    <div className="card-img-top d-flex justify-content-center">
                                        <img src={img3} className="card-img-top" alt="..." />
                                        <i className='bx bx-plus plus-icon'></i>
                                    </div>
                                    <div className="card-body d-flex flex-column position-relative">
                                        <i className='bx bxs-up-arrow text-light position-absolute'></i>
                                        <h5 className="card-title text-center">ALIQUAM</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                <div className="card w-100 flex-grow-1 text-light text-opacity-50">
                                    <div className="card-img-top d-flex justify-content-center">
                                        <img src={img4} className="card-img-top" alt="..." />
                                        <i className='bx bx-plus plus-icon'></i>
                                    </div>
                                    <div className="card-body d-flex flex-column position-relative">
                                        <i className='bx bxs-up-arrow text-light position-absolute'></i>
                                        <h5 className="card-title text-center">SUSPENDISSE LIBERO</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                <div className="card w-100 flex-grow-1 text-light text-opacity-50">
                                    <div className="card-img-top d-flex justify-content-center">
                                        <img src={img5} className="card-img-top" alt="..." />
                                        <i className='bx bx-plus plus-icon'></i>
                                    </div>
                                    <div className="card-body d-flex flex-column position-relative">
                                        <i className='bx bxs-up-arrow text-light position-absolute'></i>
                                        <h5 className="card-title text-center">MAECENAS FRINGILLA</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 col-md-3 col-sm-12 mb-3 mx-2">
                                <div className="card w-100 flex-grow-1 text-light text-opacity-50">
                                    <div className="card-img-top w-100 d-flex justify-content-center">
                                        <img src={img6} className="card-img-top" alt="..." />
                                        <i className='bx bx-plus plus-icon'></i>
                                    </div>
                                    <div className="card-body d-flex flex-column position-relative">
                                        <i className='bx bxs-up-arrow text-light position-absolute'></i>
                                        <h5 className="card-title text-center">UT ET SAPIEN</h5>
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

export default work;