import styled from 'styled-components/macro'
import { darken } from 'polished'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.div`

    @media (min-width: 701px) {
        display: flex;
        align-items: center;
    }

    @media (max-width: 700px) {
        position: fixed;
        opacity: 0;
        pointer-events: none;
        top: 0;
        right: 0;
        z-index: 99;
        width: 320px;
        min-height: 100vh;
        padding: 24px;
        background: ${props => props.theme.thirdColor};

        a{
            display: block;
        }
    }

`

export const StyledMenuItem = styled(Link)`
    font-weight: 300;

    @media (min-width: 701px) {
        margin: 0 24px;
    }

    @media (max-width: 700px) {
        margin: 12px 0;
        display: block;
    }

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