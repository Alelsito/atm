# Dev.f - ATM

This is a solution to the project ✨ ATM ✨ of the [Kata JavaScript](https://www.devf.la/master/encoding/mx).\
[Dev.f](https://www.devf.la/) offers an innovative solution to educational inclusion with EdTech programs that help people become software developers and obtain technological skills in order to obtain high-quality job opportunities in an agile and accessible way.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [How to use it](#how-to-use-it)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Skills](#skills)
- [Author](#author)

## Overview

### The challenge

Create a web application with JavaScript where we simulate the interaction with an ATM.

### How to use it

1. Upon entering the cashier, you can use the next accounts:

```js
            //nombre,  usuario,  contraseña, saldo
let hugo = ["Hugo", "HugiBugi", "mepksiu", 400];
let valentina = ["Valentina", "TinaBugi", "12nfas92", 1000];
let noe = ["Noe", "ElZezas", "youyoumi", 350];
let saul = ["Saul", "Sj", "jijipuds", 1500];
let abel = ["Abel", "Abelito", "pueblaFC", 3000];
```
* for usuario (user) you must use position [1]
* for constraseña (password) you must use position [2]

2. You must enter the user and password of the account you want to use. If the user and password are incorrect, you are going to be notify that there is an error, and allow you to try again. If the user and password are correct, the user data it is going to be setted to your localStorage and you should be redirect to a page with the following options:

- **Consultar saldo** (Check balance)
- **Deposito** (enter amount)
- **Retiro** (Withdraw Amount)

- **Bussines rules**
    * You can check your balance at any time, but you can only do one action (deposit or withdraw) each time you log into your account.
    * When selecting Deposito (enter amount), you must enter an amount higher than $0 but smaller than $2000.
    * When selecting Retiro (withdraw amount), you should enter an amount higher than $0 but you can not left your account with less than $10.

- When selecting Consultar saldo (check balance), it displays the current account balance on the screen, and after 5 seconds you are going to be redirect to the previous page.

- When selecting Deposito (enter amount), you must write the amount to enter. When entering the amount, it shows the user the amount entered and the new total balance, which is also updated to the localStorage. After 10 seconds you are going to be redirected to the initial page (check bussines rules).

- When selecting Retiro (withdraw amount), the user must write the amount to withdraw. When withdrawing the amount, it shows the user the amount withdrawn and the new total balance, wich is also updated to the localStorage. After 10 seconds you are going to be redirected to the initial page (check bussines rules).

### Screenshot

1. **Entering the cashier**
![](./assets/screenshots/Cajero-automatico-(Login).png)

2. **After log in**
- *Opciones* (options)
![](./assets/screenshots/Cajero-automatico-(MainPage).png

- *Consultar saldo* (Check balance)
![](./assets/screenshots/Cajero-automatico-(MainPage)-Consultar%20saldo.png)

- *Deposito* (enter amount)
![](./assets/screenshots/Cajero-automatico-(MainPage)-Deposito.png)

- *Retiro* (Withdraw Amount)
![](./assets/screenshots/Cajero-automatico-(MainPage)-Retiro.png)

### Links

- GitHub Repository: [cajero-automatico-github](https://github.com/Alelsito/cajero-automatico)
- Live Site URL: [cajero-automatico-netlify](https://cajero-automatico.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- JS
- [Bootstrap](https://getbootstrap.com/) - For styles

### Skills

- localStorage
- Handling forms and events

## Author

- Github - [@Alelsito](https://github.com/Alelsito)
