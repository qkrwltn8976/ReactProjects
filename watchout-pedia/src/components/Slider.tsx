import React from 'react';
import ReactSlider, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

interface Props {
  settings?: Settings;
  children?: JSX.Element[]
}

const StyledSlider = styled(ReactSlider)`
  & {
    position: relative;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`
const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: 1px;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
  &:before {
    content: initial;
  }
  position: absolute;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  )


};

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
  <StyledSlider {...settings}>
    {children}
  </StyledSlider>
)

export default Slider;