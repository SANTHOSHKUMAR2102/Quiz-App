import { Component, h, Element, getAssetPath } from "@stencil/core";
import { beginnerQuiz, intermediateQuiz, advancedQuiz } from "../dataHandle";
// import { Quiz } from "../AddQuiz/add-quiz";
// import { EventEmitter } from "stream";
// import { MainContent } from "../main-content/MainContent";

@Component({
  tag: "home-page",
  styleUrl: "home-page.css",
  shadow: true,
  assetsDirs: ['assets']
})
export class HomePage {
  @Element() el: HTMLElement;
  

  handleClick(quiz: any[]) {

    console.log("clickedd", quiz);
    if(quiz === beginnerQuiz){
      localStorage.setItem("beginnerQuiz", JSON.stringify(quiz));
      localStorage.setItem("quizDetail", "beginnerQuiz")
    }

    if(quiz === intermediateQuiz){
      localStorage.setItem("intermediateQuiz", JSON.stringify(quiz));
      localStorage.setItem("quizDetail", "intermediateQuiz")
    }

    if(quiz === advancedQuiz){
      localStorage.setItem("advancedQuiz", JSON.stringify(quiz));
      localStorage.setItem("quizDetail", "advancedQuiz")
    }

    location.href = "/main"
    
  }

  render() {
    const bgImageSrc = getAssetPath("/assets/twoColorBg.jpg");
    const style = {
      backgroundImage: `url(${bgImageSrc})`,
    }
    return [
      <main style={style}>
      <nav>
        <h1>QUIZ APP</h1>
        <button class="about-btn" onClick={() => location.href = "/about"}>ABOUT</button>
      </nav>
      <div class="title">
        <h2 onClick={() => this.handleClick(beginnerQuiz)} class="one">Beginner Quiz</h2>
        <h2 onClick={() => this.handleClick(intermediateQuiz)} class="two">Intermediate Quiz</h2>
        <h2 onClick={() => this.handleClick(advancedQuiz)} class="three">Advanced Quiz</h2>
      </div>
      </main>
    ];
  }
}
