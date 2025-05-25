# Job Finder Application

This repository contains the source code for a React application that integrates with a JSON Server for managing data. The project is designed to run locally, providing a simple frontend and backend setup for demonstration purposes.

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Setup .env File](#setup-env-file)
  - [Start the React Application](#start-the-react-application)
  - [Start the JSON Server](#start-the-json-server)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/)

---

### Installation

1. **Clone the Repository**  
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/username/project_name
   cd project_name
   ```  

2. **Install Dependencies**  
   Install the necessary dependencies for the project:
   ```bash
   npm install
   ```

## Running the Project

You can follow below instructions for the start the application.

### Setup .env File

- Create a file called `.env` in the root folder

- Add these env variables to that file

```
VITE_API_URL=http://localhost:5000
```

### Start the React Application

- Run the following command to start the React application locally on port 5173:

  ```bash
  npm run dev
  ```

- Once started, open your browser and navigate to http://localhost:5173 to view the application.

### Start the JSON Server

- Run the following command to start the JSON Server locally on port `5000`

  ```bash
  npm run json-server
  ```

- The JSON Server will be accessible at http://localhost:5000.

## Project Structure

- `assets`: To manage all the assets.
- `components`: To manage all the components.
- `constants`: To manage all the constant data.
- `pages`: To manage all the pages.
- `routes`: To manage all the routes.
- `services`: To manage all the api routes and calls.
- `types`: To manage all the typescript types.
- `utils`: To manage all the utility functionalities.

## Available Scripts

- Starts the React development server.
  ```bash
  npm run dev
  ```
- Starts the JSON Server.
  ```bash
  npm run json-server
  ```

## Technologies Used

- React: Frontend library for building user interfaces.
- JSON Server: A mock REST API for testing and prototyping.
- Lucid Icons: Icon pack

## Contributing

- Feel free to fork the repository and submit pull requests to contribute to the project.

## License

- This project is licensed under the MIT License.
