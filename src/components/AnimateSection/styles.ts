import styled, { keyframes } from 'styled-components/macro'
import Logo from '../../images/triple2x.png'

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`
export const SectionContainer = styled.section`
  position: relative;
  width: 1200px;
  height: auto;
  margin: 0 auto;
`
export const ContentLogo = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);

  animation-delay: 0s;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`

export const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  animation-delay: 0.1s;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`

export const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`
export const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;

  animation-delay: 0.2s;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`

export const AwardItem = styled.div`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`
