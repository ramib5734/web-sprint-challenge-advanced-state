import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Form(props) {

  const { inputChange, form, postQuiz } = props

  const onChange = evt => {
    const { value, id } = evt.target
    inputChange({ [id]: value }); 
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz({
      question_text: form.newQuestion,
      true_answer_text: form.newTrueAnswer,
      false_answer_text: form.newFalseAnswer,
    })
  }

  const disabledBtnHandler = () => {
      return (
        form.newQuestion.trim("").length < 2 ||
        form.newTrueAnswer.trim("").length < 2 ||
        form.newFalseAnswer.trim("").length < 2
      )
  }

  return (
    <form id="form" onSubmit={ onSubmit }>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={ 50 } 
        onChange={ onChange }
        id="newQuestion" 
        placeholder="Enter question"
        value={ form.newQuestion }
      />
      <input 
        maxLength={ 50 }
        onChange={ onChange } 
        id="newTrueAnswer" 
        placeholder="Enter true answer" 
        value={ form.newTrueAnswer }
      />
      <input
        maxLength={ 50 }
        onChange={ onChange }
        id="newFalseAnswer"
        placeholder="Enter false answer"
        value={ form.newFalseAnswer }
      />
      <button
        id="submitNewQuizBtn"
        disabled={ disabledBtnHandler() }
      >
      Submit new quiz
      </button>
    </form>
  )
}



export default connect ( s => s, actions )(Form)