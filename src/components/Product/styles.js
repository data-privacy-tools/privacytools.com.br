import styled from 'styled-components/macro'
import { rgba } from 'polished'

export const StyledBanner = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80vh;
    padding: 72px 0;
    background-image: ${ ({ theme }) => `url(${theme.darkBackGround}`}), radial-gradient(419.44px at -6.83% -8.7%, #39ADBF 0%, #2C126C 100%); ;
    ${'' /* background-color: ${ ({ theme }) => theme.secondaryColor}; */}

    background-repeat: repeat-x;
    background-position: top;
    &:after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background: ${({ theme }) => `linear-gradient(rgba(0, 0, 32, 0), ${rgba(theme.secondaryColor, 0.95)} 320px)`};
    }
`
