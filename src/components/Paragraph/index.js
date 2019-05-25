import styled from 'styled-components'
import { rem } from 'polished'

export default styled.p`
  font-size: ${rem('18px')};
  line-height: ${rem('24px')};
  text-align: ${({centered}) => centered ? 'center' : 'left' };
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : `100%` };
  margin-left: ${({ maxWidth }) => maxWidth ? `auto` : 0 };
  margin-right: ${({ maxWidth }) => maxWidth ? `auto` : 0 };
  color: ${({ theme, white }) => white ? theme.whiteColor : theme.fourthColor};
`
