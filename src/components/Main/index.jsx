import React from 'react'
import { StyledMain } from './styles'

function Main(props) {
    return (
        <StyledMain>
            {props.children}
        </StyledMain>
    )
}

export default Main
