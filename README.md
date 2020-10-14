![](C:\Users\Henry Zanata\nlw3\web\src\images\Logo.svg)

---

## :computer: Tecnologias utilizadas

O projeto está sendo desenvolvido utilizando as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/), [React Native](https://reactnative.dev)
- [NodeJS](https://nodejs.org/en/)
- [HTML5 E CSS3](https://www.w3schools.com)

---

## :camera: Screenshot do projeto

![](C:\Users\Henry Zanata\nlw3\web\git_images\Home.svg)

---


##   :boom:Como executar o projeto no seu computador:

##  Back-end (API)

Clone o projeto no seu computador, em seguida, instale as dependências e rode o **backend** (modo desenvolvedor):

```powershell
cd backend
yarn typeorm:migration run
yarn install
yarn dev
```

### **Se quiser rodar com o NPM, fazer:**

```powershell
cd backend
yarn typeorm:migration run
npm install
npm dev
```

##  Front-end 

Para rodar a aplicação front-end clone o repositório, em seguida, crie um arquivo `.env` e coloque lá os tokens do MapBox, depois realize os comandos abaixo:

```bash
cd web
yarn install
yarn start
```
### Se quiser rodar com o NPM, fazer:

```powershell
cd web
npm install
npm start
```

Depois desse processo, o projeto irá abrir automaticamente no seu browser, caso necessite a página irá ficar localizada em `http://localhost:3000`

---



