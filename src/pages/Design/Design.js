import React, { useState } from "react";
import styled from "styled-components";
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";
import Mustang from '../../assets/images/mustang.png'
import CerebrateSolutions from '../../assets/images/cerebrate-solutions.png'
import UiUx from '../../assets/images/ui-ux.png'
import { Flex } from "../../ui/atoms/flex";
import { MotionSlider } from "../../components/MotionSlider";
import { Box } from "../../ui/atoms/box";
import { ChevronLeft,ChevronRight } from "react-feather";
import Button from "../../components/Button";

const PAGE_ITEM_COUNT = 4

const designsList = [
  {
    key: 'low-poly',
    title: <b className='font-bold'>3D Modeling</b>,
    tagline: '3D Designs in Blender',
    description: 'Having fun while learning Blender',
    image: Mustang,
    link: "https://www.behance.net/gallery/141635329/3D-modelling-in-Blender"
  },
  {
    key: 'branding',
    title: <b className='font-bold'>Cerebrate Solutions</b>,
    tagline: 'Rebrand and Redesign',
    description: 'A case study on Cerebrate Solutions',
    image: CerebrateSolutions,
    link: "https://www.behance.net/gallery/141636195/Cerebrate-Solutions-Rebrand-and-Redesign"
  },
  {
    key: 'ui-ux',
    title: <b className='font-bold'>Introspec</b>,
    tagline: 'UI/UX Design',
    description: 'A personal side project case study',
    image: UiUx,
    // link: "https://www.behance.net/gallery/141635329/3D-modelling-in-Blender"
  },
  // {
  //   key: 'icon-pack',
  //   title: <b className='font-bold'>Icon Pack</b>,
  //   tagline: 'Android Icon Packs',
  //   description: 'lorem ipsum',
  //   image: IconPack,
  //   // link: "https://www.behance.net/gallery/141635329/3D-modelling-in-Blender"
  // }
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

const Design = () => {
  const pageSize =  Math.floor((designsList.length + PAGE_ITEM_COUNT - 1) / PAGE_ITEM_COUNT)

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
    <div className='px-4 lg:px-48 grid grid-cols-1 gap-2 w-full h-screen'>
      <FadeInUpBox yOffset={64} duration={1} className='flex flex-col items-start'>
        <OutlineHeading className='mt-4 text-5xl lg:text-7xl'>Design</OutlineHeading>
        <Flex className="w-full flex-grow">
          <MotionSlider page={page} direction={direction} paginate={paginate}>
          <Box className='grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-0 items-center'>
              {designsList.slice(page * PAGE_ITEM_COUNT, page * PAGE_ITEM_COUNT + PAGE_ITEM_COUNT).map(design =>
                <div key={design.key} className='h-full flex flex-col justify-center px-4 lg:px-8 pt-12 pb-8 border-2 border-gray-50'>
                  <div className="flex flex-col items-start justify-center pt-4">
                    <div className='mt-0 mb-2 text-xl font-normal'>{design.title}</div>
                    <div className='italic text-gray-300 text-xs mb-2'>{design.tagline}</div>
                    <div className='text-md mb-4'>{design.description}</div>
                  </div>
                  {design.link ? (
                    <Button label="Check it out" href={design.link} target="_blank" rel="noopener noreferrer" />
                  ) : (
                    <Button label="Coming Soon!" disabled />
                  )}
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

export default Design