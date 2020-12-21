import React from "react";
import styled from "styled-components";
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";
import LowPoly from '../../assets/images/low-poly.png'
import Branding from '../../assets/images/branding.png'
import IconPack from '../../assets/images/icon-pack.png'
import UiUx from '../../assets/images/ui-ux.png'

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

const OutlineHeading = styled.h1`
  font-size: 72px;
  margin-bottom: 8px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

const Design = () => {
  return (
    <div className='px-48 grid grid-cols-1 gap-2 w-full h-screen'>
      <FadeInUpBox yOffset={64} duration={1} className='flex items-end'>
        <OutlineHeading>Design</OutlineHeading>
      </FadeInUpBox>
      <FadeInUpBox>
        <DesignList>
          <div className='w-full relative flex-col justify-center'>
            <div className='text-xl font-medium pb-2'>The Low Poly Project (Coming Soon)</div>
            <img className='w-full' alt='LowPoly' src={LowPoly} />
          </div>
          <div className='w-full relative flex-col justify-center'>
            <div className='text-xl font-medium pb-2'>Branding (Coming Soon)</div>
            <img className='w-full' alt='Branding' src={Branding} />
          </div>
          <div className='w-full relative flex-col justify-center'>
            <div className='text-xl font-medium pb-2'>UI/UX Design (Coming Soon)</div>
            <img className='w-full' alt='UI/UX' src={UiUx} />
          </div>
          <div className='w-full relative flex-col justify-center'>
            <div className='text-xl font-medium pb-2'>Icon Packs (Coming Soon)</div>
            <img className='w-full' alt='Icon Pack' src={IconPack} />
          </div>
        </DesignList>
      </FadeInUpBox>
    </div>
  )
}

export default Design