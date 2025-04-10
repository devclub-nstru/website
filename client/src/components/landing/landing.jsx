import { React, useState, useEffect } from "react";

import {
  LandingContainer,
  ImageContainer,
  Image,
  ImageContainer2,
  Image2,
  HeroSubHeading,
  HeroHeadingLine1,
  HeroHeadingLine2,
  ImageContainer3,
  Image3,
  ImageContainer4,
  Image4,
  ImageContainer5,
  Image5,
  ImageContainer6,
  Image6,
} from "./landing.styles";

import universityLogo from "../../../public/images/university_logo.png";
import heading_3 from "../../../public/images/heading_3.png";
import landing_vector from "../../../public/images/landing_vector.png";
import landing_wormhole from "../../../public/images/landing_wormhole.png";
import blue_stars from "../../../public/images/blue_stars.png";
import red_stars from "../../../public/images/red_stars.png";

const Landing = () => {
  const quotes = [
    "Real devs debug in prod",
    "Running on caffeine and questionable logic.",
    "Actively drinking a cup of tea & programming!",
    "Live. Laugh. Push to Prod.",
    "Coffee in, bugs out. Hopefully.",
    "Commit first. Think later.",
    "I write code. Sometimes it even runs.",
    "Deploying tommorow, just for the adrenaline rush.",
    "VP===VP",
    "Hardik or hardick",
  ];

  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  useEffect(() => {
    getRandomQuote();

    // const interval = setInterval(() => {
    //   getRandomQuote();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <LandingContainer data-aos="zoom-in">
      <ImageContainer>
        <Image src={universityLogo} alt="University Logo" />
      </ImageContainer>
      <HeroSubHeading data-aos="fade-up" data-aos-delay="200">
        {quote}
      </HeroSubHeading>
      <HeroHeadingLine1 data-aos="fade-up" data-aos-delay="400">
        Innovating
        <ImageContainer5>
          <Image5 src={blue_stars} alt="Blue Stars" />
        </ImageContainer5>
      </HeroHeadingLine1>
      <HeroHeadingLine2>
        Tech to a
        <ImageContainer6>
          <Image6 src={red_stars} alt="Red Stars" />
        </ImageContainer6>
      </HeroHeadingLine2>
      <ImageContainer2>
        <Image2 src={heading_3} alt="heading" />
      </ImageContainer2>
      <ImageContainer3>
        <Image3 src={landing_vector} alt="Landing Vector" />
      </ImageContainer3>
      <ImageContainer4>
        <Image4 src={landing_wormhole} alt="Wormhole" />
      </ImageContainer4>
    </LandingContainer>
  );
};

export default Landing;
