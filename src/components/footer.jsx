import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <>
            <footer className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 social_media d-flex justify-content-center">
                            <ul className='d-flex list-unstyled flex-wrap justify-content-center'>
                                <li className='me-4 mb-2 fs-2'>
                                    <i className='bx bxl-facebook p-3'></i>
                                </li>
                                <li className='me-4 mb-2 fs-2'>
                                    <i className='bx bxl-twitter p-3'></i>
                                </li>
                                <li className='me-3 mb-2 fs-2'>
                                    <i className='bx bxl-gmail p-3'></i>
                                </li>
                                <li className='ms-2 mb-2 fs-2'>
                                    <i className='bx bxl-linkedin p-3'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    );
}

export default footer;