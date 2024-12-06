
## Setup

1. clone repo

   ```bash
   git clone https://github.com/CanteenGen/Canteen-Gen
2. cd new directory
   ```bash
   cd Canteen-Gen
3. Composer install
   ```bash
   composer install
4. npm install
   ```bash
   npm install
5. copy .eny
   ```bash
   cp .env.example .env
6. generate key
   ```bash
   php artisan key:generate
7. migrate
   ```bash
   php artisan migrate
8. **run serve (open terminal 1)**
   ```bash
   php artisan serve
9. **run dev (open terminal 2)**
   ```bash
   npm run dev
