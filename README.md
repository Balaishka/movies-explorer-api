# Проект: Фильмы (backend) с регистрацией, авторизацией и серверной частью на Яндекс.Облаке.

## Данный сайт является проектной работой Яндекс Практикум.

Репозиторий приложения проекта Movies, включающий бэкенд часть приложения со следующими возможностями: авторизации и регистрации пользователей, операции с фильмами и пользователями.

На этом сайте вы сможете найти фильмы, добавить новые, сохранить себе понравившиеся или удалить созданный вами фильм.

Ссылка на backend проекта: [https://api.balaimovie.nomoredomains.sbs/](https://api.balaimovie.nomoredomains.sbs/)  
Публичный IP-адрес сервера: [http://84.252.143.186](http://84.252.143.186)

### Стек технологий
* JavaScript
* Node.js
* Express
* MongoDB

---

### Возможности сайта:
1. Регистрация нового пользователя.
2. Авторизация зарегистрированного пользователя.
3. Профиль включает разделы: "имя", "email". Разделы профиля можно редактировать.
4. Добавление фильма на сайт.
5. Удаление своего фильма.

---

#### Если ссылка на проект не работает, значит закончился пробный грант на Яндекс.Облако. Вы можете развернуть проект локально (через git bash):
1. Если не установлен Node.js, то скачайте и установите [Node.js с официального сайта](https://nodejs.org/en/download/).
2. Клонируйте репозиторий в корневую папку: 
    `git clone https://github.com/Balaishka/movies-explorer-api.git`
3. Установите node_modules по очереди в папках backend и frontend командой: 
    `npm install`
4. Зайдите в файл /app.js и замените "PORT = 3000" на "PORT = 3005".
5. Запуститите проект командой:
    `npm run dev`
