
import './Navbar.css'

const Navbar = () =>{
    return (
    <div className="Navbar-container">
     <div className="nav-logo">
        <img src="logo.png" alt="softgenix"></img>
     </div>
     <ul className='nav-list'>
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
     </ul>
    
    <button className="GetStarted">Get Started</button>
   
    </div>
    )
}

export default Navbar;