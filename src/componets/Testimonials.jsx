import { AiFillStar } from "react-icons/ai";
import "./testimonialCarousel.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      feedback:
        "Softgenix delivered our website on time and the app is absolutely amazing. Highly recommended!",
      img: "https://i.pravatar.cc/100?img=1",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Marketing Head, BrightMedia",
      feedback:
        "Their team created a smooth digital marketing solution for our business. Results were incredible.",
      img: "https://i.pravatar.cc/100?img=2",
      rating: 4,
    },
    {
      name: "Robert Wilson",
      role: "Founder, StartupX",
      feedback:
        "Softgenix understood our needs and delivered beyond expectations. Great team and support!",
      img: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
      {
      name: "Robert Wilson",
      role: "Founder, StartupX",
      feedback:
        "Softgenix understood our needs and delivered beyond expectations. Great team and support!",
      img: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
      {
      name: "Robert Wilson",
      role: "Founder, StartupX",
      feedback:
        "Softgenix understood our needs and delivered beyond expectations. Great team and support!",
      img: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
      {
      name: "Robert Wilson",
      role: "Founder, StartupX",
      feedback:
        "Softgenix understood our needs and delivered beyond expectations. Great team and support!",
      img: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
      {
      name: "Robert Wilson",
      role: "Founder, StartupX",
      feedback:
        "Softgenix understood our needs and delivered beyond expectations. Great team and support!",
      img: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
  ];

  return (
    <section className="testimonial-carousel-section">
      <h2 className="testimonial-carousel-title">What Our Clients Say</h2>
      <div className="testimonial-carousel-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <div className="testimonial-rating">
              {Array.from({ length: t.rating }).map((_, i) => (
                <AiFillStar key={i} size={20} color="#facc15" />
              ))}
            </div>
            <h3 className="testimonial-name">{t.name}</h3>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;