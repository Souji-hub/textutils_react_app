import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h2 className="my-2"> {props.aboutText}</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>About TextUtils</b> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The TextUtils app</strong> is a handy tool for
              manipulating text efficiently. It allows you to perform operations
              like converting text to uppercase or lowercase, removing extra
              spaces, and counting words or characters. These features make it
              ideal for writers, developers, and anyone working with text. You
              can also customize the behavior to suit your needs using
              additional settings. The app is versatile and can process various
              text-based tasks, such as analyzing input or preparing clean data
              for projects. It's a simple yet powerful solution for text-related
              challenges. All of this functionality is achieved through
              intuitive features and user-friendly design, ensuring a seamless
              experience for users.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>About the Programmer</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Soujanya Subedi</strong> is a talented programmer
              currently pursuing a Master's degree in Computer Engineering. With
              a strong foundation in Electronics and Communication Engineering,
              Soujanya has worked as a robotics engineer for two years,
              showcasing expertise in innovative technologies and
              problem-solving. The combination of technical skills and a passion
              for programming makes Soujanya adept at tackling complex
              challenges, especially in fields like robotics, software
              development, and system design. Always eager to learn and grow,
              Soujanya leverages a unique blend of analytical thinking and
              creativity to deliver impactful solutions in the tech world.
            </div>
          </div>
        </div>
        <div className={`accordion-item`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <b> About React JS</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>React JS</strong> is a powerful and flexible JavaScript
              library used for building user interfaces, particularly
              single-page applications. Developed by Facebook, React enables
              developers to create reusable UI components, manage application
              state efficiently, and ensure a seamless user experience. By
              utilizing a virtual DOM, React optimizes rendering performance,
              making it a popular choice for high-performance applications. Its
              component-based architecture encourages modular development,
              enhancing code readability and maintainability. React's ecosystem
              is vast, including tools like React Router for navigation and
              state management libraries like Redux. Whether you're building
              dynamic web apps or mobile apps with React Native, this library
              provides a robust foundation for modern development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
