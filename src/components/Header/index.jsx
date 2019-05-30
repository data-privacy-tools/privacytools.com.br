import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'antd'
import { StyledHeader, StyledHeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import Menu from '../Menu'
import { Link } from 'react-router-dom'

const Option = Select.Option

function Header(props) {

  const { t, i18n } = useTranslation()

  const [lang, setLang] = useState('pt_BR')

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  function handleChange(lang) {
    setLang(lang)
  }

  return (

    <StyledHeader position={props.position}>
      <StyledHeaderContainer>
        <Link to='/'>
          <img src={logo} height={56} alt="Privacy Tools - LGPD - GDPR - CCPA" title="Privacy Tools - LGPD - GDPR - CCPA"/>
        </Link>

        <div style={{ display: 'flex'}}>
          <Menu page={props.page} />
          <Select defaultValue="pt_BR" size="large" onChange={handleChange} style={{ marginLeft:'20px' }}>
            <Option value="en">
              <span role="img" aria-label="English">🇺🇸{' '} </span>English
            </Option>
            <Option value="pt_BR"><span role="img" aria-label="Português">🇧🇷{' '} </span>Português</Option>
          </Select>
        </div>

      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header
