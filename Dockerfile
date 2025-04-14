# Etapa 1: Build Angular
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Etapa 2: Servir con http-server
FROM node:20-alpine

RUN npm install -g http-server
WORKDIR /app

COPY --from=build /app/dist/intellectus-data-care/browser/ /app

EXPOSE 80
CMD ["http-server", ".", "-p", "80"]
