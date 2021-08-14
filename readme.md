# Curso Code.Education

## Desafio Docker

### Desafio 1: imagem go, máximo 2MB
- local do projeto: /desafio-go
- local da imagem: [Docker hub](https://hub.docker.com/r/leticiapillar/codeeducation)
- No terminal execute:

```
> docker run leticiapillar/codeeducation
```

O resultado será o print de `Code.education Rocks!` no seu terminal

### Desafio 2: Nginx com Node.js
- local do projeto: /desafio-nginx-node
- No terminal execute:

```
> docker-compose up -d --build
```

Acesse http://localhost:8080/ para ver a aplicação.
