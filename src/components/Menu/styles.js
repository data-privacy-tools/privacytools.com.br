import styled from 'styled-components/macro'
import { darken } from 'polished'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
`

export const StyledMenuItem = styled(Link)`
    margin: 0 24px;
    font-weight: 300;
`
export const StyledSpacer = styled.div`
  margin: 0 12px
`

export const StyledLoginButton = styled(Link)`
    position: relative;
    padding: 0.4rem 1.4rem;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.secondaryColor};
    span{
        position: relative;
        color: ${({ theme }) => theme.secondaryColor};
    }
    &:before{
        position: absolute;
        left: 2px;
        top: 2px;
        height: calc(100% - 4px);
        width: calc(100% - 4px);
        content: '';
        border-radius: 2px;
        background-color: ${({ theme }) => darken(0.03, theme.secondaryColor)};
        transition: transform .1s cubic-bezier(0,.5,.5,1);
        transform: scale3d(1, 0, 1);
        transform-origin : 50% 100%;
        color: ${({ theme }) => theme.secondaryColor};
    }

    &:hover {
        color: ${({ theme }) => theme.whiteColor};
        &:before{
            transform: scale3d(1, 1, 1);
        }
        span{
            color: ${({ theme }) => theme.whiteColor};
        }
    }
`