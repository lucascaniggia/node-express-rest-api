# NodeJs ExpressJs MySQL Ready-to-use API Project Structure

[![Author](http://img.shields.io/badge/author-@lucascaniggia-blue.svg)](https://www.linkedin.com/in/lucascaniggia/) [![Codacy Badge](https://github.com/lucascaniggia)](https://img.shields.io/badge/code%20quailty-B-green) ![](https://img.shields.io/badge/build-passing-brightgreen)

A ready-to-use film and character's exploration REST API Development with Node.js, Express and MySQL.

## Getting started

This is a basic API skeleton written in JavaScript ES6. Very useful to building a RESTful web APIs for your front-end platforms like Android, iOS or JavaScript frameworks (Angular, Reactjs, etc).

This project will run on **NodeJs** using **MySQL** as database and Sequelize as ORM. I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building an API. Project is open for suggestions, Bug reports and pull requests.

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([lucascaniggia5@gmail.com](mailto:lucascaniggia5@gmail.com "lucascaniggia5@gmail.com")).

## Features

- Basic Authentication (Register/Login with hashed password)
- Encrypted passwords using `bcryptjs`
- JWT Tokens, make requests with a token after login with `Authorization` header, in where `secret phrase` will be returned in Login response.
- Pre-defined response structures with proper status codes.
- Includes **CRUD** operations.
- Validations added.
- Included API collection for Postman.
- Light-weight project.
- Linting with [Eslint](https://eslint.org/).

## Software Requirements

- Node.js **8+**
- MySQL **3.9.0+** (Recommended **5.7+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/lucascaniggia/node-express-rest-api.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

## Project structure

```sh
.
├── index.js
├── database.js
├── package.json
├── package-lock.json
├── models
│   ├── characters.js
│   ├── movies.js
│   └── users.js
└── routes
    ├── middlewares.js
    ├── api.js
    └── api
        ├── movies.js
        ├── characters.js
        └── users.js
```

## How to run

### Running API server locally

You can run the API by running in your terminal

```bash
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
starting 'node index.js'
Server on port 3000
...
Sinchronized tables
```

Please remind that you can stop the process by presssing CTRL + C.

## Using Sequelize

Sequelize's user data is pre-determined in the project. To be able to run the API you must go to [Remote MySQL](https://remotemysql.com/), create an account and replace the `database.js` email, username and password data.

## Bugs or improvements

Every project needs improvements, so feel free to report any bugs or improvements. Pull requests are always welcome.

### Hope you value and enjoy this project!
