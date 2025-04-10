import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  EventsWrapper,
  ClubHeading,
  ThingsHeading,
  Embla,
  EmblaContainer,
  EmblaSlide,
  TextContainer,
  ImageContainer,
  EmblaPagination,
  EmblaDot,
} from "./Events.styles";
import {
  MovingTextSection,
  MarqueeWrapper,
  MarqueeContent,
} from "./MovingText.styles"; // Import styles for the moving text section
import Footer from "./Footer"; // Import the Footer component

import event from "../../../public/images/event.png";

const eventSlides = [
  {
    title: "Event 1",
    date: "2023-12-01",
    description: "This is a brief description of Event 1.",
    image: event,
  },
  {
    title: "Event 2",
    date: "2023-12-15",
    description: "This is a brief description of Event 2.",
    image: event,
  },
  {
    title: "Event 3",
    date: "2024-01-10",
    description: "This is a brief description of Event 3.",
    image: event,
  },
];

const Events = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, speed: 5, skipSnaps: false }, // Ensure snaps are not skipped
    [Autoplay({ delay: 3000 })] // Autoplay with 3-second delay
  );

  useEffect(() => {
    if (!emblaApi) return;

    const paginationDots = document.querySelectorAll(".embla__dot");

    const updatePagination = () => {
      if (!emblaApi) return; // Ensure emblaApi is ready
      const selectedIndex = emblaApi.selectedScrollSnap();
      paginationDots.forEach((dot, index) => {
        dot.classList.toggle("is-selected", index === selectedIndex);
      });
    };

    const onDotClick = (index) => {
      if (!emblaApi) return; // Ensure emblaApi is ready
      emblaApi.scrollTo(index);
    };

    paginationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => onDotClick(index));
    });

    emblaApi.on("select", updatePagination);
    updatePagination(); // Initialize pagination on mount

    return () => {
      if (!emblaApi) return; // Ensure emblaApi is ready
      emblaApi.off("select", updatePagination);
      paginationDots.forEach((dot, index) => {
        dot.removeEventListener("click", () => onDotClick(index));
      });
    };
  }, [emblaApi]);

  // const text =
  //   "CYBERSECURITY // BLOCKCHAIN // CLIENT SIDE PROGRAMMING // SERVER SIDE PROGRAMMING // UI-UX DESIGN";

  const topics = [
    "CYBERSECURITY",
    "BLOCKCHAIN",
    "CLIENT SIDE PROGRAMMING",
    "SERVER SIDE PROGRAMMING",
    "UI-UX DESIGN",
  ];

  const repeatText = (topics, repeat = 20) =>
    Array(repeat).fill(topics.join(" // ")).join(" // ");

  const getSpeed = () => {
    if (window.innerWidth < 768) return 40;
    if (window.scrollY > 200) return 20;
    return 30;
  };
  const longText = repeatText(topics);

  return (
    <>
      <EventsWrapper id="events" data-aos="fade-up">
        <ClubHeading>Club Events</ClubHeading>
        <ThingsHeading>Things for you ❤️</ThingsHeading>
        <Embla>
          <div className="embla__viewport" ref={emblaRef}>
            <EmblaContainer>
              {eventSlides.map((slide, index) => (
                <EmblaSlide
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <TextContainer>
                    <h3>{slide.title}</h3>
                    <p className="event-date">Scheduled on {slide.date}</p>
                    <p>{slide.description}</p>
                    <button>Register Now</button>
                  </TextContainer>
                  <ImageContainer>
                    <img src={slide.image} alt={slide.title} />
                  </ImageContainer>
                </EmblaSlide>
              ))}
            </EmblaContainer>
          </div>
          <EmblaPagination>
            {eventSlides.map((_, index) => (
              <EmblaDot key={index} className="embla__dot"></EmblaDot>
            ))}
          </EmblaPagination>
        </Embla>
        <MovingTextSection>
          <MarqueeWrapper>
            <MarqueeContent
              className="marquee-content"
              direction="left"
              speed={150}
            >
              <span>{longText}</span>
              <span>{longText}</span>
            </MarqueeContent>
          </MarqueeWrapper>
          <MarqueeWrapper>
            <MarqueeContent
              className="marquee-content"
              direction="right"
              speed={140}
            >
              <span>{longText}</span>
            </MarqueeContent>
          </MarqueeWrapper>
        </MovingTextSection>
        <Footer /> {/* Add the Footer component below MovingText */}
      </EventsWrapper>
    </>
  );
};

export default Events;
