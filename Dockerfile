
# Imagem do docker hub
FROM node:latest

# diretório dentro da imagem
WORKDIR /usr/src/teste

# Executa npm install para instalar as dependencias do projeto
RUN npm install