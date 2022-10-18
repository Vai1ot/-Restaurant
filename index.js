const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./src/route/authRouter');
const { async } = require('regenerator-runtime');
const fs = require('fs');

const PORT = 5000;
const HOST = 'localhost';


const app = express();

app.use('/public', express.static('public'));


app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/restaurant-ru', (req, res) => {
   res.render('restaurant-ru');
});

app.use(function (req, res, next) {
   res.status(404).render('404');
});

app.use("/auth", authRouter);

const start = async () => {
   try {
      await mongoose.connect('mongodb+srv://RendellBase:22222222@atlascluster.xswswsd.mongodb.net/?retryWrites=true&w=majority');
      app.listen(PORT, HOST, () => console.log('server started on port' + ' ' + PORT));
   }
   catch (e) {
      console.log(e);
   }
};

start();