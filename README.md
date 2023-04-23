# userlist
**server:
step1:
npm i express bcrypt jsonwebtoken mongoose cors
setp2:
add to index.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const mongodb = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
step3:
change mongodb connection with your local host computer or cluster link
step4:
create database
database name:userlist
collection name:users

client:
step1:
npm i
step2:
npm create vite@latest
step3:
npm i axios 
npm i react-router-dom
**
