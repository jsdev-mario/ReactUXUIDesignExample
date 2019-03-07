import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
        return (
            <footer className="app-footer">
                <div className="container-fluid py-md-5 py-3 my-5">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-lg">
                                    <div className="row">
                                        <div className="col-sm about-us mt-4">
                                            <h1>About</h1>
                                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio ut dolore repudiandae vero,
                                                cum non voluptate eum consectetur hic corporis doloribus veniam reiciendis quia corrupti. Eum quam facere distinctio?</h4>
                                        </div>
                                        <div className="col-sm about-us mt-4">
                                            <h1>Navigation</h1>
                                            <ul>
                                                <li><h3><Link to={'/'}>Retina Homepage</Link></h3></li>
                                                <li><h3><Link to={'/'}>New Page Examples</Link></h3></li>
                                                <li><h3><Link to={'/'}>Parallax Sections</Link></h3></li>
                                                <li><h3><Link to={'/'}>Shortcode Central</Link></h3></li>
                                                <li><h3><Link to={'/'}>Ultimate Font Collection</Link></h3></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="row">
                                        <div className="col-sm about-us mt-4">
                                            <h1>Recent Comments</h1>
                                            <h6 className=" font-italic">Brian Williamson on</h6>
                                            <h5 className="mb-3">Site Speed and Search Engines Optimization Aspects</h5>
                                            <h6 className=" font-italic">Brian Williamson on</h6>
                                            <h5 className="mb-3">Site Speed and Search Engines Optimization Aspects</h5>
                                            <h6 className=" font-italic">Brian Williamson on</h6>
                                            <h5 className="mb-3">Site Speed and Search Engines Optimization Aspects</h5>
                                        </div>
                                        <div className="col-sm about-us mt-4">
                                            <h1>Contacts</h1>
                                            <h3>Address 4578 Marmora Road, Glasgow, D04 89GR</h3>
                                            <h3>Phones (800) 123-0045 (800) 123-0045</h3>
                                            <h3>E-mail info@demolink.org</h3>
                                            <h3 className="mb-3">We are open Mn-Fr: 10 am-8 pm</h3>
                                            <div className="d-flex">
                                                <Link to={'/'}><i className=" zmdi zmdi-facebook zmdi-hc-3x mr-4"></i></Link>
                                                <Link to={'/'}><i className=" zmdi zmdi-youtube zmdi-hc-3x mr-4"></i></Link>
                                                <Link to={'/'}><i className=" zmdi zmdi-twitter zmdi-hc-3x"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
;

export default Footer;
