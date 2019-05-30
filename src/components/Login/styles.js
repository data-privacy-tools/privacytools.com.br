import styled from 'styled-components/macro'
import { rgba } from 'polished'

export const StyledFormWrapper = styled.div`
    position: relative;
    margin-top: 72px;
    min-height: calc(100vh - 72px);
    background-color: white;
    background-image: ${({ theme }) => `url(${theme.backGround})`};
    background-repeat: repeat-x;
    background-position: top;
    > div{
        margin: 0 auto;
        width: 95%;
        max-width: 480px;

        @media (min-width: 701px) {
            padding: 72px;
        }

        @media (max-width: 700px) {
           padding: 24px;
        }

        border-radius: 8px;
        background-color: white;
        box-shadow: ${({ theme }) => `0 2px 4px ${rgba(theme.primaryColor, 0.05)}, 0 4px 8px  ${rgba(theme.primaryColor, 0.05)}, 0 16px 16px  ${rgba(theme.primaryColor, 0.05)}, 0 32px 32px  ${rgba(theme.primaryColor, 0.07)}, 0 64px 64px ${rgba(theme.primaryColor, 0.07)}`};
    }
`
