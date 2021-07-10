# goit-nodejs-hw-rest-api

<hr>
Проект создан в рамках изучения Node.JS при прохождении онлайн-курса обучения

[FULL STACK РАЗРАБОТЧИК С НУЛЯ](https://goit.ua/fullstackonline/#) в компании [GoIT](https://goit.ua).
<hr>

## Overview

REST Api приложение для работы с коллекцией контактов

## Modules, Library

- [express](https://www.npmjs.com/package/express)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)
- [joi](https://github.com/sideway/joi)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [Mongoose ](https://mongoosejs.com/)
- [MongoDB Compass ](https://www.mongodb.com/products/compass)
- [bcrypt.js ](https://www.npmjs.com/package/bcryptjs)
- [mongoose-paginate-v2 ](https://www.npmjs.com/package/mongoose-paginate-v2)
- [jsonwebtoken ](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv ](https://www.npmjs.com/package/dotenv)
- [Multer](https://github.com/expressjs/multer)
- [gravatar](https://www.npmjs.com/package/gravatar)
- [jimp](https://www.npmjs.com/package/jimp)


## Routes Contacts

### @ GET /api/contacts

- возвращает массив всех контактов

### @ GET /api/contacts/:contactId

- возвращает обьект контакта

### @ POST /api/contacts

- возвращает объект с добавленным `id` сохранения контакта

### @ DELETE /api/contacts/:contactId

- удаление контакта

### @ PUT /api/contacts/:contactId

- возвращает обновленный объект контакта

### @ PATCH /api/contacts/:contactId/favorite

- возвращает обновленный объект контакта c обновлением поля `favorite`


## Items Contacts

Схема модели для коллекции `contacts`:

```js
  {
    name: {},
    email: {},
    phone: {},
    favorite: {},
    owner: {},
  }
```
## Routes Users

### @ POST /users/signup

- регистрация пользователя

### @ POST /users/login

- логин пользователя

### @ POST /users/logout

- логаут пользователя

### @ GET /users/current

- текущий пользователь - получить данные юзера по токену

### @ PATCH /user/subscription

- обновление подписки пользователя

## Items Users

Схема модели для коллекции `users`:

```js
  {
    password: {},
    email: {},
    subscription: {},
    token: {},
  }
```
## Avatar User

### @ PATCH /users/avatars

Добавление в схему модели для коллекции `users`:

```js
{
  ...
  avatarURL: {},
  ...
}
```