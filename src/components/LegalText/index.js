import styled from 'styled-components'
import { rem } from 'polished'

export default styled.p`
  font-size: ${rem('12px')};
  line-height: ${rem('16px')};
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : `100%`};
  margin-left: ${({ maxWidth }) => maxWidth ? `auto` : 0};
  margin-right: ${({ maxWidth }) => maxWidth ? `auto` : 0};
`
