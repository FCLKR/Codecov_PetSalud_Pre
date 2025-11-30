#!/bin/sh

if [ -z "$DB_HOST" ] || [ -z "$DB_PORT" ]; then
  echo "Variables DB_HOST o DB_PORT no están definidas"
  exit 1
fi

echo "Esperando a que la base de datos esté lista en $DB_HOST:$DB_PORT..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done
echo "Base de datos disponible"

echo "Ejecutando migraciones..."
python ./app/manage.py makemigrations --noinput
python ./app/manage.py migrate --noinput

echo "Iniciando servidor Django..."
python ./app/manage.py runserver 0.0.0.0:8000