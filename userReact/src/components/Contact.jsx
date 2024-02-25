import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="required"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="required"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the Situation</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="15"
              required></textarea>
          </div>  
        <button type="submit" className="btn btn-primary sendButton">Submit</button>
      </form>
      </div>

      <div className="google-map-container">
        <iframe
        title="Find us on Google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1602802684192!2d77.39638073968018!3d28.504825075835775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks%20%7C%20Coding%20Classes!5e0!3m2!1sen!2sin!4v1702963476861!5m2!1sen!2sin"
        width="400"
        height="300"
        allowFullScreen=""
        loading="lazy"        
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
