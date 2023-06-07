import React from "react";

const StartPage: React.FC = () => (
  <div className="m-4">
    <h1 className="text-4xl mb-4">Welcome to the starter template!</h1>
    <h2 className="text-2xl mb-2">Technologies:</h2>
    <ul className="list-disc ml-5 mb-4">
      <li>
        <strong>React:</strong> A JavaScript library for building user
        interfaces.
      </li>
      <li>
        <strong>TypeScript:</strong> A strongly typed programming language that
        builds on JavaScript.
      </li>
      <li>
        <strong>TailwindCSS:</strong> A utility-first CSS framework for rapidly
        building custom designs.
      </li>
    </ul>

    <h2 className="text-2xl mb-2">Directory Structure:</h2>
    <ul className="list-disc ml-5 mb-4">
      <li>
        <strong>public:</strong> This folder contains the HTML file and images.
        You won't need to modify the HTML file in most cases.
      </li>
      <li>
        <strong>src:</strong> This is the main folder you will work in. It
        contains all your React components, styles and logic.
      </li>
      <li>
        <strong>node_modules:</strong> This folder contains all the dependencies
        of your project.
      </li>
      <li>
        <strong>package.json:</strong> This file contains the list of project
        dependencies and configuration for the project.
      </li>
    </ul>

    <h2 className="text-2xl mb-2">Key Files:</h2>
    <ul className="list-disc ml-5 mb-4">
      <li>
        <strong>src/index.tsx:</strong> This is the entry point for the React
        application. It renders the root component to the DOM.
      </li>
      <li>
        <strong>src/App.tsx:</strong> The main application component. It's
        wrapped in the <code>BrowserRouter</code> component to enable routing.
      </li>
      <li>
        <strong>src/index.css:</strong> The main CSS file where TailwindCSS is
        imported.
      </li>
      <li>
        <strong>tailwind.config.js:</strong> The configuration file for
        TailwindCSS. You can customize your design constraints here.
      </li>
      <li>
        <strong>postcss.config.js:</strong> The configuration file for PostCSS.
        It is setup to use TailwindCSS and Autoprefixer.
      </li>
    </ul>
  </div>
);

export default StartPage;
