import React, { Component, useState } from 'react';
import axios from "axios";
import ContactForm from "../sendMail";

class Contact extends Component {
   /* constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.onNameChange= this.onNameChange.bind(this);
        this.onEmailChange= this.onEmailChange.bind(this);
        this.onSubjectChange= this.onSubjectChange.bind(this);
        this.onMsgChange= this.onMsgChange.bind(this);
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }
    onMsgChange(event) {
        this.setState({message: event.target.value})
    }
    submitEmail(e){
        e.preventDefault();
        axios({
            method: "POST",
            url:"/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    resetForm(){
        this.setState({name: '', email: '',subject:'', message: ''})
    }*/
  render() {
      if (this.props.data) {
          var name = this.props.data.name2;
          var state = this.props.data.address.state;
          var phone = this.props.data.phone;
          var email = this.props.data.email;
          var message = this.props.data.contactmessage;
      }

              return (
                  <section id="contact">
                      <div className="row section-head">
                          <div className="two columns header-col">
                              <h1><span>Get In Touch.</span></h1>
                          </div>
                          <div className="ten columns">
                              <p className="lead">{message}</p>
                          </div>
                      </div>

                      <div className="row">
                          <div className="eight columns">
                              <form
                                  /*onSubmit={{}}
                                  method="POST"*/
                                  id="contactForm"
                                  name="sentMessage">
                                  <fieldset>
                                      <div>
                                          <label htmlFor="name">Name <span className="required">*</span></label>
                                          <input
                                              type="text"
                                              defaultValue=""
                                              size="35"
                                              name="name"
                                              onChange={this.onNameChange}
                                              required
                                          />
                                      </div>
                                      <div>
                                          <label htmlFor="email">Email <span className="required">*</span></label>
                                          <input
                                              type="text"
                                              defaultValue=""
                                              size="35"
                                              name="email"
                                              onChange={this.onEmailChange}
                                              required
                                          />
                                      </div>
                                      <div>
                                          <label htmlFor="subject">Subject</label>
                                          <input
                                              type="text"
                                              defaultValue=""
                                              size="35"
                                              name="subject"
                                              onChange={this.onSubjectChange}
                                          />
                                      </div>
                                      <div>
                                          <label htmlFor="message">Message <span className="required">*</span></label>
                                          <textarea
                                              cols="50"
                                              rows="15"
                                              name="message"
                                              onChange={this.onMsgChange}
                                              required
                                          />
                                      </div>
                                      <div>
                                          <button className="submit">Submit</button>
                                          <span id="image-loader">
                     </span>
                                      </div>
                                  </fieldset>
                              </form>

                              <div id="message-warning"> Error boy</div>
                              <div id="message-success">
                                  <i className="fa fa-check"/>Your message was sent, thank you!<br/>
                              </div>
                          </div>

                          <aside className="four columns footer-widgets">
                              <div className="widget widget_contact">

                                  <h4>Address and Phone</h4>
                                  <p className="address">
                                      {name}<br/>
                                      {state}<br/>
                                      <span>{phone}</span> <br/>
                                      <strong>{email}</strong>
                                  </p>
                              </div>
                          </aside>
                      </div>
                      {/*<div className="row"><ContactForm /></div>*/}
                  </section>
              );
          }
}

export default Contact;
