import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 72px 0 0;

    .footer-list{
        margin-top: 36px;
        h3{
            margin-bottom: 24px;
        }
        li{
            margin-top: 6px;
            a{
                color: ${props => props.fourthColor};
            }
        }
    }
`

export default StyledFooter