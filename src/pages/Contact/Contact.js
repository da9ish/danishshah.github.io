import React from "react";
import styled from "styled-components";
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";


const OutlineHeading = styled.h1`
  margin-bottom: 32px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

const Contact = () => {
  return (
    <div className='px-4 lg:px-48 w-full h-screen flex flex-col justify-center'>
      <FadeInUpBox yOffset={64} duration={1}>
        <OutlineHeading className='text-5xl lg:text-7xl'>Contact</OutlineHeading>
      </FadeInUpBox>
      <FadeInUpBox>
        <p>If you'd like to talk, just send me an email at <a className="hover:underline transition-all" href="mailto:hi@danish.codes"><b>hi@danish.codes</b></a></p>
      </FadeInUpBox>
    </div>
  )
}

export default Contact