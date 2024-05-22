import React from 'react';
import img from './../asset/img/header.jpg';
import './carousel.css';

const carousel = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row carousel_row">
                        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true"
                                    aria-label="First slide"></li>
                                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img src={img} className="img-fluid w-100" alt="First slide" />
                                    <div className="carousel-caption">
                                        <div className="container carousel-content">
                                            <h6 className="text-light h4 animated fadeInUp">Lorem, ipsum dolor.</h6>
                                            <h1 className="text-white display-1 mb-4 animated fadeInRight">Lorem ipsum dolor sit amet.
                                            </h1>
                                            <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur modi provident perferendis?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img} className="img-fluid w-100" alt="Second slide" />
                                    <div className="carousel-caption">
                                        <div className="container carousel-content">
                                            <h6 className="text-light h4 animated fadeInUp">Lorem, ipsum dolor.</h6>
                                            <h1 className="text-white display-1 mb-4 animated fadeInLeft">Lorem ipsum dolor sit amet consectetur.</h1>
                                            <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati possimus, natus velit corporis non dignissimos? Expedita!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img} className="img-fluid w-100" alt="Second slide" />
                                    <div className="carousel-caption">
                                        <div className="container carousel-content">
                                            <h6 className="text-light h4 animated fadeInUp">Lorem, ipsum dolor.</h6>
                                            <h1 className="text-white display-1 mb-4 animated fadeInLeft">Lorem ipsum dolor sit amet consectetur.</h1>
                                            <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati possimus, natus velit corporis non dignissimos? Expedita!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default carousel;