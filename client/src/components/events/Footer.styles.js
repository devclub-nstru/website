import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  font-family: "Mona Sans";

  @media (max-width: 920px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 490px) {
    padding: 1rem 0;
  }
`;

export const FooterSocial = styled.p`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  &:nth-child(2),
  &:nth-child(4) {
    font-style: italic;
    margin-left: 10rem;
  }

  &:nth-child(1),
  &:nth-child(3) {
    margin-right: 8rem;
    text-transform: uppercase;
  }

  @media (max-width: 920px) {
    font-size: 2rem;
    margin-left: 5rem;
    margin-right: 4rem;
  }

  @media (max-width: 490px) {
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;

  @media (max-width: 920px) {
    font-size: 0.9rem;
  }

  @media (max-width: 490px) {
    font-size: 0.8rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 920px) {
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  @media (max-width: 490px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }

  @media (max-width: 920px) {
    font-size: 0.9rem;
  }

  @media (max-width: 490px) {
    font-size: 0.8rem;
  }
`;
