# 🧭 Welcome onboard to the Cypress Journey 

### 📌 What is Cypress?
Cypress is a front-end test automation tool designed to simplify the creation of user interface (UI) tests. Unlike other automation tools, such as Selenium, which work outside the browser, Cypress runs directly in the browser, offering a more integrated and agile testing experience.
Cypress is ideal for projects that need a robust testing tool with a fast learning curve and native integration for modern JavaScript applications.

### 📌 Installing

[To system requirements, click here](https://docs.cypress.io/app/get-started/install-cypress#System-requirements)

You'll need Node.js and npm

* To start the project: `npm init -y`
* To install Cypress: `npm install cypress --save-dev`
* To open Cypress: `npx cypress open`
* If you want to run Cypress in headless mode (without a graphical interface), runs the tests directly in the terminal: `npx cypress run`

### 📌 Commnads

In this case I used a test site called Adopet.
Explaining by files: 

#### File cadastro

![image](https://github.com/user-attachments/assets/2667324b-44f5-4a02-b3b7-f97c5d4acf3e)


`cadastro.cy.js`

This file contains the code for registering on the site.
In Describe we group the sets of tests
.cy.visit is used to access the site.
.cy.get is used to get the elements on the page and .click() is used to click on the element found.
when we insert .type() we expect something to be typed into a field, as in the example of this login screen, we type in the login and password and that's what we use .type() for.

#### File cadastro-erro

![image](https://github.com/user-attachments/assets/03634269-df54-4a5f-8c49-714d42522d73)


`cadastro-erro.cy.js`

In this file, I describe the test for possible error messages on the registration screen.

You can see that some commands are repeated, so let's talk about the new ones.
.cy.contains() captures the element that contains text, in this case we put the text that should be expected to be visible and this is when we use .should('be.visible').




