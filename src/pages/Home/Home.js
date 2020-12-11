import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import './Home.css';
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

const SkillBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`

const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 2 / span 9;
  display: flex;
  align-items: center;
`

const Home = () => {
  const ref = useRef()
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
      left: "450px",
      width: "400px",
      height: `${400 / 1.33}px`,
      zIndex: 11,
    }
  ]

  // useEffect(() => {
  //   const positions = ref.current.getAttribute('data-text').split(',')
  //   console.log(typeof positions, positions);
  //   typing(0, positions);
  // }, [])

  // const typing = (index, text) => {
  //   var textIndex = 1;

  //   var tmp = setInterval(function () {
  //     if (textIndex < text[index].length + 1) {
  //       ref.current.innerText = text[index].substr(0, textIndex);
  //       textIndex++;
  //     } else {
  //       if (index < 2) setTimeout(function () { deleting(index, text) }, 2000);
  //       clearInterval(tmp);
  //     }

  //   }, 150);
  // }

  // const deleting = (index, text) => {

  //   var textIndex = text[index].length;

  //   var tmp = setInterval(function () {

  //     if (textIndex + 1 > 0) {
  //       ref.current.innerText = text[index].substr(0, textIndex);
  //       textIndex--;
  //     } else {
  //       index++;
  //       if (index <= 2) typing(index, text);
  //       clearInterval(tmp);
  //     }

  //   }, 150)
  // }

  return (
    <HomePage onMouseMove={(e) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }}>

      <div className="home-title-content">
        <FadeInUpBox yOffset={64} duration={1}>
          <h1 className="home-title">Danish Shah</h1>
        </FadeInUpBox>
        <FadeInUpBox yOffset={64} duration={1}>
          <h4 className="home-subtitle">I am a designer and full-stack developer</h4>
          {/* <p className="typewriter"> {"I'm a "}
            <span className="home-subtitle typewriter-text" ref={ref} data-text='fullstack developer. ,UI/UX designer. ,designer who codes. '></span>
          </p> */}
        </FadeInUpBox>
        <FadeInUpBox yOffset={64} duration={1}>
          <p>Hello. I’m a designer who codes. I strive to create simple, original, and impactful user experiences. I’m able to take ideas from concept to wireframe to prototype to production.</p>
          <p>I do Brand Identity Design and UI/UX design. I also do illustration and 3D designs for fun. I am a self taught designer, unlike others I created my own processes around these things but also made sure that I follow the standards that delivers the best outcomes.</p>
          <p>As a full stack developer, I work on products that scale and deliver the best user experience. I have experience shipping products built on techstack like Ruby on Rails, GraphQL and React. When is comes to development I focus on delivering UX while maintaining DevX.</p>
          {/* <button className="btn">Résumé</button> */}
          <h5 className="home-skill-header">Tools & Technologeis</h5>
          <SkillBox>
            <img title="React" src={ReactLogo} alt="react" />
            <img title="Rails" src={Rails} alt="ruby-on-rails" />
            <img title="GraphQL" src={GraphQL} alt="grqphql" />
          </SkillBox>
          <h5 className="home-skill-header">Design Tools</h5>
          <SkillBox>
            <img title="Figma" src={Figma} alt="figma" />
            <img title="Illustrator" src={Illustrator} alt="illustrator" />
            <img title="Photoshop" src={Photoshop} alt="photoshop" />
          </SkillBox>
        </FadeInUpBox>
      </div>
      <div className="home-design-content">
        {designAssets.map(design => <FadeInUpBox key={design.url} yOffset={64} duration={1}>
          <DesignAsset duration={1} animate={{ x: -mouseX / 50, y: -mouseY / 50, stdDeviation: [0, 5, 0] }} initial={0} design={design} />
        </FadeInUpBox>)}
      </div>
    </HomePage>
  )
}

export default Home