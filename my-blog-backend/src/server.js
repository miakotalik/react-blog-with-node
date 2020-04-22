import express from 'express';
import bodyParser from 'body-parser';


//  "fake" database created inside a constant. Used in development to test upvote and comment functionalities
// use postman to test requests and responses
const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node': {
        upvotes: 0,
        comments: [],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: [],
    },
}





const app = express();
app.use(bodyParser.json());

// post request that upvotes the matching article by 1
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)

});

// post request that adds given comment to the matching article
app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({ username, text });

    res.status(200).send(articlesInfo[articleName]);


});

// shows us the app is listening
app.listen(8000, () => console.log('Listening on port 8000'));