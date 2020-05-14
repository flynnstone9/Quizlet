import React from 'react'
import logo from '../appleLogo.svg'

let Header = () => {
	return (
		<div className='quiz__headerContainer'>
			<div>
				<h1 className='quiz__header'>Apple Quizlet</h1>
				<h2 className='quiz__title'>Technical Quiz - Apple Care Support</h2>
			</div>
			<img src={logo} alt='Apple Logo' className='quiz__logo' />
		</div>
	)
}

export default Header
