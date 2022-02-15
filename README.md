# Table of contents

- [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
- [Application](#application)
  - [About](#about)
  - [Form Validation Rules](#form-validation-rules)
- [Libraries Used](#libraries-used)

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run server`

Starts a mock back-end server requiered to retrieve and save data.
Open [http://localhost:5500](http://localhost:5500) to view it in your browser.

- Endpoints
  - **GET** /books
    - _Get an array of all books_
  - **GET** /books{id}
    - _Get the book with specified id_
  - **POST** /books
    - _Insert a new book to the db.json file_
  - **PUT** /books/{id}
    - _Update the book with specified id_
  - **DELETE** /books/{id}
    - _Delete the book with specified id_

**Learn more about JSON Server here: [https://github.com/typicode/json-server#json-server](https://github.com/typicode/json-server#json-server-)**

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Application

## About

Simple book diary app which allows you to manage books

## Form Validation Rules

- Title: required, 3-32 characters
- Author: required, 3-32 characters
- Genre: required, 3-32 characters
- Published: required, any integer up until current year
- Description: optional, up to 0-32 characters
- Status: required, either Unread, In-Progress or Finished
- Started Reading: optional, Date
- Finished Reading: optional, Date
- Rating: optional, value from one to five

# Libraries used

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Grommet](https://v2.grommet.io/)
- [Grommet Icons](https://icons.grommet.io/)
- [JSON Server](https://github.com/typicode/json-server#readme)
- [Axios](https://github.com/axios/axios#axios)
