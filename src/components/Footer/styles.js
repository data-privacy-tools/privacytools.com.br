import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
`
export const StyledMenuItem = styled(Link)`
    margin: 0 24px;
    font-weight: 300;
`

export default StyledFooter