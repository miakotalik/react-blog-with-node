# Simple React Blog

#### by: Mia Kotalik

A simple blog application written with React and Node.

### Getting Started

To install the node modules navigate to the my-blog and my-blog-backend folders and run

```
npm install

```

in both folders

run the following in the my-blog directory:

```
npm start

```

To run the node server
Navigate to /react-blog-with-node/my-blog-backend and run:

```
npm babel-node src/server.js

```

To start using nodemon (senses code changes and automatically restarts the server)
Navigate to /react-blog-with-node/my-blog-backend and run:
'''npx nodemon --exec npx babel-node src/server.js
'''

### Dependencies

### Installing

### Database Configuration

MongoDB setup on windows [here](https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/)
To add the dummy data open up the mongo shell and do the following:

```
> use my-blog
switched to db my-blog
> db.articles.insert([{
... name:'learn-react',
... upvotes: 0,
... comments: [],
... }])
```

### Running the Tests

### Deployment

### Built With

-   [React](https://reactjs.org/) - The JavaScript library used

## Available Scripts

In the my-blog-backend directory, you can run:

### `npm start`

Runs the node server using Nodemon. The server will automatically detect changes and restart the server.

In the project directory, you can run:

#### Scripts and documentation created by: Create React App

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Acknowledgements

-   This project is based on the Blog application taught in the course React: Creating and Hosting a Full-Stack Site" by Shaun Wassell
-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
