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

```sh
src
├───controllers     # connect routes to db operations
├───db              # database connections and model definitions
├───public          # html/css/js for static part of the site
└───routes          # express middlewares (route wise)
```
