import React from "react";
import styled from "styled-components";
import './Contact.css';
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";

const ContactPage = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 2 / span 9;
  display: flex;
  align-items: center;
`

const Contact = () => {
  return (
    <ContactPage>
      <div className="contact-title-content">
        <FadeInUpBox yOffset={64} duration={1}>
          <h1 className="contact-title">Contact</h1>
        </FadeInUpBox>
        <FadeInUpBox>
          <p>If you'd like to talk, just send me an email at <a className="email-link" href="mailto:hi@danish.codes"><b>hi@danish.codes</b></a></p>
        </FadeInUpBox>
      </div>
    </ContactPage>
  )
}

export default Contact