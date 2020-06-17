# Social Media Project

## Preparing the Database

```shell
$ mysql -u root -p
mysql> create database socialmediadb;
mysql> create user socialuser identified with mysql_native_password by 'socialpass';
mysql> grant all privileges on socialmediadb.* to socialuser;
mysql> flush privileges;
```

## Project Structure

### Backend (Server Side)

```sh
src
├───controllers     # connect routes to db operations
├───db              # database connections and model definitions
├───public          # html/css/js for static part of the site
└───routes          # express middlewares (route wise)
```

### Frontend (Code @Client Side)

```sh
\SOCIALMEDIAAPP\SRC\PUBLIC
│   index.html                #home/first page
├───app                       # own scripts
│       common.css
│       loginIfNeeded.js
│       socialcommon.js
├───components                #own html components
│       footer.html
│       navbar.html
└───css                       #css libraries used
        bootstrap.css
└───js                        #js libraries used
        bootstrap.js
        jquery.js
        popper.js
```

## Business Logic

### Users

1. **create user**
   creates a new user with a random username

### Posts

1. **create post**
   creates a new post, required fields are -

- username (author of this post)
- title
- body

2. **show all posts**
   list all existing posts, with following filters -

- filter by username
- filter by query contained in title (search by title)

3. **edit post** (TBD)

4. **delete post** (TBD)

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**

## API Documentation

`users`

1. POST '/users' - creates a new user with random userId and username

2. GET '/users/{userId} - get a user with given userId

3. GET '/users/{username} - get a user with given username

`posts`

1. GET '/posts' - shows all posts
2. POST '/posts' - creates a new post
   . Required parameters in body for creating a new post are
   ```
   title, body, userId
   ```
