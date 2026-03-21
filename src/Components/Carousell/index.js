import React from "react";
import styled, { keyframes } from "styled-components";
import { CarouselBox } from "./styledCarrousell.styled";

import carrousel1Image1 from "../../Assets/carousell-galery/image1.png";
import carrousel1Image2 from "../../Assets/carousell-galery/image2.png";
import carrousel1Image3 from "../../Assets/carousell-galery/image3.png";
import carrousel1Image4 from "../../Assets/carousell-galery/image4.png";
import carrousel1Image5 from "../../Assets/carousell-galery/image5.png";
import carrousel1Image6 from "../../Assets/carousell-galery/image6.png";

import carrousel2Image1 from "../../Assets/carousell-galery/image7.png";
import carrousel2Image2 from "../../Assets/carousell-galery/image8.png";
import carrousel2Image3 from "../../Assets/carousell-galery/image9.png";
import carrousel2Image4 from "../../Assets/carousell-galery/image10.png";
import carrousel2Image5 from "../../Assets/carousell-galery/image11.png";
import carrousel2Image6 from "../../Assets/carousell-galery/image12.png";

import carrousel3Image1 from "../../Assets/carousell-galery/image13.png";
import carrousel3Image2 from "../../Assets/carousell-galery/image14.png";
import carrousel3Image3 from "../../Assets/carousell-galery/image15.png";
import carrousel3Image4 from "../../Assets/carousell-galery/image16.png";
import carrousel3Image5 from "../../Assets/carousell-galery/image17.png";
import carrousel3Image6 from "../../Assets/carousell-galery/image18.png";

const imagesRow1 = [
  carrousel1Image1,
  carrousel1Image2,
  carrousel1Image3,
  carrousel1Image4,
  carrousel1Image5,
  carrousel1Image6,
];

const imagesRow2 = [
  carrousel2Image1,
  carrousel2Image2,
  carrousel2Image3,
  carrousel2Image4,
  carrousel2Image5,
  carrousel2Image6,
];

const imagesRow3 = [
  carrousel3Image1,
  carrousel3Image2,
  carrousel3Image3,
  carrousel3Image4,
  carrousel3Image5,
  carrousel3Image6,
];

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 20px auto;

  ${({ theme }) => `
    @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
      margin: 15px auto;
    }
  `}
`;

const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} ${(props) => props.speed}s linear infinite;
  will-change: transform;
`;

const CarouselImage = styled.img`
<<<<<<< HEAD
  width: 250px;
  height: 137px;
=======
  width: 266px;
  height: 147px;
>>>>>>> cb0526ea6824f08c519e0f4897fdf7325e35a9ca
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 20px;

  ${({ theme }) => `
    @media (max-height: ${theme._13inchHeight}) and (max-width: 1230px) {
       margin-right: 15px;
    }
  `}
`;

export const ThreeCarousels = () => {
  return (
    <CarouselBox>
      {/* Row 1 */}
      <CarouselWrapper>
        <CarouselTrack speed={38}>
          {[...imagesRow1, ...imagesRow1].map((src, i) => (
            <CarouselImage key={i} src={src} alt="" />
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      {/* Row 2 (slower) */}
      <CarouselWrapper>
        <CarouselTrack speed={50}>
          {[...imagesRow2, ...imagesRow2].map((src, i) => (
            <CarouselImage key={i} src={src} alt="" />
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      {/* Row 3 */}
      <CarouselWrapper>
        <CarouselTrack speed={38}>
          {[...imagesRow3, ...imagesRow3].map((src, i) => (
            <CarouselImage key={i} src={src} alt="" />
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </CarouselBox>
  );
};
