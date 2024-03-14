# Contack App Backend Api's (NodeJS)
I have created APIs to manage contacts in this backend. This is the backend of a contact app that I have developed using Node.js. 
I have implemented APIs, used authentication, generated tokens, allowing only logged-in users to create and perform CRUD operations on contacts. 
The APIs include endpoints for registering users, logging in users, and fetching the current user's details. 
For contacts, I have created APIs for creating, updating, deleting, fetching all, and fetching single contacts.

# Technology
NodeJS
ExpressJS
MongoDB

# NPM Packages
JSON Web Token
Bcrypt
dotenv
nodemon
mongoose

# API's EndPoints

Get All Contacts(GET): /api/contacts
Get Single Contact(GET): /api/contacts/:id
Create Contact(POST): /api/contacts
Update Contact(PUT): /api/contacts/:id
Delete Contact(DELETE): /api/contacts/:id

Authentication
Register User: /api/users/register
Login: /api/users/login
Current User: /api/users/current
