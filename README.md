# invoice-maker
A simple invoice maker with authentication

# Requirements
* PHP 7.4+
* PosgreSQL
* Composer
* NPM

# Installation
## Clone the repo 
```
git clone git@github.com:ghaffaru/invoice-maker.git
cd invoice-maker
```
## Install dependencies
```
composer install
```
## Create .env
```
cp .env.example .env
```
## Generate keys
```
php artisan key:generate
```
## Set correct App url in .env
```
APP_URL=http://localhost:8000
```
## Set correct database credentials
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=invoice_maker
DB_USERNAME=mac
DB_PASSWORD=
```
## Migrate database
```
php artisan migrate
```
## Link storage
```
php artisan storage:link
```
## Install npm dependencies (For dev purposes)
```
npm install
```

## Run npm watcher
```
npm run watch
```

## Run server
```
php artisan serve
```

## Visit the url
http://localhost:8000
