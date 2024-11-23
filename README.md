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

![image](https://github.com/user-attachments/assets/a38b5e75-7f49-4d65-8156-825917fce9d3)



`cadastro.cy.js`

This file contains the code for registering on the site.
In Describe we group the sets of tests
.cy.visit is used to access the site.
.cy.get is used to get the elements on the page and .click() is used to click on the element found.
when we insert .type() we expect something to be typed into a field, as in the example of this login screen, we type in the login and password and that's what we use .type() for.

#### File cadastro-erro

![image](https://github.com/user-attachments/assets/5561e267-47a5-4bc8-8e95-4c94a27af1b1)


`cadastro-erro.cy.js`

In this file, I describe the test for possible error messages on the registration screen.

You can see that some commands are repeated, so let's talk about the new ones.
.cy.contains() captures the element that contains text, in this case we put the text that should be expected to be visible and this is when we use .should('be.visible').


### 📌 API test with Cypress

Let's start! Line by line, a simple API to be a simple to understand.

Let's use Cypress to test the Petstore API.

![image](https://github.com/user-attachments/assets/824b0dbc-93f8-4d0e-9dca-f1100d9083dd)


`cy.request`
Cypress makes an HTTP request. This method is used to send and receive data from APIs directly, without the need to interact with the user interface.

method: `'GET':` Defines the HTTP method to be used, in this case GET.
url: `'https://petstore.swagger.io/v2/store/inventory'`: Specifies the API endpoint to be tested.

`.then((response)`
After the request, the response returned by the API is captured in the then function, and the response object contains the response data (such as the status, headers and body).

`expect(response.status).to.eq(200)`
Here an assertion is made to check that the status of the HTTP response is equal to 200. This code guarantees that the API responded successfully (code 200 means that the request was processed correctly).

The test checks that the https://petstore.swagger.io/v2/store/inventory endpoint is working correctly by returning an HTTP response with status 200. If the status is different from 200, the test will fail, indicating a problem with the API.

### And here is the result of the test going well!

![image](https://github.com/user-attachments/assets/34eaf04a-c43e-4fd7-94e0-e1506b2f1171)


You can check the swagger here!
https://petstore.swagger.io


