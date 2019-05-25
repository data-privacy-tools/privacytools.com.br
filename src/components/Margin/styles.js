import styled from 'styled-components/macro'

export const StyledMargin = styled.div`
  margin: ${props => (props.x ? `${props.x}px` : '5px')};
`
