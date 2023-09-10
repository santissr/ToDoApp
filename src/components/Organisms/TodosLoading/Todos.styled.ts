import styled from "styled-components";
import { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const RotatingIcon = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #007bff;
  color: white;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spinAnimation} 1s linear infinite;
`;
