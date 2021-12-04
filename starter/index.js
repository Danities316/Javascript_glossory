require('dotenv').config()
const express = require('express');
const app = express();
const WordsRouter = require('./route/words');

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//Middleware

app.use(express.json());

//routes
app.get('/', (req, res) =>{
    res.send('<h1>JS Glossory API </h1><a href="/api/v1/words"> Words Routes</a>');
});

app.use('/api/v1/words', WordsRouter);

// words routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () =>{
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening at ${port}....`))
    } catch (error) {
        console.log(error);
        
    };
};

start();

