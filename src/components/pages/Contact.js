import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    


        emailjs.sendForm('service_ievmqr2', 'template_753tn33', e.target, 'user_oKxgPcNXobV2gdxgosmPi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }); 

          e.target.reset();
        }

    return (
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
            <label>Name:</label>
            <input type="text" name="name" className="form-control" required/>
            <label>Subject:</label>
            <input type="text" name="subject" className="form-control" required/>
            <label>Email:</label>
            <input type="email" name="from_email" className="form-control" required/>
            <label>Message:</label>
            <textarea name="message" className="form-control1" rows={4} required></textarea>
            <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact
