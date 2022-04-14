import React, { useState } from "react";
import styled from "styled-components";
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";
import LowPoly from '../../assets/images/low-poly.png'
import Branding from '../../assets/images/branding.png'
import IconPack from '../../assets/images/icon-pack.png'
import UiUx from '../../assets/images/ui-ux.png'
import { Flex } from "../../ui/atoms/flex";
import { MotionSlider } from "../../components/MotionSlider";
import { Box } from "../../ui/atoms/box";
import { ChevronLeft,ChevronRight } from "react-feather";
import Button from "../../components/Button";

const PAGE_ITEM_COUNT = 4

const blogsList = [
  {
    key: 'clean-react-code',
    title: <b className='font-bold'>Writing cleaner React code</b>,
    tagline: 'React | Programming',
    description: 'Simple tips and tricks to write better React code',
    link: 'https://dev.to/da9ish/writing-cleaner-react-code-28j2',
    image: UiUx
  },
  {
    key: 'react-native-iap',
    title: <b className='font-bold'>How to test Google's In-App Purchase</b>,
    tagline: 'React Native | In-App Purchase',
    description: 'My learnings from implement IAP in React Native',
    link: 'https://dev.to/da9ish/how-to-test-googles-in-app-purchase-86a',
    image: IconPack
  },
  {
    key: 'search-hooks-for-apollo-graphql',
    title: <b className='font-bold'>Custom Search Hook for Apollo GraphQL</b>,
    tagline: 'React | Apollo GraphQL',
    description: 'A custom hook implementation for searching with Apollo GraphQL Queries',
    link: '',
    image: LowPoly
  },
  {
    key: 'state-management-with-recoil',
    title: <b className='font-bold'>State Management with Recoil</b>,
    tagline: 'React | Recoil',
    description: 'In depth walkthrough Recoil with React',
    link: '',
    image: Branding
  }
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

const BlogsList = () => {
  const pageSize =  Math.floor((blogsList.length + PAGE_ITEM_COUNT - 1) / PAGE_ITEM_COUNT)


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
        <OutlineHeading className='mt-4 text-5xl lg:text-7xl'>Blogs</OutlineHeading>
        <Flex className="w-full flex-grow">
          <MotionSlider page={page} direction={direction} paginate={paginate}>
          <Box className='grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-0 items-center'>
              {blogsList.slice(page * PAGE_ITEM_COUNT, page * PAGE_ITEM_COUNT + PAGE_ITEM_COUNT).map(blog =>
                <div key={blog.key} className='h-full flex flex-col justify-center px-4 lg:px-8 pt-12 pb-8 border-2 border-gray-50'>
                  <div className="flex flex-col flex-grow justify-center pt-4">
                    <div className='mt-0 mb-2 text-xl font-normal'>{blog.title}</div>
                    <div className='italic text-gray-300 text-xs mb-2'>{blog.tagline}</div>
                    <div className='text-md mb-4'>{blog.description}</div>
                  </div>
                  {blog.link ? (
                    <Button label="Read" href={blog.link} target="_blank" rel="noopener noreferrer" />
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

export default BlogsList