import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from '../Container'

export const StyledSubFooter = styled(Container)`
	padding: 72px 24px;
	background: ${props => props.theme.secondaryColor};
`

const StyledFooter = styled.footer`
	padding: 72px 0 0;

	.footer-list {
		margin-top: 36px;
		h3 {
			margin-bottom: 24px;
		}
		li {
			margin-top: 6px;
			a {
				color: ${props => props.fourthColor};
			}
		}
	}
`

export const StyledMenu = styled.div`
	@media (min-width: 701px) {
		display: flex;
		align-items: center;
	}

	@media (max-width: 700px) {
		display: block;
	}
`
export const StyledMenuItem = styled(Link)`
	font-weight: 300;
	display: block;
	color: ${props => props.theme.thirdColor};

	@media (min-width: 701px) {
		margin: 0 24px 0 0;
	}

	@media (max-width: 700px) {
		margin: 0 0 24px 0;
	}
`

export const StyledSocialLink = styled.a`
	margin: 0 0 0 12px;
`

export default StyledFooter
