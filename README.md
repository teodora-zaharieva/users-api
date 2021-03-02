# Users API

#### Description

- Simple **REST** Server for **CRUD** of users and **JWT** Authentication
- Build with:
  - Express.js
  - NeDB
  - jsonwebtoken

#### Start REST Server

- open the cloned repository at root level and run following commands:
  - npm i
  - npm run start
- Server will start on http://localhost:3000/
  - **GET** retrieve user **/api/users/{username}**
  - **POST** create user **/api/users**
  - **PUT** update user **/api/users/{username}**
  - **DELETE** delete user **/api/users/{username}**
  - **POST** sign in user **/api/session**

#### Test with Postman

- import postman environment from **/postman/users-api.postman_environment.json**
- import postman collection from **/postman/api-users.postman_collection.json**
