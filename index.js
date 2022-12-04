const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./src/route/authRouter');
const bodyParser = require('body-parser');

const PORT = 5000;
const HOST = 'localhost';


const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Вытягиваем статические файлы
app.use('/public', express.static('public'));

// Подключаем шаблонизатор
app.set('view engine', 'ejs');

app.use(express.json());

// Подгружаем главную страницу
app.get('/', (req, res) => {
   res.render('index');
});

// Подгружаем страницу ресторана Пушкин
app.get('/restaurant-ru', (req, res) => {
   res.render('restaurant-ru');
});

// Подгружаем 404 страницу
app.use(function (req, res, next) {
   res.status(404).render('404');
});

// Регистрация и авторизация
app.get("/auth", authRouter);

// Запуск сервера и подключение к БД
const start = async () => {
   try {
      await mongoose.connect('mongodb+srv://RendellBase:22222222@atlascluster.xswswsd.mongodb.net/?retryWrites=true&w=majority');
      app.listen(PORT, HOST, () => console.log('server started on port' + ' ' + PORT));
   }
   catch (e) {
      console.log(e);
   }
};


// Старт сервера
start();
