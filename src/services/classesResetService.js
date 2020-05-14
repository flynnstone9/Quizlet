function resetOptionsClasses() {
	let questionElements = document.querySelectorAll('.quiz__option')
	questionElements.forEach((element) => {
		let elementFeedback = element.childNodes[0].lastChild
		elementFeedback.classList = 'quiz__optionFeedback'
		element.classList = 'quiz__option'
	})

	let questionLabels = document.querySelectorAll(
		'.quiz__labelquiz__label--clicked'
	)

	questionLabels.forEach((element) => {
		element.classList = 'quiz__label'
	})
}

function onCorrectShowAllFeedback() {
	let questionElements = document.querySelectorAll('.quiz__option')
	let wrongAnswers = [...questionElements].filter(
		(element) => !element.classList.contains('quiz__option--clickedRight')
	)
	wrongAnswers.forEach((element) => {
		element.classList = 'quiz__option quiz__option--clickedWrong'
		element.childNodes[0].lastChild.classList =
			'quiz__optionFeedback quiz__optionFeedback--active'
	})

	let questionLabels = document.querySelectorAll('.quiz__label')
	questionLabels.forEach((element) => {
		element.classList += 'quiz__label--clicked'
	})
}

export default {
	resetOptionsClasses: resetOptionsClasses,
	onCorrectShowAllFeedback: onCorrectShowAllFeedback,
}
