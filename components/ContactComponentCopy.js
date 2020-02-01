import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
//import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phoneNum: '',
            email: '',
            message: '',
            touched: {
                name: false,
                phoneNum: false,
                email: false
            }
        };
        
        // bind correctly to the right 'this'
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } // end constructor

    // validate 3 input form fields
    validate(name, phoneNum, email) {

        const errors = {
            name: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } 
        } 


        const reg = /^\d+$/; // only numbers
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'Phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    } // end validate input method

    // handle changes in form input fields
    handleBlur = (field) => () => {
        this.setState({ // update the triggered property to true
            touched: {...this.state.touched, [field]: true}
        }); 
    } // end handleBlur function

    // handle changes in form elements
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({ // update name
          [name]: value
        });
    } // end input change

    // handle form submit
    handleSubmit(event) {
        //console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
       // event.preventDefault(); // prevent refresh
    } // end submit
  
    render() {

        // use the validate method to check these 3 input form fields
        const errors = this.validate(this.state.name, this.state.phoneNum, this.state.email); 
        
        return (
            <div className="container" id="contact" >
                
                <div className="row row-content">
                   <div className="col-12">
                      <h2>Talk To Me</h2>
                      
                   </div>
                    <div className="col-md-10">
                        {/*start form*/}
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup row> {/*first form field*/}
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Full Name *"
                                        required
                                        value={this.state.name}
                                        invalid={errors.name}
                                        onBlur={this.handleBlur("name")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone Number *"
                                        required
                                        value={this.state.phoneNum}
                                        invalid={errors.phoneNum}
                                        onBlur={this.handleBlur("phoneNum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email *"
                                        required
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                           
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit"  id="sendMessageButton">
                                        Send Message
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form> {/*end form*/}
                    </div>
                </div> {/*end div row*/}
            </div> // end div container
        ); // end return
    } // end render
} // end class contact

export default Contact;