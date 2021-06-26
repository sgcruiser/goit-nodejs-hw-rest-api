# goit-nodejs-hw-rest-api

<hr>
Проект создан в рамках изучения Node.JS при прохождении онлайн-курса обучени

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

## Routes

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


## Items

Схема модели для коллекции `contacts`:

```js
  {
    name: {},
    email: {},
    phone: {},
    favorite: {},
  }
```

