import React from 'react'
import QuestionsContainer from './QuestionsContainer'
import QuizBtn from './QuizBtn'
import Header from './Header'
import '../styles/quiz.css'

let Quiz = ({
	questions,
	currentQuestionNumber,
	setCurrentQuestionNumber,
	handleRadioChange,
	quizBtnStatus,
	setQuizBtnStatus,
	quizLength,
}) => {
	return (
		<div className='quiz'>
			<Header />

			<QuestionsContainer
				currentQuestion={questions['questions'][currentQuestionNumber]}
				handleRadioChange={handleRadioChange}
				currentQuestionNumber={currentQuestionNumber}
			/>
			<div className='quiz__footer'>
				<QuizBtn
					status={quizBtnStatus}
					text='Next Question'
					currentQuestionNumber={currentQuestionNumber}
					setCurrentQuestionNumber={setCurrentQuestionNumber}
					setQuizBtnStatus={setQuizBtnStatus}
					quizLength={quizLength}
				/>
				<div className='quiz__questionCount'>
					{currentQuestionNumber + 1} / {quizLength + 1}
				</div>
			</div>
		</div>
	)
}

export default Quiz
