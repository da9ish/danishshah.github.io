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

const Work = () => {
  const workList = [
    {
      key: 'sleepycat',
      title: <>Scaling <b className='font-bold'>SleepyCat</b> to a 100x business</>,
      role: 'Product Design and Full Stack Development',
      description: 'At SleepyCat we created Order Management System that helped them scale their business from 10x to 100x'
    },
    {
      key: 'isprava',
      title: <>Replacing Salesforce at <b className='font-bold'>Isprava</b></>,
      role: 'Product Design and Full Stack Development',
      description: 'At Isprava we replaced their existing salesforce system with an opertaion intelligence that was focused to their business problem'
    },
    {
      key: 'portagent',
      title: <>Fast digital solution for <b className='font-bold'>Portagent</b></>,
      role: 'Product Design and Full Stack Development',
      description: 'We helped Portagent create a new brand Odyssey for managing shipment, clients and third party all in one system.'
    },
    {
      key: 'invideo',
      title: <>Building microfrontend architecture with Angular and ReasonReact at <b className='font-bold'>Invideo</b></>,
      role: 'Frontend Engineer',
      description: 'Invideo had a working product and wanted to rewrite it from angular to reasonreact. We helped them build microfrontend architecture where angular and reasonreact co-existed and helped them rewrite their product.'
    },
  ]
  return (
    <div className='px-4 lg:px-48 grid grid-cols-1 gap-2 w-full h-screen'>
      <FadeInUpBox yOffset={64} duration={1} className='flex items-end'>
        <OutlineHeading className='text-5xl lg:text-7xl'>Work</OutlineHeading>
      </FadeInUpBox>
      <FadeInUpBox>
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-0'>
          {workList.map(work =>
            <div key={work.key} className='relative flex flex-col justify-center px-4 lg:px-8 py-12 border border-style border-gray-50'>
              <div className='mt-0 mb-2 text-xl font-normal'>{work.title}</div>
              <div className='italic text-gray-300 text-xs mb-2'>{work.role}</div>
              <div className='text-md'>{work.description}</div>
            </div>
          )}
        </div>
      </FadeInUpBox>
    </div>
  )
}

export default Work