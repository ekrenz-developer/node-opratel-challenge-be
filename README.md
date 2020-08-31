# node-opratel-challenge-be
API opratel challenge

## Demo Server

```
https://node-opratel-challenge.herokuapp.com/
```

# Endpoints

| Description | HTTP Verb | Endpoint |
| ------------- | ------------- | ------------- |
| [Get users](#Get-users) | GET | /api/v1/users |
| [Get an user](#Get-an-user) | GET | /api/v1/users/{id} |
| [Create an user](#Create-an-user) | POST | /api/v1/users |
| [Update an user](#Update-an-user) | PUT | /api/v1/users/{id} |
| [Delete an user](#Delete-an-user) | DELETE | /api/v1/users/{id} |

## Get users

### Request

`
GET /api/v1/users
`

### Response

```
{
    "error": false,
    "data": [
        {
            "_id": "id",
            "username": "username",
            "name": "name",
            "lastname": "lastname",
            "email": "email"
        }
    ],
    "code": 200
}
```

## Get an user

### Request

`
GET /api/v1/users/{id}
`

### Response

```
{
    "error": false,
    "data": {
        "_id": "id",
        "username": "username",
        "name": "name",
        "lastname": "lastname",
        "email": "email"
    },
    "code": 200
}
```

## Create an user

### Request

`
POST /api/v1/users/
`

```
body: {
  "username": "username",
  "name": "name",
  "lastname": "lastname",
  "email": "email"
}
```

### Response

```
{
    "error": false,
    "data": {
        "_id": "id",
        "username": "username",
        "name": "name",
        "lastname": "lastname",
        "email": "email"
    },
    "code": 201
}
```

## Update an user

### Request

`
PUT /api/v1/users/{id}
`

```
body: {
  "username": "username",
  "name": "name",
  "lastname": "lastname",
  "email": "email"
}
```

### Response

```
{
    "error": false,
    "data": {
        "_id": "id",
        "username": "username",
        "name": "name",
        "lastname": "lastname",
        "email": "email"
    },
    "code": 202
}
```

## Delete an user

### Request

`
DELETE /api/v1/users/{id}
`

### Response

```
{
    "error": false,
    "data": {
        "_id": "id",
        "username": "username",
        "name": "name",
        "lastname": "lastname",
        "email": "email"
    },
    "code": 202
}
```