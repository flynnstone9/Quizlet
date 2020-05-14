import React from 'react'
import '../styles/quizcontainer.css'

let QuestionsContainer = ({
	currentQuestion,
	handleRadioChange,
	currentQuestionNumber,
}) => {
	let { question, options } = currentQuestion

	let renderOptions = () => {
		return options.map((opt, i) => {
			let { answer, feedback, key } = opt
			return (
				<div className='quiz__option' key={key}>
					<label className='quiz__label' htmlFor={key}>
						<input
							className='quiz__input'
							type='radio'
							id={key}
							onClick={handleRadioChange}
						/>
						<div className='quiz__optionText'>{answer}</div>
						<div className='quiz__optionFeedback'>Feedback: {feedback}</div>
					</label>
				</div>
			)
		})
	}

	return (
		<div className='quiz__quizContainer'>
			<div>
				<div className='quiz__question'>
					<div className='quiz__questionTitle'>
						Question {currentQuestionNumber + 1}:
					</div>
					{question}
				</div>
			</div>
			<div className='quiz__optionsContainer'>{renderOptions()}</div>
		</div>
	)
}

export default QuestionsContainer
