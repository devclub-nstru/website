import styled, { keyframes } from "styled-components";

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const MovingTextSection = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  &:hover .marquee-content {
    animation-play-state: paused;
  }
`;

export const MarqueeContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Mona Sans", sans-serif;
  color: ${({ outline }) => (outline ? "transparent" : "#818181")};
  -webkit-text-stroke: ${({ outline }) => (outline ? "1px #818181" : "none")};

  animation: ${({ direction }) =>
      direction === "left" ? scrollLeft : scrollRight}
    ${({ speed }) => speed || 30}s linear infinite;

  & > span {
    display: inline-block;
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// import styled, { keyframes } from "styled-components";

// export const MovingTextSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   padding: 2rem 0;
//   background: none;
//   width: 100%;
//   position: relative;
//   margin: 5rem 0rem;
// `;

// export const MovingText = styled.div`
//   display: flex;
//   white-space: nowrap;
//   font-size: 3rem;
//   font-weight: bold;
//   font-family: "Mona Sans";
//   color: #818181;

//   animation: ${({ direction }) => (direction === "left" ? moveLeft : moveRight)}
//     30s linear infinite;

//   &::after {
//     content: attr(data-text);
//     padding-left: 2rem;
//   }

//   & > span {
//     display: inline-block;
//     padding-right: 2rem; /* Add spacing between repeated text */
//   }

//   &:nth-child(2) {
//     margin-left: -240rem; /* Shift the second MovingText element slightly to the left */
//     color: transparent; /* Make the text transparent */
//     -webkit-text-stroke: 1px #818181; /* Add the outline effect */
//   }

//   @media (max-width: 768px) {
//     font-size: 1.5rem; /* Adjust font size for smaller screens */
//   }
// `;

// const moveLeft = keyframes`
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// `;

// const moveRight = keyframes`
//   0% { transform: translateX(-50%); }
//   100% { transform: translateX(0); }
// `;
