import styled from 'styled-components/macro'
import { StyledContainer} from '../Container/styles'
import { rgba } from 'polished'

export const StyledHeader = styled.header`
  position: ${({ position}) => position ? position : 'fixed'};
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 56px;
  padding: 10px 0;
  background-color: ${props => rgba(props.theme.whiteColor, 0.6)};
  backdrop-filter: blur(3px);
`

export const StyledHeaderContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`