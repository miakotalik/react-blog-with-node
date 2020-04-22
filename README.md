# Simple React Blog

#### by: Mia Kotalik

A simple blog application written with React and Node with a MongoDb Database.

### Getting Started

To install the node modules navigate to the my-blog-backend folder and run:

```
npm install

```

## Database Configuration

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

Make sure the MongoDb database is still running and run the following in the my-blog-backend folder:

## Starting the server

```
npm start

```

The application should be running at: http://localhost:8000/

### Deployment

### Built With

-   [React](https://reactjs.org/) - The Javascript library used
-   [Node](https://nodejs.org/en/) - The Javascript runtime used
-   [Express](https://expressjs.com/) - The web framework used
-   [MongoDb](https://www.mongodb.com/) - The database used
-   [Bootstrap 4](https://getbootstrap.com/) - The toolkit used for developing app HTML/CSS JS

## Available Scripts

In the my-blog-backend directory, you can run:

### `npm start`

Runs the node server using Nodemon. The server will automatically detect changes and restart the server.

In the project directory, you can run:

## Acknowledgements

-   This project is based on the Blog application taught in the course React: Creating and Hosting a Full-Stack Site" by Shaun Wassell
-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
