import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'antd'
import { StyledOption, StyledSelector } from './styles'

import brFlag from '../../assets/br.svg'
import usFlag from '../../assets/us.svg'

const Option = Select.Option

function LanguageSelector() {
	const { i18n } = useTranslation()

	const [lang, setLang] = useState('pt_BR')

	useEffect(() => {
		i18n.changeLanguage(lang)
	}, [i18n, lang])

	function handleChange(lang) {
		setLang(lang)
	}

	return (
		<StyledSelector
			defaultValue="pt_BR"
			size="large"
			onChange={handleChange}
			style={{ marginLeft: '20px', marginTop: 0 }}
		>
			<Option value="en">
				<StyledOption>
					<img src={usFlag} height={20} width={20} alt="English" />
					<span>English</span>
				</StyledOption>
			</Option>
			<Option value="pt_BR">
				<StyledOption>
					<img src={brFlag} height={20} width={20} alt="Português" />
					<span>Português</span>
				</StyledOption>
			</Option>
		</StyledSelector>
	)
}

export default LanguageSelector
