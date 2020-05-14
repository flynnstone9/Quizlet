import React, { useState } from 'react'
import Quiz from './components/Quiz'
import Results from './components/Results'
import './App.css'
import questions from './services/questions.json'
import classesResetService from './services/classesResetService'

function App() {
	let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
	let [quizBtnStatus, setQuizBtnStatus] = useState(false)
	// let [quizReview, setQuizReview] = useState([])
	let quizLength = questions['questions'].length - 1

	const handleRadioChange = (e) => {
		let correctAnswer =
			questions['questions'][currentQuestionNumber]['correctAnswer']
		if (Number(e.target.id) === correctAnswer) {
			setQuizBtnStatus(true)
			e.target.parentNode.parentNode.classList.add('quiz__option--clickedRight')
			e.target.nextSibling.nextSibling.classList.add(
				'quiz__optionFeedback--active'
			)
			e.target.nextSibling.nextSibling.classList.add(
				'quiz__optionFeedback--activeCorrect'
			)
			classesResetService.onCorrectShowAllFeedback()
		} else {
			e.target.parentNode.classList.add('quiz__label--clicked')
			e.target.parentNode.parentNode.classList.add('quiz__option--clickedWrong')
			e.target.nextSibling.nextSibling.classList.add(
				'quiz__optionFeedback--active'
			)
		}
	}

	if (currentQuestionNumber > quizLength) {
		return (
			<div className='App'>
				<Results />
			</div>
		)
	}

	return (
		<div className='App'>
			<Quiz
				questions={questions}
				currentQuestionNumber={currentQuestionNumber}
				setCurrentQuestionNumber={setCurrentQuestionNumber}
				handleRadioChange={handleRadioChange}
				quizBtnStatus={quizBtnStatus}
				setQuizBtnStatus={setQuizBtnStatus}
				quizLength={quizLength}
			/>
		</div>
	)
}

export default App
