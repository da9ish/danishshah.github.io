import React, { useState } from "react";
import styled from "styled-components";

import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";
import { MotionSlider } from "../../components/MotionSlider";
import { Box } from "../../ui/atoms/box";
import { Flex } from "../../ui/atoms/flex";
import { ChevronLeft,ChevronRight } from "react-feather";

const PAGE_ITEM_COUNT = 4

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
    title: <>Building microfrontend architecture at <b className='font-bold'>Invideo</b></>,
    role: 'Frontend Engineer',
    description: 'Invideo had a working product and wanted to rewrite it from angular to reasonreact. We helped them build microfrontend architecture where angular and reasonreact co-existed and helped them rewrite their product.'
  },
  {
    key: 'dashx',
    title: <><b className='font-bold'>DashX</b> is Product Framework with everything a startup needs to build a tech product.</>,
    role: 'Sr. Frontend Engineer & Product Designer',
    description: 'DashX is an in-house product of KeepWorks. I’m responsible for creating new UI, improving UX and building and shipping new features.'
  },
]

const OutlineHeading = styled.h1`
  margin-top: 123px;
  margin-bottom: 32px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

const Arrow = styled(Box)`
  cursor: pointer;
`;
Arrow.defaultProps = {
  color: "text",
  fontSize: 2,
  fontWeight: 2,
  p: 2
};

const Bullet = styled(Box)`
  cursor: pointer;
`;
Bullet.defaultProps = {
  display: "inline-block",
};


const Work = () => {
  const pageSize =  (workList.length + PAGE_ITEM_COUNT - 1) / PAGE_ITEM_COUNT

  const [[page, direction], setPage] = useState([0, 0]);
  const [activeBullet, setActiveBullet] = useState(0);
  const paginate = newDirection => {
    if (page + newDirection < pageSize && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
      setActiveBullet(page + newDirection);
    } else if (page + newDirection === pageSize) {
      setPage([0, 0]);
      setActiveBullet(0);
    } else if (page + newDirection === -1) {
      setPage([pageSize - 1, 0]);
      setActiveBullet(pageSize - 1);
    }
  };

  return (
    <div className='px-4 lg:px-48 grid w-full h-screen'>
      <FadeInUpBox yOffset={64} duration={1} className='flex flex-col items-start'>
        <OutlineHeading className='mt-4 text-5xl lg:text-7xl'>Work</OutlineHeading>
        <Flex className="w-full flex-grow">
          <MotionSlider page={page} direction={direction} paginate={paginate} >
            <Box className='grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-0 items-center'>
              {workList.slice(page * PAGE_ITEM_COUNT, page * PAGE_ITEM_COUNT + PAGE_ITEM_COUNT).map(work =>
                <div key={work.key} className='h-full flex flex-col justify-center px-4 lg:px-8 py-12 border-2 border-gray-50'>
                  <div className='mt-0 mb-2 text-xl font-normal'>{work.title}</div>
                  <div className='italic text-gray-300 text-xs mb-2'>{work.role}</div>
                  <div className='text-md'>{work.description}</div>
                </div>
              )}
            </Box>
          </MotionSlider>
        </Flex>
        <Flex
          className="my-4"
          alignItems="center"
          style={{ zIndex: 1 }}
        >
          <Arrow className="link mr-2 rounded-full hover:bg-gray-800" onClick={() => paginate(-1)}><ChevronLeft /></Arrow>
          {Array.apply(0, Array(pageSize)).map((item, idx) => (
            <Bullet
              key={idx}
              className={`w-2 h-2 mx-1 rounded-full ${idx === page ? 'bg-white' : 'bg-gray-800'}`}
              onClick={() => {
                setPage([idx, 0]);
                setActiveBullet(idx);
              }}
              bg={activeBullet === idx ? "brand" : "text"}
            />
          ))}
          <Arrow className="link ml-2 rounded-full hover:bg-gray-800" onClick={() => paginate(1)}><ChevronRight /></Arrow>
        </Flex>
      </FadeInUpBox>
    </div>
  )
}

export default Work