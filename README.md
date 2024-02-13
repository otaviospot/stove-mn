# Stove Project

This project implements a simple stove control panel application using Object-Oriented Programming (OOP) principles in JavaScript (ES6).

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Author](#author)

## Overview

The Stove Project provides a simple interface to interact with a virtual stove. It includes features such as toggling the oven light, turning the oven on and off, and toggling individual burners.

## Project Structure

The project follows a basic structure:

```
project-root/
│
├── src/ # Source code
│ ├── models/
│ │ ├── Stove.js
│ │ ├── Burner.js
│ │ ├── Lamp.js
│ │ └── Oven.js
│ │
│ ├── utils/ # Utility functions
│ │
│ └── app.js/ # Main JavaScript
│
├── public/ # Static files
│ ├── index.html
│ └── styles.css
│
├── tests/ # Test files
│ ├── Stove.test.js
│ ├── Oven.test.js
│ ├── Lamp.test.js
│
├── .gitignore # Git ignore file
├── package.json # Node.js project configuration
└── README.md # Project documentation
```

## Usage

To use the Stove Project you can utilize the Live Server extension in Visual Studio Code.

1. Open the project folder in Visual Studio Code.
2. Ensure you have the Live Server extension installed. If not, you can install it from the VS Code Extensions Marketplace.
3. Navigate to the `public` directory in the VS Code Explorer.
4. Find the `index.html` file.
5. Right-click on the `index.html` file and select "Open with Live Server".

This will launch your default web browser and open the `index.html` page, hosting it on a local server. Now, you can interact with the stove control panel interface in real-time.

## Testing

The project includes unit tests to ensure the functionality of the stove components. You can run the tests using Jest. First, ensure that Jest is installed as a development dependency:

npm install --save-dev jest

Then, run the tests using the following command:

npm test

## Author

- Otávio Augusto - [https://github.com/otaviospot]
