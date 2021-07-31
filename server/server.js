const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs')


// app
const app = express();

// connect DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => console.log('DB Connected'))
    .catch((err) => console.log('DB Connec Err', err))

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes
readdirSync('./routes')
    .map((r) => app.use("/api", require('./routes/' + r)))

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))