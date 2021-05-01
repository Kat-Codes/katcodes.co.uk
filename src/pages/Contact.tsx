import React from 'react';
// import styled from 'styled-components';
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
        return (
            <>
                {/* <Title>Hello</Title> */}
                <ContactForm />
            </>
        )

    }
}

// const Title = styled.h2`
//     margin-top: 125px;
// `;

export default Contact;
