import React from 'react'
import Container from '../Container'
import { StyledBanner } from './styles'
import { H1, SubTitle } from '../Title'

function Banner(props) {
    return (
        <StyledBanner>
            <Container>
                {props.children}
            </Container>
        </StyledBanner>
    )
}

export default Banner
