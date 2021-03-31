# NaveDex
## About the project

In this API it is possible for a user to register and after authenticating he can register navers and projects and make the relationship between them.

## Technologies 🚀

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia_2021_03_29.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/afpb04/Navedex-API.git && cd Navedex-API
```
**Follow the steps below**

```bash
# Install the dependencies

$ yarn

# Create the instance of postgreSQL using docker

$ docker run --name navedex-postgres -e POSTGRES_USER=postgres
              -e POSTGRES_DB=navedex -e POSTGRES_PASSWORD=docker
              -p 5432:5432 -d postgres

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```
## 🐱‍👤 How to use the api

## Create a new user

```json
http://localhost:3333/users
```
RequestBody:
```json
//post
{
	"name": "Jon Doe",
	"email": "jondoe@exemple.com",
	"password": "1234"
}
```
Responses:
```json
status: 201 Created
```
```json
status: 400 Bad Request
{
  "message": "Email already exists!"
}
```
## Sessions

```json
http://localhost:3333/sessions
```
RequestBody:
```json
//post
{
	"email": "jondoe@exemple.com",
	"password": "1234"
}
```
Responses:
```json
status: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTcxNDYxNTcsImV4cCI6MTYxNzIzMjU1Nywic3ViIjoiZmY0OTFkNzktYmE0My00MWE5LWFhNWUtZDViMjdhOGJkOGM2In0.mq7bB0Mufj9j23yaRVJnMVCzDWLdmyHjihoKDGfUe90",
  "user": {
    "name": "Jon Doe",
    "email": "jondoe@exemple.com"
  }
}
```
```json
status: 400 Bad Request
{
  "message": "Email or password incorrect!"
}
```
## Navers
### Create a new Naver
```json
http://localhost:3333/navers
```
RequestBody:
```json
//post
 {

   "name": "Doky",
   "birthdate": "1999-05-15",
   "admission_date": "2020-06-12",
   "job_role": "Desenvolvedor",
   "projects": [
     {
       "id": "a41bd44e-bea6-415a-a2bd-d8c3d63cfd2b"
      }
	 ]
 }
```
Responses:
```json
status: 201 Created
{
  "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a",
  "name": "Doky",
  "birthdate": "1999-05-15",
  "admission_date": "2020-06-12",
  "job_role": "Desenvolvedor",
  "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134",
  "projects": [
    {
      "id": "a41bd44e-bea6-415a-a2bd-d8c3d63cfd2b"
    }
  ]
}
```
### Update naver

```json
http://localhost:3333/navers/:naver_id
```
RequestBody:
```json
//patch
 {
  "job_role": "Desenvolvedor",
  "projects": [
    {
      "id": "36aafdc4-147d-4e73-b1d5-4abd449eb889"
    }
  ]
}
```
Responses:
```json
status: 200 OK
{
  "id": "06d119a2-5818-4d52-8a37-355aed18b2e2",
  "name": "Doky",
  "birthdate": "1999-05-14T03:00:00.000Z",
  "admission_date": "2020-06-11T03:00:00.000Z",
  "job_role": "Desenvolvedor",
  "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134",
  "projects": [
    {
      "id": "a41bd44e-bea6-415a-a2bd-d8c3d63cfd2b"
    }
  ]
}
```
```json
status: 400 Bad Request
{
  "message": "Naver does not exists!"
}
```
### Detail naver

```json
//get
http://localhost:3333/navers/:naver_id
```

Responses:
```json
status: 200 OK
{
  "id": "06d119a2-5818-4d52-8a37-355aed18b2e2",
  "name": "Doky",
  "birthdate": "1999-05-14T03:00:00.000Z",
  "admission_date": "2020-06-11T03:00:00.000Z",
  "job_role": "Desenvolvedor",
  "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134",
  "projects": [
    {
      "id": "a41bd44e-bea6-415a-a2bd-d8c3d63cfd2b",
      "name": "projeto muito doido",
      "user_id": "315094a7-c788-4498-b761-a2ced451f480"
    }
  ]
}
```
```json
status: 400 Bad Request
{
  "message": "Naver does not exists!"
}
```

### List all navers

```json
//get
http://localhost:3333/navers
```
Responses:
```json
status: 200 OK
[
  {
    "id": "fb76e26b-e1c6-4305-8e91-80664196fe0e",
    "name": "Fulano 2",
    "birthdate": "1999-05-14T03:00:00.000Z",
    "admission_date": "2020-06-11T03:00:00.000Z",
    "job_role": "Desenvolvedor",
    "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134"
  },
  {
    "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a",
    "name": "Doky",
    "birthdate": "1999-05-14T03:00:00.000Z",
    "admission_date": "2020-06-11T03:00:00.000Z",
    "job_role": "Desenvolvedor",
    "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134"
  },
]

```
### Delete Naver

```json
//delete
http://localhost:3333/navers/:naver_id/delete

```
Responses:
```json
status: 204 No Content
```
```json
status: 400 Bad Request
{
  "message": "Naver does not exists!"
}
```

## Projects

### Create a new project
```json
http://localhost:3333/projects
```
RequestBody:
```json
//post
 {
   "name": "project example",
   "navers": [
		{
      "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a"
    }
	]
}
```
Responses:
```json
status: 201 Created
{
  "id": "8d61e823-cb66-479a-be3b-17c8322f3e69",
  "name": "project example",
  "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134",
  "navers": [
    {
      "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a"
    }
  ]
}
}
```
### Update Project

```json
http://localhost:3333/projects/:project_id
```
RequestBody:
```json
//patch
 {
  "navers": [
    {
      "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a"
    }
  ]
}
```
Responses:
```json
status: 200 OK

{
  "id": "4dc38df5-adac-42f3-9b72-8018381637f5",
  "name": "projeto muito massa 2",
  "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134",
  "navers": [
    {
      "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a"
    }
  ]
}
```
```json
status: 400 Bad Request
{
  "message": "Project does not exists!"
}
```
### Detail Project

```json
//get
http://localhost:3333/projects/:projects_id
```

Responses:
```json
status: 200 OK
{
  "id": "4dc38df5-adac-42f3-9b72-8018381637f5",
  "name": "projeto muito massa 2",
  "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134",
  "navers": [
    {
      "id": "cb6aff0c-c727-4bc6-9364-55eb749e0a7a",
      "name": "Doky",
      "birthdate": "1999-05-14T03:00:00.000Z",
      "admission_date": "2020-06-11T03:00:00.000Z",
      "job_role": "Desenvolvedor",
      "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134"
    }
  ]
}
```
```json
status: 400 Bad Request
{
  "message": "Project does not exists!"
}
```

### List all Projects

```json
//get
http://localhost:3333/projects
```
Responses:
```json
status: 200 OK
[
  {
    "id": "4dc38df5-adac-42f3-9b72-8018381637f5",
    "name": "projeto muito massa 2",
    "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134"
  },
  {
    "id": "de244ee1-6362-4ae4-ae79-5cb557d14fd4",
    "name": "projeto muito massa",
    "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134"
  },
  {
    "id": "8d61e823-cb66-479a-be3b-17c8322f3e69",
    "name": "projeto muito legal",
    "user_id": "27df9ca1-4bc5-467b-9311-d35eac4d7134"
  }
]

```
### Delete project

```json
//delete
http://localhost:3333/projects/:projects/delete

```
Responses:
```json
status: 204 No Content
```
```json
status: 400 Bad Request
{
  "message": "Project does not exists!"
}
```

