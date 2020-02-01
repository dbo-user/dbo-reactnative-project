import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false // modal is closed at the start
        } 
        
        // bind correctly
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    } // end constructor

    // open modal window
    openModal() {
        this.setState({
            showModal: true
        });
    }

    // close modal window
    closeModal() {
        this.setState({
            showModal: false
        });
    }
         
    render() {
        

        return (

            <React.Fragment>
                <div className="container" id="portfolio">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="text-white text-uppercase">Portfolio</h2> 
                        </div>
                    </div> 

                        <div className="row"> {/* row of sites */}

                            {/*--site 1--*/}
                            <div className="col-md-4 col-sm-6 portfolio-item"> 
                                <a className="portfolio-link" target="_blank" rel='noreferrer noopener' href="https://dbo-user.github.io/dbo-nucamp/index.html">                    
                                    <img src="../img/portfolio/01-thumbnail.png" className="img-fluid shadow" alt="Nucamp" title="Open Site"/>
                                </a> 
                            
                                <div className="portfolio-caption">
                                    <h4>NuCamp</h4>
                                    <p className="text-light">Bootstrap Project</p>
                                </div>
                            </div>

                            {/*--site 2--*/}
                            <div className="col-md-4 col-sm-6 portfolio-item"> 
                                <a href="#" onClick={this.openModal}>
                                    <img className="img-fluid shadow" src="img/portfolio/02-thumbnail.jpg" alt="site 2" title="Open Site"/>
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Explore</h4>
                                    <p className="text-light">Graphic Design</p>
                                </div>
                            </div>

                            {/*--site 3--*/}
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a href="#" onClick={this.openModal}>
                                    <img className="img-fluid shadow" src="img/portfolio/03-thumbnail.jpg" alt="site 3" title="Open Site"/>
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Finish</h4>
                                    <p className="text-light">Identity</p>
                                </div>
                            </div>

                            {/*--site 4--*/}
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a href="#" onClick={this.openModal}>
                                    <img className="img-fluid shadow" src="img/portfolio/04-thumbnail.jpg" alt="site 4" title="Open Site"/>
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Lines</h4>
                                    <p className="text-light">Branding</p>
                                </div>
                            </div>

                            {/*--site 5--*/}
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a href="#" onClick={this.openModal}>                
                                    <img className="img-fluid shadow" src="img/portfolio/05-thumbnail.jpg" alt="site 5" title="Open Site"/>
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Southwest</h4>
                                    <p className="text-light">Website Design</p>
                                </div>
                            </div>

                            {/*--site 6--*/}
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a href="#" onClick={this.openModal}>                
                                    <img className="img-fluid shadow" src="img/portfolio/06-thumbnail.jpg" alt="site 6" title="Open Site"/>
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Window</h4>
                                    <p className="text-light">Photography</p>
                                </div>
                            </div>
                        
                        </div> {/*--end row of sites--*/}
                    
                    </div> {/*--end container--*/}
                    
                
                {/*--end portfolio--*/}

                {/*-- Portfolio Modal --*/}

                {/*-- Modal Popup Window for Website Coming Soon --*/}
                <Modal isOpen={this.state.showModal} >
                    <ModalBody>
                
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        
                                        {/*-- Project Details Go Here --*/}
                                        <h2 className="text-uppercase text-muted text-center">Coming Soon!</h2>
                                        <p className="item-intro text-muted text-center">This great site is under construction. Check back soon!</p>
                                        <img className="img-fluid" src="img/portfolio/wip.jpg" alt="check back"/>
                                        <p></p><p></p>
                                            <div className="text-center">
                                                <button id="closeModalBtn" className="btn text-white" onClick={this.closeModal} type="button">Close Window</button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        
                </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default Portfolio;