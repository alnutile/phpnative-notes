rm -rf dist
npm run build
php artisan native:migrate
php artisan native:build linux

#php artisan native:publish
cp -v dist/Notes-1.0.0.AppImage ~/Apps/
chmod +x ~/Apps/Notes-1.0.0.AppImage
