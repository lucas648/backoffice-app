# Backoffice App

Aplicação **Backoffice** desenvolvida em **Angular + Angular Material** como desafio técnico.  
O sistema implementa operações **CRUD (Criar, Ler, Atualizar, Deletar)** para **Usuários** e **Produtos**,  
seguindo boas práticas de modularização e UI para sistemas administrativos.

---

## 🚀 Tecnologias utilizadas
- [Angular 19](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [angular-in-memory-web-api](https://github.com/angular/in-memory-web-api) (para simulação temporária do backend)
- [Vercel](https://vercel.com/) (deploy do frontend)

---

## 📂 Estrutura do projeto

src/app/
├── core/ # layout, toolbar, sidenav
├── shared/ # componentes reutilizáveis
├── users/ # módulo CRUD de usuários
├── products/ # módulo CRUD de produtos
├── app-routing.module.ts
├── app.module.ts


---

## ⚙️ Funcionalidades

✅ CRUD completo de **Usuários**  
✅ CRUD completo de **Produtos**  
✅ Layout responsivo com **Angular Material** (toolbar + sidenav)  
✅ Navegação com **Angular Router**  
✅ API mockada com **InMemoryWebApi** (será substituída por backend em Spring Boot)  
✅ Deploy automatizado no **Vercel**  

---

## 🖥️ Como rodar localmente

### 1. Clonar o repositório

git clone https://github.com/lucas648/backoffice-app.git
cd backoffice-app

### 2. Instalar dependências

npm install

###  3. Rodar aplicação em modo dev

ng serve
Abra no navegador:
👉 http://localhost:4200

Build para produção
ng build --configuration production

Deploy no Vercel
npm install -g vercel
vercel login
vercel --prod

Quando solicitado, indique a pasta:

dist/backoffice-app


