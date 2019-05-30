import styled from 'styled-components/macro'

export const StyledContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: ${props => props.maxWidth + 'px' || `1240px`};
  padding: 0 24px;
`
