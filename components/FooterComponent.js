import React from 'react';

function Footer() {
    return (
        <footer className="page-footer bg-dark fixed-bottom">
            <div className="container">
                <div className="row justify-content-between">             
                    
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fab fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fab fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fab fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fab fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-left">
                        <a role="button" className="btn btn-link" href="tel:+252-240-9101"><i className="fa fa-phone" /> 1-252-240-9101</a><br />
                        <a role="button" className="btn btn-link" href="mailto:01dboakley@gmail.com"><i className="fas fa-envelope" /> 01dboakley@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;