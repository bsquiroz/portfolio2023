import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './styles.css'

const langs = [
	{
		lang: 'es',
	},
	{
		lang: 'en',
	}
]

const objLangsIcons = {
	en: 'langIcons/en.png',
	es: 'langIcons/es.png',
}

export const ChangeLang = () => {
	const { i18n } = useTranslation()

	const [showLangOptions, setshowLangOptions] = useState(false)

	const handleChangeLang = (choice) => {
		setshowLangOptions(false)
		i18n.changeLanguage(choice)
	}

	const classLangOptions = showLangOptions && 'lang--visible'

	return (
		<div className='content__lang'>
			<figure className='langIcon' onClick={() => setshowLangOptions(!showLangOptions)}>
				<img src={objLangsIcons[i18n.language]} alt="img lang" />
			</figure>

			<ul className={`lang ${classLangOptions}`}>
				{langs.map(({ lang }) =>
					<li className='lang__opt' key={lang} onClick={() => handleChangeLang(lang)} >
						<img src={objLangsIcons[lang]} alt="icon lang" />
					</li>)}
			</ul>
		</div>
	)
}
