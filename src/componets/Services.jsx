import "./services.css";
import logoDesignIcon from '../assets/logo-design.png';
import digitalMarketingIcon from '../assets/digital-Marketing.png';
import appDevIcon from '../assets/App-Developement.png';
import softwareDevIcon from '../assets/Software-Devlopement.png';
import webDevIcon from '../assets/Web-Devlopement.png';

const Services = () => {
  const services = [
    { icon: logoDesignIcon, title: "Logo Design", description: "Creative and professional logo design for your brand." },
    { icon: digitalMarketingIcon, title: "Digital Marketing", description: "SEO, SMM, and complete digital marketing solutions." },
    { icon: appDevIcon, title: "App Development", description: "Custom iOS and Android mobile apps for your business." },
    { icon: softwareDevIcon, title: "Software Development", description: "Smart software solutions to automate and scale your business." },
    { icon: webDevIcon, title: "Website Development", description: "Modern, responsive, and high-performance websites." },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Softgenix IT Solutions offers a full range of digital services to help your business succeed.
      </p>

      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;