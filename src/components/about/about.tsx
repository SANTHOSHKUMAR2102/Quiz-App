import { Component, h } from "@stencil/core";

@Component({
  tag: "about-page",
  styleUrl: "about.css",
  shadow: true
})

export class AboutPage {
  handleBackButtonClick() {
    window.history.back(); // Go back to the previous page
  }

  render() {
    return (
      <div >
        <h1>About Our Quiz App</h1>
        <p>
          Welcome to our Quiz App, designed especially for kids! Our mission is to make learning fun and engaging through interactive quizzes tailored to various skill levels.
        </p>
        
        <h2>Features:</h2>
        <ul>
          <li><strong>Three Levels of Difficulty:</strong>
            <ul>
              <li><strong>Beginner:</strong> Perfect for young learners just starting out.</li>
              <li><strong>Intermediate:</strong> For those ready to challenge themselves with a bit more complexity.</li>
              <li><strong>Advanced:</strong> Designed for confident learners who want to test their knowledge.</li>
            </ul>
          </li>
          <li><strong>10 Questions per Level:</strong> Each level includes 10 thoughtfully crafted questions that cover a variety of subjects, ensuring a well-rounded educational experience.</li>
          <li><strong>User-Friendly Interface:</strong> Built with kids in mind, our app is easy to navigate and visually appealing, making it enjoyable for young users.</li>
          <li><strong>Engaging Learning Experience:</strong> Our quizzes encourage critical thinking and problem-solving skills while keeping kids entertained.</li>
        </ul>

        <p>
          Join us on this exciting journey of learning and discovery! Whether your child is just starting out or ready to take on more challenging material, our Quiz App offers something for everyone. Let’s make learning a fun adventure!
        </p>

        <button onClick={() => this.handleBackButtonClick()} class="back-button">Back</button>
      </div>
    );
  }
}
