import "./about.css";
import ThreeD from '../assets/10798281_19362653.jpg'

const About = () => {
  return (
    <section className="about-section">
      
      <div className="about-image">
        <img src={ThreeD} alt="software development"/>
      </div>

      <div className="about-content">
        <h2 className="about-title">Why Choose Softgenix?</h2>

        <p className="about-text">
          Softgenix IT Solutions helps businesses grow through modern
          technology. We design powerful websites, build scalable software,
          and develop smart applications that improve productivity and
          digital presence.
        </p>

        <ul className="about-list">
          <li>✔ Custom Website Development</li>
          <li>✔ Software & Application Development</li>
          <li>✔ Modern UI/UX Design</li>
          <li>✔ Secure & Scalable Solutions</li>
        </ul>

      </div>

    </section>
  );
};

export default About;