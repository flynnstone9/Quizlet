import React from 'react'
import QuizBtn from './QuizBtn'
import Header from './Header'
import '../styles/result.css'
import Lottie from 'react-lottie'
import * as checkmark from '../checkmark.json'

const defaultOptions = {
	loop: false,
	autoplay: true,
	animationData: checkmark.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
}

const Results = () => {
	return (
		<div className='quiz'>
			<Header />
			<div className='result__container'>
				<Lottie options={defaultOptions} width={300} height={100} />
				<div className='result__title'>
					Completed Technical Training - Apple Care Support
				</div>
				<div className='result__nextsteps'>
					Review with your instructor for next steps
				</div>
				<QuizBtn text='Restart Quiz' />
			</div>
		</div>
	)
}

export default Results
