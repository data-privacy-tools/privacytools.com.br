import styled from 'styled-components/macro'
import {rgba, darken} from 'polished'

export const StyledToolIconWrapper = styled.div`
    position: relative;
    margin: 0 auto 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 144px;
    width: 144px;
    border-radius: 72px;
    &:after{
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        height: 120px;
        width: 120px;
        content: '';
        border-radius: 4px;
        pointer-events: none;
        border-radius: 72px;
        transform: translate3d(-50%, -50%, 0);
        background-color: ${({ theme }) => theme.secondaryColor};
    }
    img{
        position: relative;
        z-index: 3;
        height: 90%;
        width: auto;
    }
`

export const StyledTool = styled.div`
    position: relative;
    margin: 12px 0;
    padding: 24px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.whiteColor};
    text-align: center;
    cursor: pointer;
    &:after{
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        content: '';
        border-radius: 4px;
        opacity: 0;
        pointer-events: none;
        box-shadow: ${({ theme }) => `0 4px 4px ${rgba(theme.primaryColor, 0.05)}, 0 8px 8px  ${rgba(theme.primaryColor, 0.05)}, 0 16px 16px  ${rgba(theme.primaryColor, 0.05)}, 0 32px 32px  ${rgba(theme.primaryColor, 0.1)}, 0 64px 64px ${rgba(theme.primaryColor, 0.1)}`};
        transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);
    }
    &:hover {
        transform: translate3d(0, -1px, 0);
        &:after{
            opacity: 1;
        }
    }

`
