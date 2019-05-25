import styled from 'styled-components/macro'
import {rgba} from 'polished'

export const StyledContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 720px;
  padding: 72px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => `0 4px 4px ${rgba(theme.primaryColor, 0.05)}, 0 8px 8px  ${rgba(theme.primaryColor, 0.05)}, 0 16px 16px  ${rgba(theme.primaryColor, 0.05)}, 0 32px 32px  ${rgba(theme.primaryColor, 0.1)}, 0 64px 64px ${rgba(theme.primaryColor, 0.1)}`};

  img{
    display: block;
    margin: 0 auto;
    max-width: 420px;
  }
`
