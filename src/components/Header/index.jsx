import React from 'react'
import { StyledHeader, StyledHeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import Menu from '../Menu'
import { Link } from 'react-router-dom'

function Header(props) {
	return (
		<StyledHeader position={props.position}>
			<StyledHeaderContainer>
				<Link to="/">
					<img
						src={logo}
						height={56}
						alt="Privacy Tools - LGPD - GDPR - CCPA"
						title="Privacy Tools - LGPD - GDPR - CCPA"
					/>
				</Link>

				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Menu page={props.page} />
				</div>
			</StyledHeaderContainer>
		</StyledHeader>
	)
}

export default Header
