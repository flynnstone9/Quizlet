import React from 'react'
import '../styles/quizbtn.css'
import classesResetService from '../services/classesResetService'

let QuizBtn = ({
	status,
	text,
	currentQuestionNumber,
	setCurrentQuestionNumber,
	setQuizBtnStatus,
	quizLength,
}) => {
	let changeQuestion = (e) => {
		e.preventDefault()
		setCurrentQuestionNumber(currentQuestionNumber + 1)
		setQuizBtnStatus(false)
		classesResetService.resetOptionsClasses()
	}

	if (status && quizLength === currentQuestionNumber) {
		return (
			<div>
				<button className='quiz__btn quiz__btn--blue' onClick={changeQuestion}>
					Review Results
				</button>
			</div>
		)
	}

	if (status) {
		return (
			<div>
				<button className='quiz__btn quiz__btn--blue' onClick={changeQuestion}>
					{text}
				</button>
			</div>
		)
	}

	if (text === 'Restart Quiz') {
		return (
			<div>
				<button
					className='quiz__btn quiz__btn--blue'
					onClick={() => {
						window.location.reload(false)
					}}>
					{text}
				</button>
			</div>
		)
	}

	return (
		<div>
			<button className='quiz__btn quiz__btn--grey' onClick={() => {}}>
				Select an Answer
			</button>
		</div>
	)
}

export default QuizBtn
