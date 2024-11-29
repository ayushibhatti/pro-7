const express = require('express')

const app = express();

const port = 8000;
const database = require('./config/db')
const path = require('path')


const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))


app.set('view engine', 'ejs')

app.use(express.urlencoded())

app.use('/', require('./routes/indexRoutes'))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running:-${port}`);
})
