# Usar una imagen base de Node.js
FROM node:20-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que escucha tu API (por ejemplo, 4000)
EXPOSE 9009

# Definir la variable de entorno para el puerto
ENV PORT=9009

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]