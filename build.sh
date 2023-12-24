rm -rf dist
npm run build
php artisan native:migrate
php artisan native:build linux
