import styled from 'styled-components'
import {rgba, darken} from 'polished'
import { Link } from 'react-router-dom'


export const StyledInternalLink = styled(Link)`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  z-index: 3;
`

const Button = styled.button`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  z-index: 3;
  margin-top: ${({top}) => top ? `${top}px` : 0 };
  margin-bottom: ${({bottom}) => bottom ? `${bottom}px` : 0 };

 ${({ centered }) => centered && `
    display: table;
    margin-left: auto;
    margin-right: auto;
 `}

  span{
    position: relative;
    color: inherit
  }
`

export const StyledSecondary = styled(Button)`
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  padding: 0.5rem 2rem;
  font-size: 16px;
  background-color: transparent;

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
    transform-origin : 50% 0%;
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:hover {
    color: ${({ theme }) => theme.whiteColor};
    &:before{
      transform: scale3d(1, 1, 1);
    }
  }
`

export const StyledCTA = styled(Button)`
  background-color: ${({theme}) => theme.secondaryColor};
  color: ${({theme}) => theme.whiteColor};
  font-size: ${({ theme }) => theme.baseFontSize};
  padding: 1rem 2rem;

  &:after{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: '';
    border-radius: 4px;
    opacity: 0;
    box-shadow: ${({ theme }) => `0 4px 4px ${rgba(theme.secondaryColor, 0.2)}, 0 8px 8px  ${rgba(theme.secondaryColor, 0.2)}, 0 16px 16px ${rgba(theme.secondaryColor, 0.03)}, 0 32px 32px  ${darken(0.1, rgba(theme.secondaryColor, 0.1))}, 0 64px 64px ${darken(0.1, rgba(theme.secondaryColor, 0.1))}`};
    transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);
  }
  &:hover {
    transform: translate3d(0, -1px, 0);
    &:after{
      opacity: 1;
    }
    span{
      color: white
    }
  }
  &:active {
    transform: translate3d(0, 1px, 0);
    background-color: ${({ theme }) => darken(0.03, theme.secondaryColor)};
    &:after{
      opacity: 0;
    }
  }
`

export const StyledPrimaryNegative = styled(StyledCTA)`
  background-color: ${({ theme }) => theme.whiteColor};
  color: ${({ theme }) => theme.secondaryColor};

  &:after{
    box-shadow: ${({ theme }) => `0 4px 4px ${rgba(theme.whiteColor, 0.2)}, 0 8px 8px  ${rgba(theme.whiteColor, 0.2)}, 0 16px 16px ${rgba(theme.whiteColor, 0.03)}, 0 32px 32px  ${darken(0.1, rgba(theme.whiteColor, 0.1))}, 0 64px 64px ${darken(0.1, rgba(theme.whiteColor, 0.1))}`};
  }
  &:hover {
    span{
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
  &:active {
    background-color: ${({ theme }) => darken(0.03, theme.whiteColor)};
  }
`