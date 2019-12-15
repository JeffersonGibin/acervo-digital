#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    

    -- Contém todos os usuários do sistema
    CREATE TABLE usuario (
        id serial,
        ativo boolean NOT NULL DEFAULT true,
        nome varchar(60) NOT NULL,
        email varchar(120) NOT NULL,
        senha varchar(255) NOT NULL,
        PRIMARY KEY(id)
    );

    INSERT INTO usuario (nome, email, senha) VALUES('Jefferson', 'jefferson@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Antonio', 'antonio@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Carlos', 'carlos@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Roberta', 'roberta@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Juliana', 'juliana@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Maria', 'maria@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Carol', 'carol7@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Cleiton', 'cleiton@teste.com.br', MD5('123'));
    INSERT INTO usuario (nome, email, senha) VALUES('Caio', 'caio@teste.com.br', MD5('123'));

    SELECT nome AS usuario_criado FROM usuario;

    -- Contém todos os generos para ser utilizado com uma midia
    CREATE TABLE genero (
        id serial,
        ativo boolean NOT NULL DEFAULT true,
        nome varchar(60) NOT NULL,
        PRIMARY KEY(id)
    );

    -- Contém todas as categorias do sistema exemplo: Filmes, Séries, Desenhos...
    CREATE TABLE categoria (
        id serial,
        ativo boolean NOT NULL DEFAULT true,
        nome varchar(60) NOT NULL,
        PRIMARY KEY(id)
    );

    -- Contém todas midias cadastradas (filme, serie, longa metragem etc)
    CREATE TABLE midia (
        id serial,
        ativo boolean NOT NULL DEFAULT true,
        nome varchar(60) NOT NULL,
        descricao text,
        categoriaid int NOT NULL,
        imagem varchar(255),
        destaque boolean NOT NULL DEFAULT false,
        PRIMARY KEY(id),
        FOREIGN KEY (categoriaid) REFERENCES categoria(id) ON UPDATE NO ACTION ON DELETE NO ACTION
    );

    -- Contém todos os generos de uma mídia
    CREATE TABLE midia_genero (
        id serial,
        ativo boolean NOT NULL DEFAULT true,
        midiaid int NOT NULL,
        generoid int NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (midiaid) REFERENCES midia(id) ON UPDATE NO ACTION ON DELETE NO ACTION,
        FOREIGN KEY (generoid) REFERENCES genero(id) ON UPDATE NO ACTION ON DELETE NO ACTION
    );

    -- Lista as tabelas criadas
    SELECT table_name AS tabelas_criadas FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name DESC;
EOSQL