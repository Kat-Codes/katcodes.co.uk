import React from 'react';
import gsap from 'gsap';
import ContactForm from '../components/Form';

class Contact extends React.Component {

  componentDidMount() {
    this.animate();
}

    animate = () => {
        const tl = gsap.timeline();
        tl.to('.contactForm', { y: -25, opacity: 1 });
    };

    render() {
        return <ContactForm/>;
    }
}

export default Contact;
