# 1. Imagen base con Node.js
FROM node:18

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# 4. Instalar Angular CLI globalmente y las dependencias del proyecto
RUN npm install -g @angular/cli && npm install

# 5. Copiar el resto del código fuente al contenedor
COPY . .

# 6. Asegurar permisos adecuados
RUN mkdir -p /app/.angular/cache && chmod -R 777 /app/.angular

# 7. Exponer el puerto en el que Angular corre por defecto
EXPOSE 4200

# 8. Comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "start"]
