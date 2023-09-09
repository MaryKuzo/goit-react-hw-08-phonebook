import styled from '@emotion/styled';

export const SpinnerDiv = styled.div`
  /* width: 100%; */
  height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  & div {
    width: 12vw;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    position: fixed;
    top: 30%;
    color: rgba(2, 2, 10, 0.7);
  }
`;
