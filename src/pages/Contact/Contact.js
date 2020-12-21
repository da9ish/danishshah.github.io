import React from "react";
import styled from "styled-components";
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";


const OutlineHeading = styled.h1`
  font-size: 72px;
  margin-bottom: 8px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

const Contact = () => {
  return (
    <div className='px-48 grid grid-cols-1 gap-2 w-full h-screen'>
      <FadeInUpBox yOffset={64} duration={1} className='flex items-end'>
        <OutlineHeading>Contact</OutlineHeading>
      </FadeInUpBox>
      <FadeInUpBox>
        <p>If you'd like to talk, just send me an email at <a className="hover:underline transition-all" href="mailto:hi@danish.codes"><b>hi@danish.codes</b></a></p>
      </FadeInUpBox>
    </div>
  )
}

export default Contact