import React from 'react'
import { StyledCTA, StyledSecondary, StyledPrimaryNegative} from './styles'

function CTA(props){

    if(props.white){
        return(
            <StyledPrimaryNegative {...props}>
                <span>
                    {props.children}
                </span>
            </StyledPrimaryNegative>
        )
    }

    return (
        <StyledCTA {...props}>
            <span>
                {props.children}
            </span>
        </StyledCTA>
    )
}

function SecondayCTA(props){
    return (
        <StyledSecondary {...props}>
            <span>
                {props.children}
            </span>
        </StyledSecondary>
    )
}

function ExternalCTA(props) {
    return (
        <StyledSecondary {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><path d="M11.6666667,7.77777778 L11.6666667,12.4444444 C11.6666667,13.3035541 10.9702207,14 10.1111111,14 L1.55555556,14 C0.696445945,14 0,13.3035541 0,12.4444444 L0,3.88888889 C0,3.02977928 0.696445945,2.33333333 1.55555556,2.33333333 L6.22222222,2.33333333"></path><polyline points="9.333 0 14 0 14 4.667"></polyline><path d="M5.44444444,8.55555556 L14,0"></path></g></svg>
            <span>
                {props.children}
            </span>
        </StyledSecondary>
    )
}

export {
    CTA,
    SecondayCTA,
    ExternalCTA
}