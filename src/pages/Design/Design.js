import React from "react";
import styled from "styled-components";
import './Design.css';
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";
import LowPoly from '../../assets/images/low-poly.png'
import Branding from '../../assets/images/branding.png'
import IconPack from '../../assets/images/icon-pack.png'
import UiUx from '../../assets/images/ui-ux.png'

const DesignPage = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 2 / span 9;
  display: flex;
  align-items: center;
`

const DesignList = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(6, 500px);
  grid-gap: 18px;
  overflow-x: auto;
  padding-bottom: 16px;

  &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #383838;
    }

  &::-webkit-scrollbar
    {
      height: 3px;
      background-color: #383838;
    }

  &::-webkit-scrollbar-thumb
    {
      background-color: #FFFFFF;
      border-radius: 3px;
  }
`

const DesignItem = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid white; */
  transition-duration: .3s;
  transition-timing-function: ease-in;
`

const DesignTitle = styled.h4`
  width: fit-content;
  margin-top: 22px;
  margin-bottom: 8px;
  font-size: 18px;
`
const DesignThumb = styled.img`
  width: 100%;
`

const Design = () => {
  return (
    <DesignPage>
      <div className="design-title-content">
        <FadeInUpBox yOffset={64} duration={1}>
          <h1 className="design-title">Design</h1>
        </FadeInUpBox>
        <FadeInUpBox>
          <DesignList>
            <DesignItem>
              <DesignTitle>The Low Poly Project (Coming Soon)</DesignTitle>
              <DesignThumb src={LowPoly} />
            </DesignItem>
            <DesignItem>
              <DesignTitle>Branding (Coming Soon)</DesignTitle>
              <DesignThumb src={Branding} />
            </DesignItem>
            <DesignItem>
              <DesignTitle>UI/UX Design (Coming Soon)</DesignTitle>
              <DesignThumb src={UiUx} />
            </DesignItem>
            <DesignItem>
              <DesignTitle>Icon Packs (Coming Soon)</DesignTitle>
              <DesignThumb src={IconPack} />
            </DesignItem>
          </DesignList>
        </FadeInUpBox>
      </div>
    </DesignPage>
  )
}

export default Design