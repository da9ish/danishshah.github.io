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

const Work = () => {
  return (
    <div className='px-48 grid grid-cols-1 gap-2 w-full h-screen'>
      <FadeInUpBox yOffset={64} duration={1} className='flex items-end'>
        <OutlineHeading>Work</OutlineHeading>
      </FadeInUpBox>
      <FadeInUpBox>
        <div className='grid grid-cols-2'>
          <div className='relative flex flex-col justify-center px-8 py-12 border border-style border-gray-50'>
            <div className='mt-0 mb-2 text-xl font-normal'>Scaling <b className='font-bold'>SleepyCat</b> to a 100x business</div>
            <div className='italic text-gray-300 text-xs mb-2'>Product Design and Full Stack Development</div>
            <div className='text-md'>At SleepyCat we created Order Management System that helped them scale their business from 10x to 100x</div>
          </div>
          <div className='relative flex flex-col justify-center px-8 py-12 border border-style border-gray-50'>
            <div className='mt-0 mb-2 text-xl font-normal'>Replacing Salesforce at <b className='font-bold'>Isprava</b></div>
            <div className='italic text-gray-300 text-xs mb-2'>Product Design and Full Stack Development</div>
            <div className='text-md'>At Isprava we replaced their existing salesforce system with an opertaion intelligence that was focused to their business problem</div>
          </div>
          <div className='relative flex flex-col justify-center px-8 py-12 border border-style border-gray-50'>
            <div className='mt-0 mb-2 text-xl font-normal'>Fast digital solution for <b className='font-bold'>Portagent</b></div>
            <div className='italic text-gray-300 text-xs mb-2'>Product Design and Full Stack Development</div>
            <div className='text-md'>We helped Portagent create a new brand Odyssey for managing shipment, clients and third party all in one system.</div>
          </div>
          <div className='relative flex flex-col justify-center px-8 py-12 border border-style border-gray-50'>
            <div className='mt-0 mb-2 text-xl font-normal'>Building microfrontend architecture with Angular and ReasonReact at <b className='font-bold'>Invideo</b></div>
            <div className='italic text-gray-300 text-xs mb-2'>Frontend Engineer</div>
            <div className='text-md'>Invideo had a working product and wanted to rewrite it from angular to reasonreact. We helped them build microfrontend architecture where angular and reasonreact co-existed and helped them rewrite their product.</div>
          </div>
        </div>
      </FadeInUpBox>
    </div>
  )
}

export default Work