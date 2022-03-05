import React from "react";
import gsap from "gsap";
import ContactForm from "../organisms/Form";

class Contact extends React.Component {
  componentDidMount(): void {
    this.animate();
  }

  animate = (): void => {
    const tl = gsap.timeline();
    tl.to(".contactForm", { y: -25, opacity: 1 });
  };

  render(): JSX.Element {
    return <ContactForm />;
  }
}
export default Contact;
