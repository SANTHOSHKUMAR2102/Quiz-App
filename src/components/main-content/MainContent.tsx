import { Component, h, State, Element, getAssetPath } from '@stencil/core';
import { Quiz } from '../AddQuiz/add-quiz';

@Component({
  tag: 'main-component',
  styleUrl: 'mainContent.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MainContent {
  
  @State() index: number = 0;
  @State() answer: string;
  @State() currentQuestion: Quiz;
  @State() sessionQuiz: Quiz[];
  @Element() el: HTMLElement;
  @State() finished: string;
  @State() levelOfQuiz: string;
  @State() count: number = 0;

  componentWillLoad() {
    const level = localStorage.getItem('quizDetail');
    if(!level){
      location.href = "/";
    }
    this.levelOfQuiz = level;
    console.log('Choosing level is : ', level);

    this.sessionQuiz = JSON.parse(localStorage.getItem(`${level}`)) || '[]';

    if (this.sessionQuiz.length > 0) {
      this.index = this.sessionQuiz.filter(item => item.correct).length;
      this.currentQuestion = this.sessionQuiz[this.index];
    }

    if (this.index === this.sessionQuiz.length ) {
      const finishEl = this.el.shadowRoot.querySelector('#finish-box');
      finishEl.classList.remove('display-victory');
      finishEl.classList.add('finish-box');
    }
  }

  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const divEl = this.el.shadowRoot.querySelector('#msg-box');
    console.log(divEl);
    const finishEl = this.el.shadowRoot.querySelector('#finish-box');

    if (target.tagName === 'LI') {
      if (target.innerText === this.currentQuestion.answer) {
        divEl.classList.remove('err-message-box');
        this.answer = `${this.currentQuestion.answer} is Correct`;
        divEl.classList.add('message-box');

        this.currentQuestion.correct = true;
        console.log(this.sessionQuiz);

        setTimeout(() => {
          if (this.index < this.sessionQuiz.length) {
            localStorage.setItem(`${this.levelOfQuiz}`, JSON.stringify(this.sessionQuiz));
            this.index++;
            divEl.classList.remove('message-box');

            this.answer = '';
          } else {
            finishEl.classList.remove('display-victory');
            finishEl.classList.add('finish-box');
          }

          this.componentWillLoad();
        }, 3000);
      } else if (target.innerText === 'Skip the Question') {
        divEl.classList.remove('err-message-box');
        this.index++;
        this.componentWillLoad();
        this.answer = '';
      } else {
        divEl.classList.add('err-message-box');
        this.answer = 'Wrong Answer!!!';

        setTimeout(() => {
          divEl.classList.remove('err-message-box');
          this.answer = '';
        }, 3000);
      }
    }
  }

  render() {
    const startImg = getAssetPath('/assets/star.png');

    this.count = this.sessionQuiz.filter(item => item.correct).length;
    return [
      <nav>
        <h1 onClick={() => {location.href = "/"}}>QUIZ APP</h1>
        <button onClick={() => {location.href = "/about"}}>ABOUT</button>
      </nav>,
      <div id="finish-box" class="display-victory">
        <p>
          <strong>
            {`Congrats You Finish Questions 10 of ${this.count} 🏆`}
          </strong>
        </p>
        <br />
        <button class="next-level" onClick={() => (location.href = '/')}>
          Go Home Page For Next Level
        </button>
      </div>,
      <div id="msg-box">
        <p>
          <strong>{this.answer}</strong>
        </p>
      </div>,
      <div class="quiz-container">
        <div>
          <h3 class="quiz-question">{this.currentQuestion.question}</h3>
          <ol class="quiz-options" onClick={event => this.handleClick(event)}>
            <li>{this.currentQuestion.A}</li>
            <li>{this.currentQuestion.B}</li>
            <li>{this.currentQuestion.C}</li>
            <li>Skip the Question</li>
          </ol>
        </div>
      </div>,
      <div class="img-box">{this.sessionQuiz.map(item => (item.correct ? <img src={startImg} alt="star" /> : null))}</div>,
    ];
  }
}
