#Wetube
Cloning Youtube with Vanilla and NodeJS

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change PassWord
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

Node Package Manager (NPM)

- place where somethings like express shared
- in conventional method, when a guy wants to update the things,
  he needs to download and install periodically - sucking thing
- NPM is centralized place where all the packages come in (eps. nodeJS things)
- updating, installing is done easily by NPM (thru dependency on NPM)
- sexy way to install express
- NPM은 nodeJS 설치 시에 자동으로 설치됨

NPM으로 project 시작하기

- npm init
- package.json 생성
- entry 정하기

express is framework of nodeJS

- making a server with several lines of code
- including lots of code in advance
- npm install express
  - package.json에 dependency 생김(dependency : "express")
  - node_modules 생김
  - package-lock.json 생김

Express of nodeJS

- Django of python, Laravel of php

Operating a server is quite the same, repetitive

- few things left to be updated

GET POST

- GET method gets the info
- POST method sends the info to the web site from the browser

Babel : new JS code를 사용할 수 있게 한다

- import
- const 함수명 = () => ...
  사용법
- npm install @babel/node
  다양한 stage 존재
- env 사용 : 최신이면서 안정적
- npm install @babel/preset-env
- npm install @babel/core
- .babelrc 생성 : babel이 어떤 preset을 가져야 하는지 정해주는 파일

Nodemon : 서버를 매번 끄고 다시 시작하지 않아도 되게 한다

- npm install nodemon -D (개발자 모드로 설치)

middleware: user와 응답 사이에 존재. 어떤 함수도 middleware가 될 수 있다.

- const middleware_function =(res,req,next) => {~;, next();}
- app.use(middleware_function)
- middleware에서 res.send를 하면 연결을 중간에 끊을 수 있다

* app.use(function-name);

morgan : logging 내역을 볼 수 있음

- npm install morgan
- import morgan from "morgan"
- app.use(morgan("option name"))
  tiny, combined, commong, dev

Helmet package : application의 security에 도움됨

Router : many routes inside

- import express from "express"
- const userRouter = express.Router()
- import {userRouter} from "./router"
- app.use("/use", userRouter)

만들어진 object를 export 할 수 있다
export default object 하면 import object from "./object가있는파일명"
export 만 하면 import {object} from "./object가있는파일명"

MVC

- M data
- V how data looks
- C function that looks for data

ES6 식의 변수 설정법

- const { query : term : searchingBy} = req
  == const searchingBy = req.query.term

MongoDB와 JS를 연결시키는 법

- MongoDB & NodeJS
- MongoDB는 C++로 만들어짐.
- JS와 MongoDB를 연결하려면 adapter필요
- MongoDB로부터 instruction을 받아서 JS 코드 작성 가능 -> Mongoose가 해줌

Mongoose JS : Object modelling for node.js

Dotenv - npm start dotenv - 외부에서 중요한 value가 보이지 않도록 하기 위해서 사용 - .env 생성 - .gitignore에 .env 추가 - .env 파일 안에 숨기고자 하는 key value 입력 - MONGO_URL = "dfddfdf.." - PORT = XXXX - 사용할때는 - import dotenv from "dotenv" - dotenv.config(); - process.env 안에 key 저장 - process.env.PORT , process.env.MONGO_URL ... - 이렇게 하지 않으면 github에서 다른 사용자들이 중요한 정보들을 보게 됨

Schema : DB의 요소들의 형식을 정해놓은 규칙
Model : data가 들어오는 통로

Model을 어떻게 사용하느냐
 - import Video(Model name) from "../models/Video"
 - async(req,res)