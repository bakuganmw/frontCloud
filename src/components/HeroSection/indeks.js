import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { ButtonLink } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to Crazy Scissors</HeroH1>
        <HeroP>Make a reservation and come to us for a great haircut</HeroP>
        <HeroBtnWrapper>
          <ButtonLink to="reservations" onMouseEnter={onHover} onMouseLeave={onHover}>
            get reservation {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
