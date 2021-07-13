# goit-nodejs-hw-rest-api

#

Проект создан в рамках изучения Node.JS при прохождении онлайн-курса обучения

[FULL STACK РАЗРАБОТЧИК С НУЛЯ](https://goit.ua/fullstackonline/#) в компании [GoIT](https://goit.ua).

#

## Overview

REST Api приложение для работы с коллекцией контактов

## Modules, Library

- [express](https://www.npmjs.com/package/express)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)
- [joi](https://github.com/sideway/joi)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [mongoose-paginate-v2](https://www.npmjs.com/package/mongoose-paginate-v2)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Multer](https://github.com/expressjs/multer)
- [gravatar](https://www.npmjs.com/package/gravatar)
- [jimp](https://www.npmjs.com/package/jimp)
- [SendGrid](https://sendgrid.com/)
- [nanoid](https://www.npmjs.com/package/nanoid)

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
    avatarURL: {},
    verify: {},
    verifyToken: {},
  }
```

## Avatar User


```shell
### Запрос
PATCH /users/avatars
Content-Type: multipart/form-data
Authorization: "Bearer {{token}}"
RequestBody: загруженный файл

### Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "тут будет ссылка на изображение"
}
```

## Verification USER

### Verification request

```shell
GET /auth/verify/:verificationToken
```

### Verification user Not Found

```shell
Status: 404 Not Found
ResponseBody: {  message: 'User not found' }
```

### Verification success response

```shell
Status: 200 OK
ResponseBody: {  message: 'Verification successful', }
```

## Re-verification USER

### @ POST /users/verify/

#### Resending a email request

```shell
POST /users/verify
Content-Type: application/json
RequestBody: {  "email": "example@example.com" }
```

#### Resending a email validation error

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

#### Resending a email success response

```shell
Status: 200 Ok
Content-Type: application/json
ResponseBody: {  "message": "Verification email sent" }
```

#### Resend email for verified user

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {  message: "Verification has already been passed" }
```