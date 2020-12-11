import React from "react";
import styled from "styled-components";
import './Work.css';
import { FadeInUpBox } from "../../ui/atoms/fade-in-up-box";

const WorkPage = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 2 / span 9;
  display: flex;
  align-items: center;
`

const WorkList = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`

const WorkItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 22px;
  border: 1px solid white;
  transition-duration: .3s;
  transition-timing-function: ease-in;
`

const WorkTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 18px;
`
const WorkPosition = styled.p`
  font-size: 10px;
  font-weight: normal;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 8px;
`
const WorkDescription = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 14px;
`

const Work = () => {
  return (
    <WorkPage>
      <div className="work-title-content">
        <FadeInUpBox yOffset={64} duration={1}>
          <h1 className="work-title">Work</h1>
        </FadeInUpBox>
        <FadeInUpBox>
          <WorkList>
            <WorkItem>
              <WorkTitle>Scaling <b>SleepyCat</b> to a 100x business</WorkTitle>
              <WorkPosition>Product Design and Full Stack Development</WorkPosition>
              <WorkDescription>At SleepyCat we created Order Management System that helped them scale their business from 10x to 100x</WorkDescription>
            </WorkItem>
            <WorkItem>
              <WorkTitle>Replacing Salesforce at <b>Isprava</b></WorkTitle>
              <WorkPosition>Product Design and Full Stack Development</WorkPosition>
              <WorkDescription>At Isprava we replaced their existing salesforce system with an opertaion intelligence that was focused to their business problem</WorkDescription>
            </WorkItem>
            <WorkItem>
              <WorkTitle>Fast digital solution for <b>Portagent</b></WorkTitle>
              <WorkPosition>Product Design and Full Stack Development</WorkPosition>
              <WorkDescription>We helped Portagent create a new brand Odyssey for managing shipment, clients and third party all in one system.</WorkDescription>
            </WorkItem>
            <WorkItem>
              <WorkTitle>Building microfrontend architecture with Angular and ReasonReact at <b>Invideo</b></WorkTitle>
              <WorkPosition>Frontend Engineer</WorkPosition>
              <WorkDescription>Invideo had a working product and wanted to rewrite it from angular to reasonreact. We helped them build microfrontend architecture where angular and reasonreact co-existed and helped them rewrite their product.</WorkDescription>
            </WorkItem>
          </WorkList>
        </FadeInUpBox>
      </div>
    </WorkPage>
  )
}

export default Work