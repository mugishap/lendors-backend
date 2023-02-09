<p align="center">
  <a href="" rel="noopener">
</p>

<h3 align="center">Lendors</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/mugishap/lendors-backend/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/mugishap/lendors-backend/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This is a car rental project
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Lendors is a web app created for the purpose of helping people rent cars easily and sinplify the management of cars and car company assets

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Node Version 14+
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
git clone https://github.com/mugishap/lendors-backend.git
```

Next

```
cd backend/
```

And then

```
npm run start
```


## 🔧 Running the tests <a name = "tests"></a>

To run some tests test the swagger file on the route of /api-docs


## 🎈 Usage <a name="usage"></a>

Admin can log in (Make sure you create admin credentials in seeds)

Admin can add cars(car model, car image URL, price) in the system.

Admin can also update the car information or remove it from the system.

Admin can view car rental requests, approve them, or reject them.

Admin can view customers, or remove them from the database

Customers can register themselves (Custore id, Customer name, Customer phone number, Address, email, and password).

Customers can log in using their email and password.

Anyone can view all cars(No need to log in).

Customers can make car rental requests(Only when they have logged in).

When the admin accepts or rejects the rental request the customer should receive an email notification.


## 🚀 Deployment <a name = "deployment"></a>


This app was deployed on [cyclic](https://cyclic.sh)

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment


## ✍️ Authors <a name = "authors"></a>

- [@mugisha](https://github.com/mugishap) - Frontend & Backend


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
