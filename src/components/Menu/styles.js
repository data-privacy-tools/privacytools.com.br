import styled from 'styled-components/macro'
import { darken, rgba } from 'polished'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.div`
	@media (min-width: 701px) {
		display: flex;
		align-items: center;
	}

	@media (max-width: 700px) {
		position: fixed;
		opacity: ${({ open }) => (open ? 1 : 0)};
		top: 0;
		right: 0;
		z-index: 99;
		width: 100vw;
		min-height: 100vh;
		padding: 76px 24px 24px;
		background: ${props => props.theme.thirdColor};
		${props => !props.open && `pointer-events: none;`}
		transform:  ${({ open }) => (open ? `translate3d(0,0,0)` : `translate3d(110%,0,0)`)};
		transition: transform .13s cubic-bezier(.215,.61,.355,1) .25s;
		box-shadow: ${({ theme }) =>
			`-4px 0 4px ${rgba(theme.primaryColor, 0.05)}, -8px 0 8px  ${rgba(
				theme.primaryColor,
				0.05
			)}, -16px 0 16px  ${rgba(theme.primaryColor, 0.05)}, -32px 0 32px  ${rgba(
				theme.primaryColor,
				0.1
			)},-64px 0 64px ${rgba(theme.primaryColor, 0.1)}`};

		a {
			display: block;
		}
	}
`

export const StyledMenuItem = styled(Link)`
	font-weight: 300;

	@media (min-width: 701px) {
		margin: 0 24px 0 0;
	}

	@media (max-width: 700px) {
		margin: 12px 0 24px;
		display: block;
	}
`
export const StyledSpacer = styled.div`
	margin: 0 12px;
`

export const StyledLoginButton = styled(Link)`
	position: relative;
	padding: 0.4rem 1.4rem;
	border-radius: 4px;
	border: 2px solid ${({ theme }) => theme.secondaryColor};

	span {
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
	}

	&:before {
		position: absolute;
		left: 2px;
		top: 2px;
		height: calc(100% - 4px);
		width: calc(100% - 4px);
		content: '';
		border-radius: 2px;
		background-color: ${({ theme }) => darken(0.03, theme.secondaryColor)};
		transition: transform 0.1s cubic-bezier(0, 0.5, 0.5, 1);
		transform: scale3d(1, 0, 1);
		transform-origin: 50% 100%;
		color: ${({ theme }) => theme.secondaryColor};
	}

	&:hover {
		color: ${({ theme }) => theme.whiteColor};
		&:before {
			transform: scale3d(1, 1, 1);
		}
		span {
			color: ${({ theme }) => theme.whiteColor};
		}
	}
`

const afterAnimation = `transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s; transform: rotate(-90deg);`
const afterAnimationOpen = `transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear; `

const beforeAnimation = `transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear;`
const beforeAnimationOpen = `transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s; opacity: 0`

export const StyledHamburgerMenu = styled.div`
	position: relative;
	margin-top: 2px;
	margin-left: 12px;
	z-index: 999;
	display: inline-block;
	width: 40px;
	height: 24px;
	cursor: pointer;
	@media (min-width: 701px) {
		display: none
	}

	.hamburger-inner {
		position: absolute;
		top: auto;
		bottom: 0;
		display: block;
		margin-top: -2px;
		width: 40px;
		height: 4px;
		transition-timing-function: ease;
		transition-duration: 0.15s;
		transition-property: transform;
		border-radius: 4px;
		background-color: ${({ theme }) => theme.secondaryColor};
		${({ open }) => open && `transform: translate3d(0,-10px,0) rotate(-45deg);`}
		${({ open }) => open && `transition-timing-function: cubic-bezier(.215,.61,.355,1);`}

		&:after,
		&:before {
			position: absolute;
			width: 40px;
			height: 4px;
			display: block;
			content: '';
			transition-timing-function: ease;
			transition-duration: 0.15s;
			transition-property: transform;
			border-radius: 4px;
			background-color: ${({ theme }) => theme.secondaryColor};
		}

		&:after {
			${({ open }) => open && `top: 0;`}
			${({ open }) => !open && `top: -10px;`}
			${({ open }) => open && afterAnimation}
			${({ open }) => !open && afterAnimationOpen}
		}

		&:before {
			${({ open }) => open && `bottom: 0;`}
			${({ open }) => open && beforeAnimationOpen}
			${({ open }) => !open && `top: -20px;`}
			${({ open }) => !open && beforeAnimation}
		}
	}
`
