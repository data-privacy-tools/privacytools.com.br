import styled from 'styled-components'
import { rem } from 'polished'

export const H2 = styled.h2`
  color: ${({theme}) => theme.fourthColor};
  font-weight: 400;
  overflow-wrap: break-word;
  font-size: ${rem('36px')};
  line-height: ${rem('36px')};
  font-weight: 400;
`

export const H1 = styled.h1`
  text-align: ${({centered}) => centered ? 'center' : 'left' };
  color: ${({ theme, white }) => white ? theme.whiteColor : theme.fourthColor};

  @media (min-width: 701px) {
    font-size: ${rem('52px')};
    line-height: ${rem('58px')};
  }

  @media (max-width: 700px) {
     font-size: ${rem('40px')};
    line-height: ${rem('44px')};
  }

`

export const SubTitle = styled.h4`
  font-size: ${rem('18px')};
  line-height: ${rem('24px')};
  font-weight: 400;
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  color: ${({ theme, white }) => white ? theme.whiteColor : theme.fourthColor};
  margin: ${({ centered }) => centered ? '0 auto' : 0};

 ${({ maxWidth }) => maxWidth && `
    max-width: ${maxWidth}px
 `}

`