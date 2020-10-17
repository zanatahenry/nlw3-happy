## :computer: Tecnologias utilizadas

O projeto está sendo desenvolvido utilizando as seguintes tecnologias:

-  [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/), [React Native](https://reactnative.dev)
- [NodeJS](https://nodejs.org/en/)
- [HTML5 E CSS3](https://www.w3schools.com)

----


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

```powershell
cd frontend
yarn install
yarn start
```
### Se quiser rodar com o NPM, fazer:

```powershell
cd frontend
npm install
npm start
```

Depois desse processo, o projeto irá abrir automaticamente no seu browser, caso necessite a página irá ficar localizada em `http://localhost:3000`

## Mobile

Para rodar o mobile, realize os comandos abaixo:

```powershell
cd mobile
yarn install
yarn start
```

### Se quiser rodar com o NPM, fazer:

```powershell
cd mobile
npm install
npm start
```

### Depois desse processo,  irá abrir o metro bundler no seu navegador. Para visualizar a aplicação rodando você tem duas opções:

* #### Emulador Android:

  Na página do metro bundler, clique em **Run on Android device/emulator** e espere carregar.

* #### Emulador IOS:

  Na página do metro bundler, clique em **Run on IOS simulator** e espere carregar.

* #### Seu celular:

  Para rodar a aplicação no seu celular, é necessário você instalar o Expo Client, depois só colocar o QR Code informado na página do metro bundler

  #### Links para a instalação:

  * [iOS](https://apps.apple.com/app/apple-store/id982107779)
  * [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

---



