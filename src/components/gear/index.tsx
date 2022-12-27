import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  background-color: #000;
  color: #fff;
`;

const Wrapper = styled.div<{ boxWidth: number, boxHeight: number }>`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, ${({ boxWidth }) => boxWidth}px);
  grid-template-rows: repeat(2, ${({ boxHeight }) => boxHeight}px);
`;

const GearItem = styled.span<{ boxHeight: number, fontSize: number}>`
  line-height: ${({ boxHeight }) => boxHeight}px;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize}px;
`;

const LineWrapper = styled.span<{ boxWidth: number}>`
  position: absolute; 
  left: ${({ boxWidth }) => boxWidth / 2}px;
`;

const RowLine = styled.span<{ boxHeight: number, boxWidth: number }>`
  position: absolute;
  top: ${({ boxHeight }) => boxHeight}px;
  left: ${({ boxWidth }) => boxWidth / 2}px;
  width: ${({ boxWidth }) => boxWidth * 2}px;
  border-top: 1px solid #fff;
`;

const ColumnLine = styled.span<{ boxHeight: number, fontSize: number, left: number }>`
  position: absolute;
  height: ${({ boxHeight, fontSize }) => boxHeight - fontSize - 4}px;
  top: ${({ boxHeight, fontSize }) => (boxHeight + fontSize) / 2 + 2}px;
  border-left: 1px solid #fff;
  left: ${({ left }) => left}px;
`;

const borderWidth = 2;
const Cercle = styled.span<{ boxWidth: number, boxHeight: number, fontSize: number }>`
  position: absolute;
  border: ${borderWidth}px solid #fff;
  border-radius: ${({ fontSize }) => fontSize}px;
  width: ${({ fontSize }) => fontSize}px;
  height: ${({ fontSize }) => fontSize}px;
  top:  ${(({ boxHeight, fontSize }) => (boxHeight - fontSize) / 2 - borderWidth)}px;
  left: ${({ boxWidth, fontSize }) => (boxWidth - fontSize) / 2 - borderWidth}px;
  animation:
    ${({ boxHeight }) => move1({ boxHeight })} 0.4s linear 0s 1 alternate running forwards,
    ${({ boxWidth, boxHeight }) => move2({boxWidth, boxHeight})} 0.6s linear 0.9s 1 alternate running forwards,
    ${({ boxWidth, boxHeight }) => move3({boxWidth, boxHeight})} 0.4s linear 2.0s 1 alternate running forwards,
    ${({ boxWidth, boxHeight }) => move4({boxWidth, boxHeight})} 0.6s linear 2.9s 1 alternate running forwards,
    ${({ boxWidth, boxHeight }) => move5({boxWidth, boxHeight})} 0.5s linear 3.9s 1 alternate running forwards;
`;

const move1 = ({ boxHeight }: {boxHeight: number}) => keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  1% {
    transform: translate(0, 0) scale(0.3);
  }

  99% {
    transform: translateY(${boxHeight}px) scale(0.3);
  }
  100% {
    transform: translateY(${boxHeight}px) scale(1);
  }
`;

type PropsBoxSizes = {
  boxWidth: number,
  boxHeight: number,
}
const move2 = ({ boxWidth, boxHeight }: PropsBoxSizes) => keyframes`
  0% {
    transform: translateY(${boxHeight}px) scale(1);
  }

  1% {
    transform: translateY(${boxHeight}px) scale(0.3);
  }

  33% {
    transform: translateY(${boxHeight / 2}px) scale(0.3);
  }

  66% {
    transform: translate(${boxWidth}px, ${boxHeight / 2}px) scale(0.3);
  }

  99% {
    transform: translateX(${boxWidth}px) scale(0.3);
  }

  100% {
    transform: translateX(${boxWidth}px) scale(1);
  }
`;

const move3 = ({ boxWidth, boxHeight }: PropsBoxSizes) => keyframes`
  0% {
    transform: translateX(${boxWidth}px) scale(1);
  }

  1% {
    transform: translateX(${boxWidth}px) scale(0.3);
  }

  99% {
    transform: translate(${boxWidth}px, ${boxHeight}px) scale(0.3);
  }

  100% {
    transform: translate(${boxWidth}px, ${boxHeight}px) scale(1);
  }
`;

const move4 = ({ boxWidth, boxHeight }: PropsBoxSizes) => keyframes`
  0% {
    transform: translate(${boxWidth}px, ${boxHeight}px) scale(1);
  }

  1% {
    transform: translate(${boxWidth}px, ${boxHeight}px) scale(0.3);
  }

  33% {
    transform: translate(${boxWidth}px, ${boxHeight / 2}px) scale(0.3);
  }

  66% {
    transform: translate(${boxWidth * 2}px, ${boxHeight / 2}px) scale(0.3);
  }

  99% {
    transform: translateX(${boxWidth * 2}px) scale(0.3);
  }

  100% {
    transform: translateX(${boxWidth * 2}px) scale(1);
  }
`;

const move5 = ({ boxWidth, boxHeight }: PropsBoxSizes) => keyframes`
  0% {
    transform: translateX(${boxWidth * 2}px) scale(1);
  }

  1% {
    transform: translateX(${boxWidth * 2}px) scale(0.3);
  }

  99% {
    transform: translate(${boxWidth * 2}px, ${boxHeight}px) scale(0.3);
  }

  100% {
    transform: translate(${boxWidth * 2}px, ${boxHeight}px) scale(1);
  }
`;

const fadeOut = keyframes`
  0% { };

  100% {
    opacity: 0;
  }
`;

const fadeIn = (content: string) => keyframes`
  0% {
    content: '${content}';
    opacity: 0;
  };

  100% {
    content: '${content}';
    opacity: 1;
  }
`

const PrologueWrapper = styled.span`
  position: relative;
  white-space: nowrap;
  font-size: 50px;
  &::before {
    position: absolute;
    display: block;
    content: 'PROLOGUE';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation:
      ${fadeOut} 0.2s ease-out 0s alternate running forwards,
      ${fadeIn('CHAPTER 1')} 0.2s ease-out 0.4s forwards,
      ${fadeOut} 0.2s ease-out 0.9s alternate running forwards,
      ${fadeIn('CHAPTER 2')} 0.2s ease-out 1.3s forwards,
      ${fadeOut} 0.2s ease-out 2.0s alternate running forwards,
      ${fadeIn('CHAPTER 3')} 0.2s ease-out 2.2s forwards,
      ${fadeOut} 0.2s ease-out 2.9s alternate running forwards,
      ${fadeIn('CHAPTER 4')} 0.2s ease-out 3.3s forwards,
      ${fadeOut} 0.2s ease-out 3.9s alternate running forwards,
      ${fadeIn('CHAPTER 5')} 0.2s ease-out 4.2s forwards;
  };
`;

export const Gear: FC = () => {
  const gears = ['R', '2', '4', '1', '3', '5'];
  const props = {
    boxWidth: 50,
    boxHeight: 100,
    fontSize: 21,
  };

  return (
    <Root>
      <Wrapper {...props}>
        {gears.map((gear, index) => <GearItem {...props} key={index}>{gear}</GearItem> )}
        <LineWrapper {...props}>
          <ColumnLine {...props} left={0} />
          <ColumnLine {...props} left={props.boxWidth} />
          <ColumnLine {...props} left={props.boxWidth * 2} />
        </LineWrapper>
        <RowLine {...props} />
        <Cercle {...props} />
      </Wrapper>
      <PrologueWrapper>
      </PrologueWrapper>
    </Root>
  );
};
