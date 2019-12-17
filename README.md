
# Acervo Digital 

### O que é ?

Este projeto é um simples CRUD de gerenciamento de filmes e séries utilizado para participar do processo seletivo na empresa Sympla.

### Docker

Antes de iniciar o projeto certifique-se que você tenha instalado em sua máquina o Docker e Docker Compose.

-  [Como instalar o Docker ?](https://docs.docker.com/install/linux/docker-ce/ubuntu/ " ")
-  [Como instalar o docker compose ?](https://docs.docker.com/compose/install/" "  ")

### Iniciando o projeto

O docker será responsável por criar todos os ambientes Front-end, Back-end e Banco de dados.
Para iniciar o projeto escolha o modo de exeção que você preferir.

##### Modo Debug

```shell
sudo docker-compose up --build
```
##### Modo Backgroud
```shell
sudo docker-compose up --build -d
```
Tudo certo,  agora você pode testar o sistema e a API.


#### API
```shell
http://localhost:4000/v1/
```
#### Sistema
```shell
http://localhost:3000/
```

## Documentação API

**Categoria**

|Rota|Método  | Descrição|
|--|--|--|
| /v1/usuario/login	 | GET |Faz login|
| /v1/categoria	 | GET | Busca todos cadastrados|
| /v1/categoria/:id	 | GET | Busca por ID |
| /v1/categoria	 | POST | Cadastra |
| /v1/categoria/:id	 | PUT | Edita |
| /v1/categoria/:id	 | DELETE | Remove|


**Categoria**

|Rota|Método  | Descrição|
|--|--|--|
| /v1/categoria	 | GET | Busca todos cadastrados|
| /v1/categoria/:id	 | GET | Busca por ID |
| /v1/categoria	 | POST | Cadastra |
| /v1/categoria/:id	 | PUT | Altera |
| /v1/categoria/:id	 | DELETE | Remove |

**Gênero**

|Rota|Método  | Descrição|
|--|--|--|
| /v1/genero	 | GET | Busca todos cadastrados|
| /v1/genero/:id	 | GET | Busca por ID |
| /v1/genero	 | POST | Cadastra |
| /v1/genero/:id	 | PUT | Altera |
| /v1/genero/:id	 | DELETE | Remove |

**Midia**

|Rota|Método  | Descrição|
|--|--|--|
| /v1/midia/destaque	 | GET | Lista as midias em destaque|
| /v1/midia	 | GET | Lista todas as midias|
| /v1/midia/:id	 | GET | Busca uma midia por ID |
| /v1/midia	 | POST | Cadastra uma mídia|
| /v1/midia/:id/genero/:generoid	 | PUT |Altera as informações de uma mídia |
| /v1/midia/:id	 | DELETE | Remove uma mídia |
| /v1/midia/:id/upload	 | POST | Cadastra imagem para uma mídia |
| /v1/midia/:id/upload	 | DELETE | Remove imagem|

### Tecnologias utilizadas

##### Front-end
- ReactJS
- Axios
- Next.js
- Styled Components


##### Back-end
- Node.js
- PostgreSQL
- Express

##### Infraestrutura
- Docker
