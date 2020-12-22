import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";
import Rails from '../../assets/images/rails.png';
import ReactLogo from '../../assets/images/react.png';
import Figma from '../../assets/images/figma.png';
import GraphQL from '../../assets/images/graphql.png';
import Illustrator from '../../assets/images/illustrator.png';
import Photoshop from '../../assets/images/photoshop.png';

const DesignAsset = styled(motion.div)`
  width: ${props => props.design.width};
  height: ${props => props.design.height};
  background-image: url("${props => props.design.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  position: absolute;
  box-shadow: 12px 12px 12px 0 rgba(0,0,0,0.2);
  top: ${props => props.design.top};
  left: ${props => props.design.left};
  z-index: ${props => props.design.zIndex};
`

const OutlineHeading = styled.h4`
  margin-bottom: 8px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

const Home = () => {
  const [mouseX, setMouseX] = useState(null)
  const [mouseY, setMouseY] = useState(null)
  const designAssets = [
    {
      url: "https://cdn.dribbble.com/users/882543/screenshots/5986839/shot-cropped-1549652615910.png",
      top: "100px",
      left: "100px",
      width: "500px",
      height: `${500 / 1.33}px`,
      zIndex: 9,
    },
    {
      url: "https://cdn.dribbble.com/users/882543/screenshots/4884354/de_ui_dribbble.jpg",
      top: "550px",
      left: 0,
      width: "300px",
      height: `${300 / 1.33}px`,
      zIndex: 10,
    },
    {
      url: "https://cdn.dribbble.com/users/882543/screenshots/4827697/shot-cropped-1531651315858.png",
      top: "600px",
      left: "350px",
      width: "400px",
      height: `${400 / 1.33}px`,
      zIndex: 11,
    }
  ]

  return (
    <div className="px-4 lg:px-32 grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-16 sm:gap-2 w-full h-full lg:h-screen" onMouseMove={(e) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }}>
      <div className='flex flex-col justify-center'>
        <FadeInUpBox yOffset={64} duration={1}>
          <h1 className="text-6xl lg:text-7xl font-bold my-4">Danish Shah</h1>
        </FadeInUpBox>
        <FadeInUpBox yOffset={64} duration={1.2}>
          <OutlineHeading className="home-subtitle leading-16 text-4xl lg:text-4xl">I am a designer and full-stack developer</OutlineHeading>
        </FadeInUpBox>
        <FadeInUpBox yOffset={64} duration={1.4}>
          <p className='my-4 text-gray-300'>Hello. I’m a designer who codes. I strive to create simple, original, and impactful user experiences. I’m able to take ideas from concept to wireframe to prototype to production.</p>
          <p className='my-4 text-gray-300'>I do Brand Identity Design and UI/UX design. I also do illustration and 3D designs for fun. I am a self taught designer, unlike others I created my own processes around these things but also made sure that I follow the standards that delivers the best outcomes.</p>
          <p className='my-4 text-gray-300'>As a full stack developer, I work on products that scale and deliver the best user experience. I have experience shipping products built on techstack like Ruby on Rails, GraphQL and React. When is comes to development I focus on delivering UX while maintaining DevX.</p>
          <h5 className="text-sm font-regular text-gray-400">Tools & Technologies</h5>
          <div className='w-full lg:w-4/5 flex justify-around'>
            <img className='my-4' title="React" src={ReactLogo} alt="react" />
            <img className='my-4' title="Rails" src={Rails} alt="ruby-on-rails" />
            <img className='my-4' title="GraphQL" src={GraphQL} alt="grqphql" />
          </div>
          <h5 className="text-sm font-regular text-gray-400">Design Tools</h5>
          <div className='w-full lg:w-4/5 flex justify-around'>
            <img className='my-4' title="Figma" src={Figma} alt="figma" />
            <img className='my-4' title="Illustrator" src={Illustrator} alt="illustrator" />
            <img className='my-4' title="Photoshop" src={Photoshop} alt="photoshop" />
          </div>
        </FadeInUpBox>
      </div>
      <div className="hidden lg:block relative">
        {designAssets.map((design, idx) => <FadeInUpBox key={design.url} yOffset={64} duration={0.5 * idx}>
          <DesignAsset duration={0.5 * idx} animate={{ x: -mouseX / 50, y: -mouseY / 50, stdDeviation: [0, 5, 0] }} initial={0} design={design} />
        </FadeInUpBox>)}
      </div>
    </div>
  )
}

export default Home