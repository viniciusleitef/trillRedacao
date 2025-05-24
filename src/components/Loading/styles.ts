import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 50px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, #fff 90%, #0000) 0 /
    calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
  margin: 0 auto;

  @keyframes l1 {
    to {
      clip-path: inset(0 -34% 0 0);
    }
  }
`;
