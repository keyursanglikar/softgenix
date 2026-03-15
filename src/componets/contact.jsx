import "./contactsection.css";

const ContactFooter = () => {
  return (
    <section className="contact-footer-section">
      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hi? Fill out the form below or reach out directly.
        </p>
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>About Softgenix</h3>
  <p>
    Softgenix is a modern IT solutions company delivering scalable software, websites, and applications to help businesses grow in the digital world.
  </p>
            <p>Email: <a href="mailto:info@softgenix.com">softgenix@gmail.com</a></p>
            <p>Phone: <a href="tel:+911234567890">+91 7219449121 / 9518721792</a></p>
            <p>Address: 35 B Pratap Ganj Peth Satara</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="phone" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <p>&copy; 2026 Softgenix IT Solutions. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;