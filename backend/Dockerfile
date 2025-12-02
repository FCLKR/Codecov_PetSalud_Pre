# Imagen base ligera de Python
FROM python:3.11-slim

# Variables de entorno
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Directorio de trabajo
WORKDIR /app/app

# Instalar dependencias del sistema necesarias para mysqlclient y netcat
RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    pkg-config \
    gcc \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

# Copiar e instalar dependencias de Python
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el código del backend
COPY . /app

# Dar permisos de ejecución al script de entrada
RUN chmod +x entrypoint.sh

# Exponer el puerto del servidor Django
EXPOSE 8000

# Definir el punto de entrada
ENTRYPOINT ["bash", "./entrypoint.sh"]