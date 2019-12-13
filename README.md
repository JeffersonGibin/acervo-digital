# Acervo Digital 


### Introdução


### Docker

 Certifique-se que você tenha instalado em sua máquina o Docker e Docker compose.
-  [Como instalar o Docker ?](https://docs.docker.com/install/linux/docker-ce/ubuntu/ " ")
-  [Como instalar o docker compose ?](https://docs.docker.com/compose/install/" "  ")

### Iniciando o projeto

Para iniciar o projeto escolha o modo de exeção que você preferir.

##### Modo Debug

```shell
sudo docker-compose up --build
```
##### Modo Backgroud
```shell
sudo docker-compose up --build -d
```
Tudo certo, agora você pode testar os endpoints da API

```shell
http://localhost:4000/v1/
```


### Tecnologias utilizadas

##### Back-end
- Node.js
- PostgreSQL
- Express

##### Infraestrutura
- Docker