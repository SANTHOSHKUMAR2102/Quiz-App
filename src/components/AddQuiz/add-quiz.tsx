import { Component, h, State } from '@stencil/core';

export interface Quiz {
  question: string;
  A: string;
  B: string;
  C: string;
  answer: string;
  correct: boolean;
}

@Component({
  tag: 'add-quiz',
})
export class AddQuiz {
  @State() quizArr: Quiz[] = []; 
  @State() quiz: Quiz = {
    question: '',
    A: '',
    B: '',
    C: '',
    answer: '',
    correct: false
  };

  handleSubmit(event: Event) {
    event.preventDefault();
    const newQuestion: Quiz[] = JSON.parse(localStorage.getItem("questionDetail")) || [];
    newQuestion.push(this.quiz);
    localStorage.setItem("questionDetail", JSON.stringify(newQuestion));
    this.quizArr = [...this.quizArr, this.quiz];
    this.quiz = {
      question: '',
      A: '',
      B: '',
      C: '',
      answer: '',
      correct: false
    };
  }

  handleInputChange(event: Event, field: keyof Quiz) {
    const target = event.target as HTMLInputElement;
    this.quiz = { ...this.quiz, [field]: target.value };
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label htmlFor="question">Question</label>
        <input type="text" value={this.quiz.question} onInput={event => this.handleInputChange(event, 'question')} />
        <br />
        <label htmlFor="A">Option A</label>
        <input type="text" value={this.quiz.A} onInput={event => this.handleInputChange(event, 'A')} />
        <br />
        <label htmlFor="B">Option B</label>
        <input type="text" value={this.quiz.B} onInput={event => this.handleInputChange(event, 'B')} />
        <br />
        <label htmlFor="C">Option C</label>
        <input type="text" value={this.quiz.C} onInput={event => this.handleInputChange(event, 'C')} />
        <br />
        <label htmlFor="answer">Answer</label>
        <input type="text" value={this.quiz.answer} onInput={event => this.handleInputChange(event, 'answer')} />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}
