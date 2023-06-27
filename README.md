# DESAFIO QA - PALACIO DAS FERRAMENTAS E PARAFUSOS

> Automation project using cypress

---
## Pre Requisitos


- Instalar NodeJS: 
https://nodejs.org/en

- Instalar Allure Report

MacOS: $ brew install allure

Windows: $ scoop install allure (precisa instalar o scoop)

## Instalação

> Após clonar o repositório, executar os seguintes passos:

- Instalar dependencias (package.json)
`npm install`

### Executar os testes

> run test headless mode

```
$ npx cypress run
```
#### Executar os testes em modo headless em um ambiente especifico

#### DEV:
```
$ npx cypress run -e configFile=dev
```

#### QA:
> "QA is default environment"

```
$ npx cypress run
```

### Executar um grupo de testes passando uma tag de referencia

```
$ npx cypress run -e grepTags='yourTag' 
```
> Example: 
```
$ npx cypress run -e grepTags=checkout,configFile=dev
```

### Executar o testes com inteface, cypress playground.

```
$ npx cypress open
```

or 

```
$ npx cypress open -e configFile=dev
```

---

### Executar o testes com browsers diferentes: 
    Após abrir o Cypress, selecionar a opção E2E e depois escolher o browser que deseja executar os testes.


## Development Pattern

> Page Objects
