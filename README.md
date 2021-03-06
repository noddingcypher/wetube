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

위는 markdown format

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

npm install express
->
import express from "express"
->
const app = express();

하면 서버 생성됨. 서버와 응답할 application도 생성됨.

GET POST

- GET method gets the info
- POST method sends the info to the web site from the browser

const handleHome= () =>
app.get("/", handleHome)
이렇게 하면 loading이 계속 된다. response가 없기 때문.
get request는 있지만 response가 없다는 말. 보통은 server는 html로 응답하게 된다.

const handleHome= (req,res) =>
{
console.log(req);
res.send("dfd");
}

라고 하면 request object를 확인할 수 있고, response object를 통해서 서버가 응답하도록 할 수 있다.

Babel : new JS code를 사용할 수 있게 한다.
정확히 말하면 new JS code를 classical JS code로 변경해줌.

Babel node : node JS에서 사용하는 babel

- import
- const 함수명 = () => ...
  이걸 arrow function이라고 한다
  사용법
- npm install @babel/node
  다양한 stage 존재
- env 사용 : 최신이면서 안정적
- npm install @babel/preset-env
- npm install @babel/core
- .babelrc 생성 : babel이 어떤 preset을 가져야 하는지 정해주는 파일

Nodemon : 서버를 매번 끄고 다시 시작하지 않아도 되게 한다

- npm install nodemon -D (개발자 모드로 설치)

개발자모드로 설치하면 dependency에 포함되지 않음. 개발 상 반드시 있어야하는 것이 아니면 개발자모드로 (즉, 개발자 편의로 포함된 module이라는 뜻)

middleware: user와 응답 사이에 존재. 어떤 함수도 middleware가 될 수 있다.

- const middleware_function =(res,req,next) => {~;, next();}
- app.use(middleware_function)
- middleware에서 res.send를 하면 연결을 중간에 끊을 수 있다

* app.use(function-name);

순서가 중요
middleware-route handling-connection 순서로 보통함.
middleware 이전에 위치한 route들은 middleware 실행 없이 실행됨

morgan : logging 내역을 볼 수 있음

- npm install morgan
- import morgan from "morgan"
- app.use(morgan("option name"))
  tiny, combined, commong, dev

Helmet package : application의 security에 도움됨

Body parser middleware

- form을 채워서 전송할 때 서버가 받아야 하는데, request object에 접근할 수 있도록 하는 middleware

Cookie parser middleware

- cookie에 유저 정보를 저장
- session을 다루기 위해 필요함

export default app;
-> app object를 다른 코드 파일에서 사용할 수 있도록 해줌

Router : many routes inside

- import express from "express"
- const userRouter = express.Router()
- import {userRouter} from "./router"
- app.use("/use", userRouter)

만들어진 object를 export 할 수 있다
export default object 하면 import object from "./object가있는파일명"
export 만 하면 import {object} from "./object가있는파일명"

MVC

- M data - mongoDB
- V how data looks -pug
- C function that looks for data -controller

ES6 식의 변수 설정법

- const { query : term : searchingBy} = req
  == const searchingBy = req.query.term

Pug - MVC에서 V(view)에 해당, template을 만드는 tool, 템플릿 언어

- npm install pug
- app.set()
  - undefined가 default 값
  - app.set('view engine', 'pug') -> express에게 pug 파일이 찾아야 하는 템플릿 양식임을 알려줌
- app.set()의 views 옵션 : 어플리케이션의 view 파일을 저장하는 디렉토리 지정
  - /views가 default
  - 프로젝트 폴더 내에 views 폴더를 새로 생성하고, .pug 확장자의 파일을 만들고 내부에 pug 언어로 template 생성
- pug 파일을 웹사이트에서 보이게 하려면?
  - home = (req, res) => res.render("home");
    - home이라는 controller가 views 폴더 내에서 home이라는 이름의 pug 파일을 찾아서 웹사이트로 내보냄 (html 언어로 바꿔서)
- pug를 이용하면 header, footer 와 같이 반복적으로 나타나는 part를 한번만 작성해서 포함시킬 수 있다

Pug를 사용하면 반복되는 부분을 일일이 작성해줘야 하는 html, css의 번거로움을 피할 수 있다!

- layout 폴더 내의 main.pug
  - main 부분을 한번만 작성한다
    - block : 반복되는 부분이 아닌 페이지마다 다른 내용이 들어갈 부분을 표시하는 태그
- layout을 어떻게 사용할까?
  - extends layouts/main
  - block content 태그 하위에 페이지 고유의 내용을 다시 적으면 된다

Pug 의 partial

- header,footer 같이 일부 반복되는 구조를 따로 파일로 생성하여 작성하는 것
- 컴포넌트를 분리하여 따로 관리할 수 있음
- include 명령어를 이용한다
  - include ../partials/footer
- #{} 안에 JS 표현식을 넣을 수 있다!
- partial pug 내에는 html 작성해주면 되고, 이 partial을 사용하려면 include 명령으로 포함시키면 된다

Controller의 변수를 pug에서 사용하도록 하는 방법 (template 전역에서 controller 변수에 접근할 수 있도록 하는 법)

- middleware를 사용한다
  - locals middleware : global 변수를 사용하도록 만들어줌. pug template 전체에서 사용가능하도록 controller 변수에 접근할 수 있도록 함
  - middleware의 위치에 따라서 middleware 전 줄에 위치한 함수들은 locals에 접근하지 못함. 순서 중요!
  - express document 상 res.locals 설명
    - an object that contains response local variables scoped to the request, and therefore available only to the views rendered during that request/response cycle (if any). OW, this propery is idential to app.locals
- export const localMiddlewares = (req,res,next) => { res.locals.siteName = "Wetube", res.locals.routes= routes ..}
- res.locals에 변수를 저장하면 template에서 사용할 수 있다.

app.locals와 res.locals의 비교

- local variable에 접근할 수 있게 하는 객체
- app.locals은 app이 rendering 된 이후 계속 사용가능, res.locals는 req가 유효한 동안에만 사용 가능

import는 alphabet 순으로 하는 습관!

한 template에서만 controller 변수에 접근하도록 하는 법 (template variables)

- res.render 함수의 첫번째 인자는 템플릿, 두번째 인자는 추가적인 정보
  - 두번째 인자에 { variableName = blahblah}
  - 이를 통해서 템플릿에 변수가 전달되어 원하는 대로 설정됨. 이 템플릿에만 적용됨.

form(action=routes.search, method="get")
input(type="text", placeholder="Search by term...", name= "term")
라고 하고 input에 android를 쳐서 엔터를 누르면
/search?term=android로 연결된다.
name이 없으면 /search?로 연결된다

이후 연결된 search page에서 일어나는 일들을 정하려면 search controller.js에서 정함

-> action = routes.search, method= "get"을 통해서 get method로 search route로 연결하겠다고 선언하면
/search?term=android로 연결되고
router.js에서 globalRouter.get(routes.search, search)를 통해서 get으로 search url에 접근하도록 하면서 search controller를 부른다. 접근 후 행동은 search controller.js에서 정함
Search controller가 render("search") 명령을 통해서 views 중에 search라는 pug 파일을 불러서 페이지로 보여준다.

/search?term=android에서 android만을 따와서 사용하려면
req 객체의 query를 사용하면 된다.
req.query.term에 android가 assign되어 있다.

임의로 /search?term=android&filter=price-first&something=blblb
라고 하면 req.query에는 term, filter, something이 들어있어서 사용할 수 있다

ES6식 변수 설정 (ECMAScript)
const {query:{term}} = req;
라고 하면
const term= req.query.term;

이고 const {query:{term : searchingBy}} =req;
라고 하면 term에 searchingBy라는 이름을 붙일 수 있다

이때 템플릿에서 사용되는 변수를 설정할 때
res.render("search", {searchingBy});
라고 하면 search pug에서 #{searchingBy} 변수에 controller에서 설정한 searchingBy가 assign됨. 즉 searchingBy= searchingBy가 됨.

Log in 페이지에 get으로 접근할 경우, /login 페이지로 이동
Log in 페이지에서 post로 정보를 보내는 경우, action="/login", method ="post" 명령을 통해서 /login에 post로 접근하는 router가 불려지고, postLogin controller가 활성화됨

Controller가 query에 접근할 수 있게 하려면 get method로 접근하여야 함(d/t get method로 들어가면 url에 정보를 표시해주기 떄문. post method면 url에 정보가 표시되지 않음)

https://mangkyu.tistory.com/17에서 발췌한 내용
->
[ GET방식의 특징]
URL에 변수(데이터)를 포함시켜 요청한다.
데이터를 Header(헤더)에 포함하여 전송한다.
URL에 데이터가 노출되어 보안에 취약하다.
전송하는 길이에 제한이 있다.
캐싱할 수 있다.

[ POST방식의 특징 ]
URL에 변수(데이터)를 노출하지 않고 요청한다.
데이터를 Body(바디)에 포함시킨다.
URL에 데이터가 노출되지 않아서 기본 보안은 되어있다.
전송하는 길이에 제한이 없다.
캐싱할 수 없다.

19.10.31 #2.19

socialLogin partial에서
button
span
i.fab.fa-github
continue with Github
이라고 쓰면 continue가 tag로 인식되어 다른 색으로 표기됨. 이는 이 위치에 tag element를 기대하기 때문.
text라는 것을 표시하고 싶으면 앞에 | 표시를 하여 다음과 같이 작성

button
span
i.fab.fa-github
| continue with Github

BEM

routes.js ->
// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

userRouter.js ->
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

userRouter에서
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile, editProfile);

위와 같이 userDetail route가 editProfile route의 상위에 위치하면
/users/edit-profile로 접근할 때 'edit-profile'을 id로 인식하여 user detail route로 연결시킨다.
이를 방지하려면 editProfile route를 userDetail route 상위에 위치하도록 작성하여야 한다.

가짜 db (임의로 생성한 video list.js)를 통해서 data display가 잘 일어나는지 확인

- db.js -> videos (list type) 생성
- home pug에 videos list의 item을 속성과 함께 나타내고 싶을 떄
  - import {videos} from "../db"로 videos list를 import 하고
  - .videos
    each item in videos ------ iteration. 이 때 item은 다른 이름 어떤 것으로 해도 상관 없다. videos는 controller에서 지정한 template 변수이기 때문에 이름이 바뀌어서는 안된다.
    h1= item.title
    이런 식으로 작성한다. 이때 home controller에서는 home template에 videos 변수가 무엇인지를 알려줘야함. (템플릿 변수 지정)
    res.render("home", {videos})와 같이 하면 된다.

위와 같은 videos를 home에서만 사용할 것은 아니다. 누군가의 profile에서도 사용할 수 있어야 한다.
반복되는 html 코드를 한번만 사용하여 재활용할 수 있는 방법 -> mixin! : block html code

mixin은 pug 함수의 일종

- mixin 함수에는 인자(argument)가 필요함.
  mixin videoBlock() 이런 식으로 선언
- 여기서 인자는 object(객체) 형식
  mixin videoBlock(video={})
- video 객체를 인자로 받고 기본 값은 {}, 빈 객체임.
- videoBlock 이라는 mixin 함수 안에 어떤 인자의 내용이 입력되면 그 인자는 객체로 인식되고 이름은 video로 인식됨.

mixin을 사용하는 방법 역시 include (partial처럼)
include mixins/videoBlock

    block content
        .videos
            each item in videos
                +videoBlock({
                    title: 'Hello'
                })

이렇게 하면 iteration 되는 videos list의 각 요소들이 자동으로 videoBlock 함수의 인자로 들어감

videoBlock의 내용은 이럴것

mixin videoBlock(video={})
h1= video.title

이렇게 되면 videos list에 있는 모든 요소들의 title 속성은 "Hello" 텍스트가 assign 되고 이것이 화면에 나타난다.
결과적으로 "Hello"라는 title 속성이 videos list 내 item 갯수만큼 나타난다.

이제 "Hello"가 아니고 각 video item이 실제로 갖고 있는 title 속성을 assign 하면 이렇게 된다
+videoBlock({
title=video.title
description=video.description
})

이렇게 하면 각 video item이 갖고 있는 실제 속성이 화면에 나타날 것

mixin과 partial의 차이(내 나름의 해석)

- mixin은 db에 있는 객체들을 받아와서 그 속성을 control하여 html element로 나타내려고 할 때 유리
  - 다른 정보를 같은 구조로 나타낼 목적으로
- partial은 보여지는 element가 반복되어 사용될 때 유리

최종 videoBlock 내용
.videoBlock
video.videoBlock**thumbnail(src=`/${video.videoFile}`, controls=false, autoplay=false, width="420", height="210")
h4.videoBlock**title=video.title
if video.views === 1
h6.videoBlock**views 1 view
else
h6.videoBlock**views #{video.views} views

join을 post로 접근할 때는 globalRouter에서
globalRouter.post(routes.join, postjoin)으로 설정된 routing이 있어야함.
post일 때와 get일 때의 controller를 따로 설정해줘야 함.

이때 bodyParser middleware는 post로 전송된 정보를 req.body를 통해서 받아올 수 있게 하는 역할을 함.
bodyParser가 없다면 post로 보내진 정보를 확인할 수 없음. (이렇게 middleware를 삭제하면서 그 역할을 알 수 있음)

ECMA 방식으로 req.body 안의 속성을 가져오는 법
const= {body: {name, email, password, password2}}=req;

password와 password2가 같은지를 확인하여 상태 코드를 전달하는 법
if(password!== password2){
res.status(400);
}
이렇게 하면 browser는 잘못된 요청임을 인식하고 아무 action을 취하지 않음

만약 res.status(400)
res.rend("join", {pageTitle: "Join"})
으로 하면 상태 코드를 나타내는 페이지로 rendering 됨.

status 400은 잘못된 요청이라는 뜻
status 200 괜찮음
status 204 비어있음
status 403 금지됨
--- 많은 상태 코드가 있음

password 오류가 없다면

res.redirect(routes.home)으로 home 페이지로 이동하도록 할 수 있다.
물론 이 사이에 user를 register 시키고 자동으로 login 되도록 하여야 하겠으며 이는 추후에 더해질 예정

user가 login 상태인지 판별하기 위해서
isAuthenticated변수를 생성
isAuthenticated = true 일 때 로그인 상태임.

middlewares.js에서 locals.user라는 객체를 생성한다.
res.locals.user= {
isAuthenticated : true,
id = 1
}
로 임시 사용자 정보를 생성할 수 있다. 실제 authentication 전에 이런 식으로 로그인 상태를 확인하는 방식을 사용할 수 있다.
실제 사용자 db가 만들어지고 이를 확인하는 과정을 넣게 되면 이 방법은 철회.

routes.js에서 userDetail = "/:id"
이런 식으로 선언하게 되면 express는 이 route가 변수임을 이해하지만 html은 이해하지 못함.
express에서 이해한 바가 html로 execution 되지 않음.
userDetail route를 funtion으로 만들어야 함.

userDetail : (id) => {
if (id) {
return `/users/${id}`;
} else {
return USER_DETAIL;
}
}

userRouter에서도 다음과 같이 변경해야 함
userRouter.get(routes.userDetail(), userDetail)
이렇게 해야 router가 route의 explanation을 인식할 수 있음.
template에서는 인자를 써줘야함.
userDetail(user.id)

form의 input에 required 조건을 true로 설정하면 입력란을 반드시 채워야 routing이 올바르게 되도록 설정할 수 있다

2019.11.08 #2.25

지금까지 npm init으로 project를 시작하고
express를 시작하고(npm install express)
application을 만들고(app= express())
init.js에서 port를 만들어서 listening하도록 하고 (app.listen(PORT))
middleware를 사용하고 app.use(middleware_name)
pug를 view engine으로 사용해서 각 페이지의 html을 작성하고 (app.set('view engine', 'pug'))
route와 controller를 생성해서 페이지 이동을 만들고, 각 routing 시 발생하는 event를 정하였다
(globalRouter= express.Router()
globalRouter.get(routes.join, getJoin)
)

MongoDB

- NoSQL로 분류됨
  - Database는 SQL, NoSQL로 분류될 수 있음
- MongoDB는 더 적은 규칙, 더 적은 절차로 작업이 가능한 데이터베이스

MongoDB community server를 다운 받는다

다운이 되었는지 확인하는 법

- console에서 mongod 쳐본다. down이 되었는지 확인한다.
- mongo 치면 mongo로 들어간다
- exit 치면 나온다
- 여기까지 되면 MongoDB 준비된거임
-

MongoDB와 JS를 연결시키는 법

- MongoDB & NodeJS
- MongoDB는 C++로 만들어짐.
- JS와 MongoDB를 연결하려면 adapter필요
- MongoDB로부터 instruction을 받아서 JS 코드 작성 가능 -> Mongoose가 해줌

Mongoose JS : Object modelling for node.js

- npm install mongoose

NodeJS에서 mongoDB와 mongoose가 둘다 있어야 database를 가지고 이용할 수 있음

- mongoDB는 database
- mongoose는 database와 연결할 수 있게 해주는 친구 (JS 언어 상에서)
- MongoDB는 NoSQL databse -> 규칙이 적고 유연함, 많은 부분을 수정할 수 있음
  - 어떤 부분에서는 모든게 너무 크고 실험적이라는 점
  - relationship이 많이 필요없는 일반적인 프로젝트에서는 MongoDB는 좋은 선택
- 같은 서버에서 다양한 종류의 database들을 사용할 수 있음
- Facebook, google, ebay. EA sports, tweeter 등등에서 MongoDB 사용함
- 채팅을 만들 때 MongoDB는 적합한 Database -> 생성이 매우 빠르고 엄격하지 않음

여기서부터는

1. database 관련 작업하고
2. 누구나 사용할 수 있게 만들기 (영상 업로드, 시청, 삭제 등)
3. Front-end 작업
4. Authentication -> super simple

Dotenv - npm start dotenv - 외부에서 중요한 value가 보이지 않도록 하기 위해서 사용 - .env 생성 - .gitignore에 .env 추가(이미 ignore 되고 있을것임) - .env 파일 안에 숨기고자 하는 key value 입력 - MONGO_URL = "dfddfdf.." - PORT = XXXX -

사용할때는

import dotenv from "dotenv"
dotenv.config(); - process.env 안에 key 저장 - process.env.PORT , process.env.MONGO_URL ... - 이렇게 하지 않으면 github에서 다른 사용자들이 중요한 정보들을 보게 됨

- npm install dotenv

db 생성하는 법

- db.js 내의 기존의 fake db를 지우자

import mongoose from "mongoose"

mongoose.connect()

- 여기서 요청하는 건, string으로 된 database임.
- 어디에 database가 저장되어 있는지 알려주는 것 = database의 URL
- mongod를 치면 port가 나온다 = 27017
- mongoose.connect("mongodb://localhost:27017/we-tube") 따로 db를 생성할 필요 없고 /we-tube와 같이 database의 이름을 써주면 된다
- 추가로
  mongoose.connect(
  "mongodb://localhost:27017/we-tube",
  {
  useNewUrlParser : true,
  useFindAndModity: false
  }
  )
  라고 써주면, mongoose가 이런 식으로 configuration을 보낼 수 있음. mongoose가 항상 mongoDB를 시작할 때 이러한 configuration을 가져옴.
  얘네가 뭔지는 Nico가 설명 안해줌.
- MongoDb와의 connection을 db로 설정
  const db = mongoose.connection - mongoDB와의 연결을 mongoogse가 만들어주는것 - 나중에 export할 것임
  --> mongoose.connect를 통해서 "localhost:27017/we-tube의 db가 생성되면 이것이랑 연결시켜주는 역할이 바로 mongoose.connection임. 이 연결 자체가 db라는 객체가 됨.
- db.once("open", handleFunction)
- const handleOpen =() => console.log("Connected to DB")
- const handleError = (error) => console.log(`Error on DB connection : ${error}`)
- db.on("error", handleError)

위 명령을 실행시켰을 때 init.js에서 ./db를 import하도록 하면 database와 연결된다. (db가 open된다)
어디서든 db의 object가 import되면 연결되었다고 뜰것이다. (videoController에서 videos라는 fake db를 import한 상태에서 저 명령을 치면 DB에 연결되었다고 뜰것))

MongoDB는 document를 줄여주는 장점

- document는 jSON file 같은 걸 말함
- 하지만 우리 파일들이 어떤 식으로 생겨야 하는지 알려줘야함 (jSON file처럼 복잡한 security를 요구하지는 않더라도, 어느 정도 validation을 부여해야함)
  - 예를 들어, 우리 file들은 video라는 이름을 가질거고, 모든 video는 string type을 가질거고 그 string은 "title"이고, view도 가질 건데 그건 number야 같은.. validation
- 이러한 file의 형태를 담아놓은 정보를 model이라고 한다
  - 이 프로젝트에서는 models라는 폴더에 담아 놓을것

Schema : DB의 요소들의 형식을 정해놓은 규칙
Model : data가 들어오는 통로

Models (대문자로 시작하게 할거임)

- models는 data를 말하고, 그 data의 형태를 schema라고 한다 (일단 이렇게 이해한다)
- Videos.js
  - file의 shape를 정하는 역할
  - 이 역할도 mongoose가 한다. 그래서 mongoose를 import한다
    import mongoose from "mongoose"

const VideoSchema = new mongoose.Schema({
video라는 data가 가지는 속성을 여기서 알려준다.
fileUrl : {
type : String,
required : "File URL is required" (fileUrl이 없는 video를 생성한다면 이 에러 메시지가 나올 것)
},
title{
type: String,
required: "Title is required"
} (video file을 db에 집어 넣지 않을것이다. 용량을 잡아먹도록 하지 않으려고. 대신 video의 경로만 적어줄 것이다. 실제 video를 직접 db에 넣으면 매우 무거워질것)
})

- 가능한 schema Type은 mongoose document의 schema 에서 확인할 수 있음

createdAt :{
type : Date,
default : Date.now
}
라는 속성도 넣게 되면 이 document가 저장되는 시점의 날짜가 video의 속성 중 createdAt에 저장된다.

Schema를 이용해서 data의 definition을 내렸고, 이를 통해서 실제 document를 만들어야 함. 모델 파일 안에서 이렇게 선언한다.

const model = mongoose.model("Video", VideoSchema)
라고 써주면 Video라는 model( document) 가 생기게 되고 이 document가 이용하게 되는 shape rule은 VideoSchema가 된다

이러고

export default model;

이제 database가 이 model을 인지할 수 있게 해줘야 한다. 현재 db = mongoose.connection을 통해서 database에 연결은 되어있지만,
이 model의 존재는 알지 못하고 이를 사용하지 않고 있음.
db.js를 import한 init.js에서 model을 import 해줘야 함.

Model을 어떻게 사용하느냐

- db.js를 import한 init.js에서 다음과 같이 import
  import "../models/Video"

Comment model

- Comments.js (대문자)

const CommentSchema = new mongoose.Schema({
text : {
type : String,
required : "Text is required"
} (추가적인 configuration이 필요없을 경우에는 이처럼 object로 생성할 필요 없이, description: String 처럼 한줄로 써도 됨)
, createdAt:{
type : Date,
default : Date.now
}
})
const model = mongoose.model("Comment", CommentSchema)
export default model;

relationship

- Video model과 Comment model 간의 관계
  - comment에 Video ID를 넣거나, Video에 comment ID의 array를 넣거나
- how?
  - 모든 object는 ID를 갖고 있다
  - 여기서는 Video에 comment ID를 넣을것

comment에 Video ID를 넣는 방법도 살펴보면
video:{
type : mongoose.Schema.Types.ObjectId,
ref : "Video" (model의 이름이랑 같게, 어떤 model에서 온건지를 정해줘서 relationship을 만들어줌)
}라고 하면 됨

Video에 comment ID의 array를 넣는 법
-->
comments : [
{
type: mongoose.Schema.Types.ObjectID,
ref: "Comment"
}
]

이렇게 model 간의 relationship을 정의할 수 있음. comment의 모든 정보를 넣는 것이 아니라 comment의 ID만 넣는 것.
init.js에서 import "./models/Comment" 할것

model을 사용하는 법

videoController에서 import Video from "./models/Video"

- model은 data가 들어오는 통로
- 여기서 async 요소가 나옴
  home controller에서 우리는 첫째로 Video data들을 찾도록 할것임.
  그러나 JS는 그 작업이 끝나기 전에 video를 다 찾지 못한채 페이지를 rendering 하게 됨.
  그러면 video가 없는 home 화면이 나올 것임.

그래서 async (req,res)로 써줘야함. (async는 JS에게 이 함수에서 어떤 부분은 꼭 마칠 때까지 기다려야한다고 미리 알려주는 것)
const videos = await Video.find({}); (database에 있는 모든 video를 가져오도록 함. 이떄 await 요소는 이 작업이 끝날 때까지 다른 일로 넘어가지 않도록 함. 반드시 async랑 같이 써야됨)
반드시 성공적으로 끝날 때까지 기다리는 게 아님. 에러가 나면 그 역시도 종료로 인식하고 다음 작업으로 넘어감.

그래서 try & catch 구문으로 써주는게 바람직.

try{
const videos = await Video.find({});
res.render("home", {pageTitle : "Home", videos})
} catch (error) {
console.log(error);
res.render("home", {pageTitle : "Home", videos :[] (에러가 생기면 videos를 빈 array로 만들어주는 명령)})
}

만약 throw Error("hdhd") 구문으로 에러를 임의로 발생시킨다면, 다음으로 넘어가지 않음. async 안에서 error을 handle하지 못하면 먹통이 됨.
반드시 catch하도록.

- database에서 model에 해당하는 객체들을 찾아올 때 주로 async, await 요소를 사용하게 됨. 안 그러면 다 못 찾고 다음 작업으로 넘어가니껜.

Video.find({})

- Video model에 해당하는 data를 모조리 찾아서 array 형태로 반환
- find의 옵션에는 여러가지가 있음. 상황에 맞게 쓰면 됨
  - findById
  - findByIdAndDelete
  - findOne
    등등

video가 아닌 file이 올라오는 걸 막는 방법 - upload pug에서 한다
input(type="file", id="file", name="videoFile", required=true, accept="video/\*")

postUpload controller에서 submit하고 file의 path를 가져오는 법

- 왜냐면 video에 우리는 fileUrl을 저장할 것이기에
- file을 upload하고 URL을 반환하는 middleware, multer를 사용할 것임

npm install multer
upload form에 enctype="multipart/form-data" 추가

- file을 보낼 때의 encoding type으로 써줘야 함

<form>태그의 속성인 method, action, enctype 등은 입력받은 데이터를 어떻게 처리할 것인지 세부적으로 설정하는 데 사용된다.
  method는 전송 방식,
  action은 전송 목적지,
  enctype은 전송되는 데이터 형식을 설정한다.

\*\* enctype
enctype 속성은 다음 세가지의 값으로 지정될 수 있다.

1. application/www-form-urlencoded
   디폴트값이다. enctype을 따로 설정하지 않으면 이 값이 설정된다. 폼데이터는 서버로 전송되기 전에 URL-Encode 된다.
2. multipart/form-data
   파일이나 이미지를 서버로 전송할 경우 이 방식을 사용한다.
3. text/plain
   이 형식은 인코딩을 하지 않은 문자 상태로 전송한다.

출처: https://tibang.tistory.com/entry/form태그의-enctype-속성 [T없이맑은날]

multer로 middleware 만들기

middleware.js에서

import multer from "multer"

const uploadVideo = multer({dest:"videos/"}) 하면 프로젝트 wetube 폴더 내에 videos 폴더가 생김 (destination 폴더가 만들어진거여)
export const uploadVideo

2019.11.09. #3.6

단일 파일 하나만 올릴 수 있도록 하기 위해서는

const multerVideo = multer({dest:"videos/"})
export const uploadVideo = multerVideo.single("videoFile") 여기서 "videoFile"은 form에서 name field에 해당하는 값

이런 식으로 multer를 이용한 middleware를 생성하고 이를 videoRouter에서 /upload에 post method로 접근할 시에 중간에 실행되는 middleware임을 선언해줘야 함

import { uploadVideo } from "../middlewares";
videoRouter.post(routes.upload, uploadVideo, postUpload);

이렇게 하면 multer는 upload 이후에 req.file에 해당 비디오의 경로를 반환하고, req.body에 입력된 text field들을 저장해줌.
multer 없이 req.body에 들어있는 file을 받아오면 파일의 경로를 받을 수는 없음.
upload할 때는 반드시 multer middleware를 사용하자!
이제 filePath를 알게 되었으니 이를 이용해서 Video model을 만들 수 있다.

export const postUpload = async(req,res) => {
const {
body: {title, description},
file :path
} = req;
const newVideo = await Video.create({
fileUrl : path,
title, description
});
res.redirect(routes.videoDetail(newVideo.id));
}

multer의 upload destination을 설정할 때
/uploads/videos/라고 쓰면 컴퓨터의 root에 uploads 폴더를 생성함

uploads/videos/라고 쓰면 현재 프로젝트 폴더 안에다 생성함

생성된 Video model을 수정하는 법

mongo

> use <db_name>
> show collections
> videos
> db.videos.remove({})
> exit
> help (도움말)
>
> 지금 현 상황에서 문제
> = upload된 이후에 home 페이지로 가보면 video link가 깨져있다. 왜냐하면 해당 video의 route가 존재하지 않기 때문.
> 지금은 localhost://4000/uploads/videos/videoId로 되어 있지만 이에 해당하는 routes는 만든 적이 없다.

어떻게 만드느냐
express.static() 사용

- Create a new middleware function to serve files from within a given root directory. The file to serve will be determined by
  combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, this module will
  instead call next() to move on to the next middleware, allowing for stacking and fall-backs.

app.use("/uploads", express.static())

이 경우에는 어떤 종류의 controller나 view를 확인하지 않음. file만 확인함.

app.use("/uploads", express.static("uploads"));

이렇게 하면 /uploads라는 경로로 routing이 되면 static이라는 middleware가 "uploads"와 같은 이름의 directory를 찾음. 다른 경우에는 어떠한 경로로 routing되면
관련된 controller나 view를 찾게 되지만 이 경우에는 db에 있는 같은 이름의 directory를 찾아서 이 파일 경로를 url로 만들어서 routing함.

Nico의 경고!

- 이와 같이 user에 해당하는 file을 server에 저장하는 것은 좋은 practice가 아니다
- 만약 server를 바꿔야하는 상황이라고 가정해보자. 수십억의 유저에 관한 정보의 복사본을 가지고 갈것인가
- 파일이 사라진다면 어떡할 것인가
- 이상적인 경우는 서버를 바꿀 때에는 새로운 서버로 redirect만 시켜주는 것임
- 여기서는 일단은 이 방식으로 진행하고, 마지막에 가서 이상적인 방식으로 바꿀 것임
- 지금 방식으로 한다면 파일을 업로드하고자 할 때마다 서버를 새로 생성해줘야 하는 경우가 생김. 미국용 서버, 마다가스카용 서버 ..
- 또 어떤 유저가 겁나 큰 용량의 파일을 업로드하여 서버를 다운시킬 수 있음.

Static file은 주로 front-end에서 쓰이는 JavaScript나 CSS 로고 file이 될것임.
user-generated content는 분리된 server에 존재해야 함.  
나중에는 multer middleware를 이용해서 file을 Amazon cloud에 업로드하고 amazon cloud에서 url을 받아오는 방식으로 바꿀 것임.

uploads는 .ignore에 추가할것.

editVideo controller에서
input 내용에 기존의 내용을 띄우고 싶으면 input 안에 value 속성을 추가해서 value = video.title이라고 하면 됨.
textarea는 value 속성이 없음. textarea() = video.description이라고 하면 됨.

editVideo(id)
videos/videoId에서 videoId를 받아오고 싶다면?
videoId는 routes에서 /:id에 해당함.
controller는 :id를 변수로 인식하고 여기 어떤 값이 들어있다면 이를 req.params에 넣어놓음.
(:가 없을 때는 아니다. 예를 들어 /:id/edit에서 edit에 해당하는 건 params에 넣어놓지 않음)
그래서 req.params를 통해서 videoId를 받아올 수 있다. (이것이 URL에서 정보를 가져오는 방법)

Model의 query중 findById를 이용해서 video를 가져올 수 있음.

여기서는 try & catch를 이용해서 적절한 error handling이 필요함.

postEditVideo controller

- Model.findOneAndUpdate()

const {
params : {id},
body : {title, description}
} = req;
await Video.findOneAndUpdate({\_id:id}, {title, description});

2019.11.26 #3.9

\_id라고 하는 이유는 video 객체에 id는 \_id로 저장되어 있기 때문.
mongoose가 저절로 \_id를 id로 인식할 줄 알았지만 그러지 않기 때문에 이런 식으로 써줘야함.

findOneAndUpdate takes two arguments. The first one is an object with conditions about how to find the object.
So, in this case, we are doing findOneAndUpdate({id:id}, SECOND_ARG)
The second argument is the data you want to update on the object that you find with the FIRST_ARGUMENT
findOneAndUpdate({id:1},{title:"hello"}) will find the element with the id: 1 and will change the title to 'hello'

deleteVideo

- findOneAndRemove() 사용
- await Video.findOneAndRemove({\_id:id})

home 화면의 video 목록에서 나중에 추가된 비디오가 위에 오도록 하는 방법
await Video.find({}).sort({\_id:-1})

- -1은 위아래 순서를 바꾸겠다는 약속
- {title:-1}로 하면 제목 alphabet 역순으로 하겠다는 뜻

ESLint

- Linter
  - 코드 수정을 도와주는 extension
    > npm install eslint
- npm install eslint -g라고 하면 모든 프로젝트에서 사용 가능. 일일이 설치할 필요 없이.
  > eslint --init
  > dev dependencies에 설치 될 것임

prettier등의 formatter extension을 사용하고 있어서 eslint에게 format 부분에 대해서는 조용하도록 하기 위해서는

> npm install eslint-config-prettier
> 하고 .eslintrc.json에 추가
> {

    "extends": ["plugin:prettier/recommended"]

}
그리고

> npm install eslint-plugin-prettier
> npm install prettier -D

eslint는 코드 상 몇가지 에러들을 미리 파악해서 표시해줌
만약 어떤 rule은 사용하고 싶지 않으면 (예를 들어 no-console)
.eslintrc.json에서 다음과 같이 추가
{
rules:{
"no-console" : "off"
}
}

search controller 구현

regular expression

- regex101.com
  [d] d를 포함하는

regex option

- case insensitive 등등..

검색 시에 regex를 이용해서 입력된 단어가 포함되는 동영상을 모두 찾고자 할떄
await Video.find({})
의 {}안에는 find method의 option이 들어간다.
let videos = await Video.find({title:{$regex : searchingBy, $options : "i"}})

\$options의 i는 case insensitive를 의미
videos는 변경되는, 즉 reassign되는 변수이기 때문에 let으로 설정. 아니라면 const.

Comment는 아직 하지 않을것.
댓글 부분은 front-end에서 ajax와 vanilla JS로 만들거거든.

- 원래는 form에서 내용을 전송하면 새로 고침됨.
- 근데 그러지 않고 다 작성하고 enter를 누르면 api로 댓글을 보내서 새로고침 없이 같은 위치로 오도록 할 것임

Front-end 작업에서는 Webpack을 사용할 것입니다리.

- module bundler
  - 여러 파일(.js, .hbs, .png, .sass, .jpg)을 webpack에게 주면 완전히 호환되는 static 파일로 (.js, .css, .jpg, .png) 변환해줌.\
  - 이 프로젝트에서 사용하는 ES6 js, sass(sexy css) 같은 modern JS를 webpack안에 넣고 이걸 normal CSS, normal JS로 바꿔줌
- a bunch of files (js, css, saas 등등) 을 담아와서 브라우저가 이해할 수 있는 js, css 등으로 변환해줌
  > npm install webpack webpack-cli
  - webpack은 파일에서 사용하기 위함. -cli는 terminal에서 사용하기 위함

webpack.config.js가 생성될 거임.

- package.json에서 script 부분에서 start 를 dev:server로 바꾸고, dev:assets를 추가해서 webpack 입력
- "dev:assets" : "webpack"
- npm run dev:assets을 실행하면 자동으로 webpack.config.js 파일을 찾음
- webpack은 exported configuration object를 찾는다

webpack.config.js

- 100% client code
  - 서버 코드와는 연관이 없다
  - 즉, dev:server 안에 있는 babel-node (ES6 코드를 사용할 수 있게 하는 module)을 사용할 수 없다는 뜻
  - 여기서는 normal JS를 써야함.
    Client code is what the user will download when he goes to our page. Client code is html/css/img/js etc

const config={

}

module.exports = config; (옛날 문법으로 export하는 법)

webpack의 entry와 output

- entry는 파일들이 어디에서 왔는가?
- output은 파일들을 어디로 넣을 것인가?

assets 폴더 형성

- js 폴더 : main.js 파일
- scss 폴더 : styles.scss

webpack.config.js 안에 다음을 추가

const ENTRY_FILE =

const OUTPUT_DIR =

- path package 를 import하기 (path package는 경로를 absolute하게 만들어줌. 즉 컴퓨터나 서버에서의 전체 경로를 찾아줌)
  const path = require ("path") (webpack.config.js에서는 normal JS 사용해야 함)

const ENTRY_FILE = path.resolve(**dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(**dirname, "static");

** \_\_dirname은 현재 프로젝트의 디렉토리 이름. 전역 변수.
** file에는 resolve, directory에는 join을 쓴다.

The two functions deal with segments starting with / in very different ways; join will just concatenate it with the previous argument, however resolve will treat this as the root directory, and ignore all previous paths - think of it as the result of executing cd with each argument:

The resolve method creates absoulte path from right to left until an absolute path is constructed

- config 구성
  const config = {
  entry: ENTRY_FILE,
  output : {
  path: OUTPUT_DIR,
  filename: "[name].[format]" (우리가 export할 entry 파일의 name)
  }

Webpack needs one entry point, so we import everything in the main.js and then Webpack will separate it for us.

- 따라서 main.js에 styles.scss를 import 한것

entry
The point or points where to start the application bundling process. If an array is passed then all items will be processed.
A dynamically loaded module is not an entry point.
Simple rule: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points.

2019.11.28 #4.0

Warning in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more : https://webpack.js.org/configuration/mode/
--> webpack의 mode를 적절하게 설정해줘야함.

mode에는 "production", "developement", "none" 3 가지의 option이 있다.
"production" - enable many optimizations for production builds
"development" - enable useful tools for development
"none" - no defaults

package.json에서
"scripts"를 변경
{
"dev:assets" : "WEBPACK_ENV=development webpack"
"build:assets : "WEBPACK_ENV=production webpack"
}

webpack.config.js에서

MODE = process.env.WEBPACK_ENV;
그리고 config에 추가
{
mode : MODE,
}

Error
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
--> webpack이 styles.scss는 이해를 못함. 이때는 적절한 loader를 이용해서 webpack에게 가르쳐줘야함.
--> config에 rules를 추가해줘야 함.
--> rules는 array 형태. rule이라 함은 webpack에게 어떠한 module을 만나면 이 loader를 실행하라고 말하는 것. loader는 webpack에게 파일을 처리하는 방법을 알려주는 역할.

1. condition을 test
   test : /\.(scss)\$/ (scss파일인지 체크)

2. scss를 css로 바꾸자
3. 전체 텍스트 중 그 css의 텍스트를 추출
   - extract text webpack plugin
     npm install extract-text-webpack-plugin@next (@next는 현재 가장 최신 버전을 설치)

그러고
const ExtractCss = require ("extract-text-webpack-plugin") 하고 rules에 다음 추가
use: ExtractCss.extract([
{
loader: "css-loader"
},
{
loader: "postcss-loader"
},
{
loader: "sass-loader"
}
])

ExtractCss는 webpack에게 css를 가지고 뭘해야하는 지를 알려준다.
그 전에 scss를 css까지 변환해야 하는 데 이를 extract()의 인자 안에 array 형태로 넣어준다.
처음 sass-loader로 처리하고, 그걸 postcss-loader가 처리하고, 마지막에 css-loader가 처리함. 쓰여진 역순으로 처리되는 걸 주의.
최종 css를 extract()가 css text만 추출해내게 된다.
sass-loader는 sass 파일을 받아서 normal css로 번역해준다.
postcss-loader는 중간에서 단순히 번역만 하는 것이 아니라 코드가 호환되도록 해준다. (익스플로러와 호환되도록 prefix를 변경! 등등)
css-loader는 webpack이 이해할 수 있도록 변환해줌.
최종적으로 extract()가 순수한 css의 text만 추출해서 어딘가로 보낼 수 있게 해준다.

css-loader resolve error
->
npm install css-loader postcss-loader sass-loader로 해결

post-css loader는 호환성을 올려주는 여러 plugin을 가지고 있다

- autoprefixer
  - 브라우저에 맞게 prefix를 변환해서 호환되도록 해주는 plugin
- style lint

- autoprefixer
  npm install autoprefixer

post-css loader options

const autoprefixer = require ("autoprefixer")

{
loader: "post-css loader",
options: {
plugin(){
return [autoprefixer({browsers :{"cover 99.5%}})] --> plugin()은 사용되는 plugin의 array를 리턴하고, 각 plugin은 option을 그 인자로 가진다.
}
}
}

4. 분리된 css로 저장

plugins: [new ExtractCss("styles.css")]로 결과 파일이 무엇인지를 명시해야 한다.

- .js에 대한 rules은 다음과 같이 하면 됨.
  {
  test: /\.(js)\$/,
  use: [
  {
  loader: "babel-loader"
  }
  ]
  }

(npm install babel-loader 필요함)

"scripts" 만들기
"dev:assets" : "WEBPACK_ENV=development webpack -w" (css 파일을 수정할 때마다 webpack을 끄고 다시 실행해줘야 하는 귀찮음을 방지하기 위해 지켜보는 옵션 -w 추가)

views 파일 변경

- link(rel="stylesheet", href ="/static/styles.css")
- script(src="/static/main.js")

app.use("/static", express.static("static")) 을 통해서 /static 경로에 접근할때는 static이라는 이름의 directory로 갈 것을 설정해놓아야함.

@babel/polyfil

- babel includes a polyfill that includes a custom regenerator runtime and core-js.
  This will emulate a full ES2015+ environment (no < Stage 4 proposals) and is intended to be used in an applicator rather than a library/tool. (this polyfill is automatically loaded when using
  babel-node)
  --> 브라우저가 완전하지 않은 부분을 충전해주는 역할.

static을 .ignore에 넣어주자

인증- passport라는 middleware 사용
인증이란, 브라우저 상에 쿠키(cookie)를 설정해주면 쿠키를 통해서 사용자 ID
등을 알 수 있을 테고, passport가 자동으로 쿠키를 가져와서 인증이 완료된 user
object를 controller에 넘겨준다

Cookie란

- 브라우저 상에 저장할 수 있는 것
- 요청(req)에 대해서 백엔드(back-end)로 전송될 정보들이 담겨있음. 자동으로 이뤄짐.
- 클라이언트(웹브라우저)에 쿠키가 있을 때, 서버에 뭔가 요청할 때마다(req가 일어날때) 브라우저가 자동적으로 쿠키들을 서버로 자동적으로 전송해줌.

  Passport 쿠키를 생성하고 브라우저에 저장하고 유저에게 해당 쿠키를 제공. 자동으로.

- integration이 매우매우 쉽다.

In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password. With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access.

Passport recognizes that each application has unique authentication requirements. Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies.

Strategy

- application 별 authentication mechanisms

app.post('/login', passport.authenticate('local'),
function(req,res) {
// If this function gets called, authentication was successful.
// `req.user` contains the authenticated user.
res.redirect('/users/' + req.user.username);
})

authenticate가 성공하면 req.user라는 object를 만들어줌. 바로 현재 로그인한 '그' 사용자.
쿠키를 만들고, 쿠키를 받고, 어느 유저가 어느 쿠키를 가지고 있는지 기억. 모든걸 알아서 처리해줌.

passport-local-mongoose라는 module

- Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.
- user functionality를 추가하는 것. User model을 만들때 도움.
- 기본적인 사용자 인증이 필요한 것들

  - 패스워드 변경
  - 패스워드 확인
  - 패스워드 생성
  - 패스워드 암호화
    등을 가지고 있음. 가지고 와서 그냥 쓰면 됨.

** static method와 instance method의 차이 : https://www.geeksforgeeks.org/static-methods-vs-instance-methods-java/

사용자를 등록(register)하는 단계

1. Join form에서 필요한 field를 입력받음 (name, email, password)
2. User 생성
3. User register() -- passport-local-mongoose에 있는 static method
   
passport로 로그인하는 단계 (local authentication)

1. User model을 만들고, passport-local-mongoose를 plugin 해준다.
2. passport.js에서 passport.use(User.createStrategy())
   - 이를 위해서 passport passport-local을 설치해준다.
3. passport.serializeUser(User.serializeUser()) 
   - 쿠키로 사용자의 id를 보내는것
4. passport.deserializerUser(User.deserializeUser())
   - id로 사용자를 파악해서 user 객체를 만드는것
5. serialize, deserialize로 User의 authentication을 처리 --> passport-local-mongoose의 내장 method임
6. login 시 passport.authenticate("local")
7. import session from "express-session"
   app.use(session({})
8. import MongoStore from "connect-mongo" // MongoDB session store form Express and Connect

- User model에 passport-local-mongoose plugin 추가
  UserSchema.plugin(passportLocalMongoose, {usernameField: "email"})

usernameField: specifies the field name that holds the username. Defaults to 'username'. This option can be used if you want to use a different field to hold the username for example "email".
--> 여기서는 email field를 username으로 하겠다고 정해주는 option ( local strategy에서는 username, password로 로그인하게 됨. 여기서 username을 무엇으로 쓸 것인가를 정하는 것임)

User model을 생성하고 난 다음에는 인증을 실제적으로 만들어야함.
Strategy를 정해야함. strategy는 login 하는 방식을 말함.

- local은 웹사이트에 id 와 pw를 쳐서 들어가는 방식
- facebook을 통하냐
- github을 통하냐
  등등의 로그인 방식을 말함. 이걸 정해줘야 함.

passport.use(User.createStrategy()) - passport가 local strategy를 형성하도록 함.
그전에
npm install passport passport-local 해야함

- passport-facebook, passport-github 등도 있음

  2019.11.28 #6.1

In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request. If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.

Serialization

- 어떤 정보가 cookie로 넘어갈 지 알려주는 역할
- 지금 웹브라우저(클라이언트)에 있는 사용자에 대해서, 어떤 정보를 가질 수 있느냐.
  - 쿠키에 있는 정보는 자동으로 백엔드로 넘어간다고 전에 언급함
- serialization은 어떤 필드가 쿠키에 포함될 것인가를 알려줌
  - 쿠키는 민감한 정보는 담지 않아야 하고, 작은 것이 좋음 (practice 시에는)

passport.serializeUser(const(user,done)=>
{
done(null, user.id);
}
)

In this example, only the user ID is serialized to the session, keeping the amount of data stored within the session small. When subsequent requests are received, this ID is used to find the user, which will be restored to req.user.
위 코드는 쿠키에 user.id만 담으라고 말해주는 것. 사용자가 브라우저에서 쿠키를 열어본다면, 쿠키에는 숫자 하나, 즉 id만 보일것임.

Deserialization

- 어떤 사용자가 해당 필드(쿠키에 있는 정보)에 해당하는지 찾는것

passport.deserializeUser(const(id, done) =>
{
User.findById(id, const(err, user) =>
{
done(err,user);
});
}
)

serialization은 유저의 필드 하나를 쿠키로 넘기는 역할을 하고
deserialization은 쿠키에 넘겨진 필드를 가지고 유저를 찾는 역할을 한다

passport-local-mongoose는 위의 serialize,deserialize 기능에 대한 shortcut을 제공한다.

passport-local-mongoose 의 static method options
-authenticate() Generates a function that is used in Passport's LocalStrategy
-serializeUser() Generates a function that is used by Passport to serialize users into the session
-deserializeUser() Generates a function that is used by Passport to deserialize users into the session
-register(user, password, cb) Convenience method to register a new user instance with a given password. Checks if -username is unique. See login example.
-findByUsername() Convenience method to find a user instance by it's unique username.
-createStrategy() Creates a configured passport-local LocalStrategy instance that can be used in passport.

<postJoin controller 수정>
await user = User({
name, email
});
await User.register(user, password);
로 사용자를 생성하고 등록한다.

db.users.find({})를 통해서 users db에 등록된 객체들을 살펴보면 객체 속성 중
salt, hash라는 것이 나온다. password를 암호화 시켜주는 것임.
지금까지는 user를 register해주기만 한것.
그래서 쿠키에 생성된 것이 없다. 쿠키를 만들기 위해서는 login을 시켜줘야함.

postJoin controller는 middleware로 역할을 변경.
(req,res) 에서 (req,res,next)로 변경
postJoin 이후에 postLogin이 바로 실행되어서 login 시켜주도록.
postLogin은 postJoin에서 posting된 user, password, email 등의 정보를 받아서 사용할 것임.

app.post('/login',
passport.authenticate('local'),
function(req, res) {
// If this function gets called, authentication was successful.
// `req.user` contains the authenticated user.
res.redirect('/users/' + req.user.username);
});

A redirect is commonly issued after authenticating a request.

app.post('/login',
passport.authenticate('local', { successRedirect: '/',
failureRedirect: '/login' }));

passport.authenticate()는
username과 password를 찾아보도록 설정되어 있음.
middleware는 다음 함수에 정보를 넘기도록 되어있다.

passport는 사용자를 로그인 시킬 때
쿠키로 정보를 넘기고
serialize, deserialize 등의 기능을 지원하고,
user가 담긴 object를 req에 올려준다.

app.js에 passport를 import하고
routes들 이전에 (cookieparser 아래에)

app.use(passport.initialize());
app.use(passport.session());
을 해준다.

cookieparse로 부터 내려온 쿠키를 이용해서 passport는 초기화하고
쿠키를 들여다봐서 쿠키 정보에 해당하는 사용자를 찾아준다. 그리고 req.user를 만들어 사용자
정보를 저장해준다. awesome!

session을 관리하기 위해서는 express-session 필요함.
import session from "express-session"

app.use(session());

session()은 cookie를 관리할 수 있게 해주며. 여러 option을 줄 수 있다.

option중 secret에 관해서

- 쿠키에 들어있는 session ID를 암호화해주는 옵션. 필수 옵션임.
- app.use(session({secret : "dfadfasdfasf"}))
- secret 옵션에 문자열을 입력해서 암호화에 사용함. randomkeygen을 이용하여 랜덤 문자 생성 가능.

This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests

<resave option>
Forces the session to be saved back to the session store, even if the session was never modified during the request. Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).

The default value is true, but using the default has been deprecated, as the default will change in the future. Please research into this setting and choose what is appropriate to your use-case. Typically, you'll want false.

How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the touch method. If it does, then you can safely set resave: false. If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true.

<saveUninitialized option>
Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.

The default value is true, but using the default has been deprecated, as the default will change in the future. Please research into this setting and choose what is appropriate to your use-case.

Note if you are using Session in conjunction with PassportJS, Passport will add an empty Passport object to the session for use after a user is authenticated, which will be treated as a modification to the session, causing it to be saved. This has been fixed in PassportJS 0.3.0


이러고 나서 로그인 하면 두둥!
cookie가 생성된 모습을 볼 수 있다.
쿠키에 만들어진 id는 암호화된 녀석. 
s%3AaKs9Jyov8TQgbpfgwwg1WHR6wFzkv8Gd.eFqU7WUeFs4fAxe%2BTQd89qEMF5UW6pBVbV6XFkJBmtM 으로 나온다.

웹브라우저를 새로고침 할때마다 (즉 이정보를 웹서버로 전송할때마다)
서버에서는 passport 인증과정을 호출하고 passport는 id를 가지고 내가 어느 사용자인지 식별한다. 
즉, req.user는 어플리케이션 상에 계속 존재함. 이게 가능한 이유가 바로 쿠키. 
쿠키는 express로 보내지고 있음. Express는 session을 이용해서 쿠키를 계속 가지고 있게 됨. 

passport가 그 session을 이용해서 쿠키를 갖게 되고 이걸 가지고 deserialize 해서 user를 파악함. 
Session은 쿠키를 해독하여 passport로 넘김. passport는 찾은 사용자를 middleware와 routes의 req 객체에 할당

현재는 서버를 restart하게 되면 req.user가 사라진다. 즉 session이 사라진다. 
왜냐하면 지금은 session 정보, 쿠키 정보들을 메모리에 저장하기 때문. 
session이 유지되도록 하려면 어떻게 해야할까. 서버가 바뀐다고 해서 session이 사라지게 되면 
쿠키가 있다고 하더라도 어떤 사용자의 cookie인지 파악을 하지 못함. 
-> MongoDB를 이용해서 session을 저장. --> connect Mongo

MongoDB session store for Connect and Express

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
 
app.use(session({
    secret: 'foo',
    store: new MongoStore(options)
}));

session(
    store : new CokieStore( {mongooseConnection : mongoose.connection}) // 이 저장소를 DB와 연결시켜줌.
)

이렇게 하면 sessio이 계속 유지됨. 

- 로그인한 사용자의 다른 route 접근을 제한하는 법 (예를 들면 /join은 허용이 안돼야 함)
  onlyPublic middleware 
  (req,res,next)=> {
      if(req.user)
      {
          res.redirect(routes.home)
      }
      else{
          next()
      }
  }

  onlyPrivate

  2019.12.01 #6.5

  Github login
  > npm i passport-github

  Github new oAuth application Registration
  - authorization callback URL
  - 사용자는 깃헙의 특별한 페이지로 가서 '정보 제공에 동의하는지'에 대해서 대답한 후에 (승인) 사용자를 다시 어플리케이션으로 
  돌려보내면서 사용자의 정보를 같이 보내줌 (callback) --> http://localhost:4000/auth/github/callback

var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {      // Github에서 돌아오면 이 함수가 실행될 것임
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

function(accessToken, refreshToken, profile, cb)에서 
- cb는 passport로부터 제공되는 callback 함수
  function verified(err, user, info) {
              if (err) { return self.error(err); }
              if (!user) { return self.fail(info); }

              info = info || {};
              if (state) { info.state = state; }
              self.success(user, info);
            }
- cb 함수는 verified 함수. error 없이 사용자를 만들었는지 확인하려는 용도. 우리가 사용자를 잘 받았음을 확인해줘야 한다. 
  return cb(null, user)를 하면 passport가 사용자를 찾았음을 인지하게 되어 userID를 쿠키에 넣어준다.
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
- 에러가 난 상황에서는 cb(error)를 return하면 사용자를 못 찾거나 에러가 난 것으로 인지한다.
- 
Github login 과정
1. passport.js에 strategy 생성
2. 사용자를 github으로 보냄. passport.authenticate("github")
3. callback되면 callback function 상에서 user 생성
4. Db에 저장된 user를 찾아서 authentication. passport.authentication("github", {failureRedirect: '/login'})


2019.12.02 #6.8

#6.6-6.8 다시 복습할것

Authentication re-cap

Local strategy
1. username, password를 post 방식으로 전달
2. passport-local-mongoose가 자동으로 체크해서 password가 맞으면
3. passport에게 맞습니다라고 알리고 passport는 쿠키 생성

Github strategy
1. github site에서 권한 승인
2. /auth/github/callback으로 보내줌
3. passport가 githubLoginCallback이라는 함수를 실행. 이 함수가 github에서 보내준 정보를 받음
4. 정보 (accessToken, refreshToken, profile, cb)를 이용해서 사용자를 찾거나 생성
5. cb 함수에 error, user 여부를 알려줌
6. user가 존재하면 passport는 쿠키를 만들어서 저장하고 브라우저로 보냄.

Facebook authentication 과정
1. passport.js에 strategy 생성
2. 사용자를 facebook으로 보냄. passport.authenticate("facebook")
3. callback되면 callback function 상에서 user 생성
4. Db에 저장된 user를 찾아서 authentication. passport.authentication("facebook", {failureRedirect: '/login'})

위와 똑같이 하면 되나, github의 경우와 달리 facebook의 callback 때에는 email 정보가 오지 않는다.
-> facebook developer site에서
-> status를 live로 바꿔줘야 함.

그럼에도 불구하고 facebook login을 시도하면 facebook에서 다음과 같은 오류 메세지 말해줌. 
"Insecure Login Blocked: You can't get an access token or log in to this app from an insecure page. Try re-loading the page as https://"
-> local host가 https가 아니다
-> localtunnel을 이용해서 https 통로를 만들어줘야 함. 
npm install -g localtunnel
lt --port 4000
-> 하지만 공식적을 공개할 앱을 만들 경우에는 도메인 이름을 만들고, https certificate도 가지고 있어야 함. 여기서는 단지 테스트 목적 
<localtunnel이 불안정할때>
ngrok을 쓴다.
npm install -g ngrok
ngrok http 4000

하지만 또 에러 
-> 여전히 redirect는 http로 가게 됨.
-> passport.js에서 
callbackURL을 localtunnel에서 제공한 https 경로로 바꿔줘야함. 

또 에러 
"Can't Load URL : The domain of this URL isn't included in the app's domains. To be able to load this URL, add all domains and subdomains of your app to 
the App Domains field in your app settings."
-> 페이스북 개발자 페이지에서 app setting의 app domains에 도메인들을 추가해줘야함. (안해도 되네)
-> 그리고 facebook 로그인 탭의 settings에서도 '유효한 OAuth 리디렉션 URI'에 홈 URL과 callback URL을 써준다.

그럼 됨.
근데 페이스북에서 필요한 정보를 추가해서 받아오고 싶을 때..

passport.js에서 

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback
  )
);

여기에 field를 추가해서 입력한다. 
profileFields: ['id', 'displayName', 'photos', 'email'],
scope : ['public_profile', 'email']


2019.12.03 #6.11

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file
  } = req;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl
    });
  } catch (error) {
    res.render("editProfile", { pageTitle: "Edit Profile" });
  }
};

postEditProfile에서 이미지 업로드를 하지 않을 수도 있잖아? 그때는 
avatarUrl: file ? file.path : req.user.avatarUrl
라고 써줘서 업로드를 했을때만 수정되도록 한다. 

changePassword 기능
- passport-local-mongoose의 changePassword method

changePassword(oldPassword, newPassword, [cb])

if(newPassword !== newPassword1) 이라는 조건 구문을 통해서 
새 암호를 두번 같게 입력했는지 확인. 이때 같지 않으면 status 400을 return해서 구글 브라우저에게
오류임을 알려주는 과정이 필요. 그렇지 않으면 status 200으로 return 되어 구글이 암호를 변경하게 됨. 

Videos, Users, Comments는 다음과 같이 연결됨
- 각 Video에는 해당되는 user와 comment array가 있음
- 각 comment에는 작성한 user가 있음
- 각 user에는 작성한 comment array와 video array가 있음

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  console.log(title, description, path);
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

위 구문을 통해서 업로드할 때 user에 업로드한 video 정보가 들어간다. video에도 역시 사용자의 정보가 들어가고..

만약 video에 들어있는 user ID 정보를 이용해서 해당하는 user object를 가져오고 싶을때 
--> populate method를 쓴다. populate는 object ID type에만 쓸수 있다. 
const video = await Video.findById(id).populate("creator");

edit button protection
- button이 안 보이면 할 수 없다
- 하지만 key가 있으면 videos/key/edit으로 바로 edit 할 수 있다. 이러면 안된다

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

2019.12.12 #7.4

position relative and absolute
- position absolute로 설정된 항목은 relative로 설정된 부모 항목을 찾아서 그에 맞춰서 position을 설정한다
- abolute father도 가능하다. 
- fixed father도 가능하다. (??)

grid
https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_concepts_of_grid_layout

transition

getElementById

querySelector

자체 video control을 만들고 싶을 때
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

videoPlayer.muted()
- property와 method의 차이
- read only가 아닌 property임
  - muted에 값을 assign할 수 있음.
  - getter와 setter를 가지고 있음.

mute와 play 같은 경우 htmlmediaevent api에서 상태를 boolean 으로 return해주는 property를 제공하지만
fullscreen과 관련해서 boolean값을 return해주는 property가 없다

fullscreen API
https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen

removeEventListener
- button에 대한 내 action에 대한 반응을 멈출 수 있다

video 재생 시간 
- video MDN
- video.duration
- video.currentTime

2019.12.17 #8.4

HTMLMediaElement.ended

volume controller

CSS 선택자 설명
http://www.nextree.co.kr/p8468/

비디오 녹화 관련 API
https://developer.mozilla.org/ko/docs/Web/API/MediaDevices

The srcObject property of the HTMLMediaElement interface sets or returns the object which serves as the source of the media associated with the HTMLMediaElement. The object can be a MediaStream, a MediaSource, a Blob, or a File (which inherits from Blob).

유저의 media 장치에 접근하는 법
https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia
- navigator.mediaDevices.getUserMedia가 media stream을 생성
  const stream = await navigator.mediaDevices.getUserMedia()
- video.srcObject = stream
으로 하면 video obejct의 source가 media stream이 됨. 

비디오를 녹화하는 법 - mediaRecorder()
https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder

** blob
https://developer.mozilla.org/en-US/docs/Web/API/Blob

addEventListener 대신에 onclick 을 쓸수도 있지만 이렇게 되면
event 하나당 하나의 response만 정할 수 있다.

어떤 object가 ondataavailable이라는 event를 제공할때
- recording이 멈출 때 이 event가 생성됨.

mediaRecorder()의 속성상 recording 시작하면 data는 생성되기 시작하지만 접근은 되지 않음.
디폴트로 녹화가 끝난 이후에 한번에 모든걸 저장하도록 되어 있음. 

blob
- 0,1로 구성된 파일

파일 다운로드 하는법
 const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();

  ajax
  - not the soap(simple object access protocol, XML 베이스의 프로토콜)
  - asynchronous JavaScript and XML
  - 페이지가 다시 로드되지 않음
  - single page application
  - netflix, youtube가 동작하는 방식

** 비동기 방식(async)
비동기 방식은 웹페이지를 리로드하지 않고 데이터를 불러오는 방식입니다. 이 방식의 장점은 페이지 리로드의 경우 전체 리소스를 다시 불러와야하는데 이미지, 스크립트, 기타 코드 등을 모두 재요청할 경우 불필요한 리소스 낭비가 발생하게 되지만 비동기식 방식을 이용할 경우 필요한 부분만 불러와 사용할 수 있으므로 매우 큰 장점이 있습니다. 

> 왜 사용하는가?
기본적으로 HTTP 프로토콜은 클라이언트 쪽에서 Request를 보내고 Server 쪽에서 Response를 받으면 이어졌던 연결이 끊기게 되어있습니다. 그래서 화면의 내용을 갱신하기 위해서는 다시 request를 하고 response를 하면서 페이지 전체를 갱신하게 됩니다. 하지만 이렇게 할 경우 페이지의 일부분만 갱신할 경우에도 페이지 전체를 다시 로드해야하는데 엄청난 자원낭비와 시간낭비를 초래하고 말 것입니다. 하지만 ajax는 html 페이지 전체가 아닌 일부분만 갱신할 수 있도록 XML HTTPRequest 객체를 통해 서버에 request 합니다. 이 경우 Json 이나 xml 형태로 필요한 데이터만 받아 갱신하기 때문에 그만큼의 자원과 시간을 아낄 수 있습니다. 요새 웹페이지에서 가장 중요한 것은 속도가 아닐까 싶습니다. 이 이유하나만으로도 ajax를 사용해야 하는 이유로써 충분합니다. 

Ajax의 장점
1. 웹페이지 속도의 향상
2. 서버의 처리가 완료될때까지 기다리지 않고 처리 가능하다. 
3. 서버에서 Data만 전송하면 되므로 전체적인 코딩의 양이 줄어든다. 
4. 기존 웹에서는 불가능했던 다양한 UI를 가능하게 해준다. 사진 공유 사이트 Flick의 경우 사진의 제목이나 태그를 페이지 리로드 없이 수정할 수 있다. 

Ajax의 단점
1. 히스토리 관리가 안된다. (보안에 좀 더 신경을 써야 한다)
2. 연속으로 데이터를 요청하면 서버 부하가 증가할 수 있다. 
3. XMLHTTPRequest를 통해 통신을 하는 경우 사용자에게 아무런 진행 정보가 주어지지 않는다. 그래서 아직 요청이 완료되지 않았는데 사용자가 페이지를 떠나거나 오작동할 우려가 발생하게 된다. 

기존의 웹 애플리케이션은 브라우저에서 폼을 채우고 이를 웹 서버로 제출(submit)을 하면 하나의 요청으로 웹 서버는 요청된 내용에 따라서 데이터를 가공하여 새로운 웹 페이지를 작성하고 응답으로 되돌려준다. 이때 최초에 폼을 가지고 있던 페이지와 사용자가 이 폼을 채워 결과물로서 되돌려 받은 페이지는 일반적으로 유사한 내용을 가지고 있는 경우가 많다. 결과적으로 중복되는 HTML 코드를 다시 한번 전송을 받음으로써 많은 대역폭을 낭비하게 된다. 대역폭의 낭비는 금전적 손실을 야기할 수 있으며 사용자와 대화(상호 반응)하는 서비스를 만들기 어렵게도 한다.

반면에 Ajax 애플리케이션은 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할 수 있다. 보통 SOAP이나 XML 기반의 웹 서비스 프로토콜이 사용되며, 웹 서버의 응답을 처리하기 위해 클라이언트 쪽에서는 자바스크립트를 쓴다. 웹 서버에서 전적으로 처리되던 데이터 처리의 일부분이 클라이언트 쪽에서 처리 되므로 웹 브라우저와 웹 서버 사이에 교환되는 데이터량과 웹서버의 데이터 처리량도 줄어들기 때문에 애플리케이션의 응답성이 좋아진다. 또한 웹서버의 데이터 처리에 대한 부하를 줄여주는 일이 요청을 주는 수많은 컴퓨터에 대해서 일어나기 때문에 전체적인 웹 서버 처리량도 줄어들게 된다.

장점

페이지 이동없이 고속으로 화면을 전환할 수 있다.
서버 처리를 기다리지 않고, 비동기 요청이 가능하다.
수신하는 데이터 양을 줄일 수 있고, 클라이언트에게 처리를 위임할 수도 있다.
단점

Ajax를 쓸 수 없는 브라우저에 대한 문제가 있다.
HTTP 클라이언트의 기능이 한정되어 있다.
페이지 이동없는 통신으로 인한 보안상의 문제
지원하는 Charset이 한정되어 있다.
스크립트로 작성되므로 디버깅이 용이하지 않다.
요청을 남발하면 역으로 서버 부하가 늘 수 있음.
동일-출처 정책으로 인해 다른 도메인과는 통신이 불가능하다.

> XMLHttpRequest
XMLHttpRequest(XHR) 객체는 서버와 상호작용하기 위하여 사용됩니다. 전체 페이지의 새로고침 없이도 URL로부터 데이터를 받아올 수 있습니다. 이는 웹페이지가 사용자가 하고 있는 것을 방해하지 않으면서 페이지의 '일부'를 업데이트할 수 있도록 해줍니다. XMLHttpRequest는 AJAX 프로그래밍에 주로 사용됩니다. 

XMLHttpRequest는 이름으로만 봐서는 XML만 받아올 수 있을 것 같아 보이지만 모든 종류의 데이터를 받아오는데 사용할 수 있습니다. 또한 HTTP 이외의 프로토콜도 지원합니다. (fil, FTP 포함)

통신을 통해 서버로부터 이벤트나 메시지 데이터를 받아야 한다면 EventSource를 통한 server-sent events 사용을 고려하세요. 완전 양방향 통신을 해야한다면 웹 소켓이 더 나은 선택일 수 있습니다. 

** 완전 양방향 통신 - 웹소켓
   서버로부터 데이터나 이벤트 받는것 - AJAX

>XML
XML은 Extensible Markup Language의 약자이며, 1998년에 W3C 표준 권고안에 포함되어있습니다. 

XML은 HTML과 매우 비슷한 문자 기반의 마크업 언어(text-based markup language)입니다. 이 언어는 사람과 기계가 동시에 읽기 편한 구조로 되어 있습니다. 

그러나 XML은 HTML처럼 데이터를 보여주는 목적이 아닌, 데이터를 저장하고 전달할 목적으로만 만들어졌습니다. 또한 XML 태그는 HTML 태그처럼 미리 정의되어 있지 않고, 사용자가 직접 정의할 수 있습니다. 

XML의 특징
XML의 중요한 특징은 다음과 같습니다. 
1. XML은 다른 목적의 마크업 언어를 만드는데 사용되는 다목적 마크업 언어입니다. 
2. XML은 다른 시스템끼리 다양한 종류의 데이터를 손쉽게 교환할 수 있도록 해줍니다. 
3. XML은 새로운 태그를 만들어 추가해도 계속해서 동작하므로, 확장성이 좋습니다. 
4. XML은 데이터를 보여주지 않고, 데이터를 전달하고 저장하는 것만을 목적으로 합니다. 
5. XML은 텍스트 데이터 형식의 언어로 모든 XML 문서는 유니코드 문자로만 이루어집니다. 


2 kinds of URLs
- /vides/id... 이건 템플릿을 렌더링해줌
- 렌더링하고 상관없는 url, 동작만 하고 http status code로만 답해주는 url
 
API
- 서버와 통신 목적의 url
- 사용자가 접근할 수 없음
- url에 렌더링할 수 없음

/api/12/view에 접근하면 view를 늘리기만 하고 렌더링은 일어나지 않음. 이게 작동방식

export const postRegisterView = async (req, res) => {
  const { params: id } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

api는 뭔가를 render하지 않고 status로 res 할뿐.

위에서 연결된 템플릿이 없다. 렌더링이 없을것.

이게 API의 개념
- url로 database에 접근해서 어떤 동작을 하나 렌더링은 따로 하지 않음
- database로 다른 서비스와 통신하기 위해서 만들어진것
- db를 변경할 수 있음 

axios 
- library
- HTTP 요청을 fancy하게 바꿔줌
- status code에 접근할 수 있고, 어떻게 접근하는지 볼 수 있음

fetch 
- HTTP 요청을 수동으로 할 수 있게 해주는 명령어 

registerView = () => {
  const videoID = window.location.href.spli("/videos/")[1];
  fetch(`/api/${videoID}/view`, {
    method: "POST"
  })
}

listen EADDRINUSE: address already in use :::4000 오류 해결법
- node.exe 모두 종료
- powershell에서 taskkill /IM node.exe /F 실행

comment 달기

addComment.js

event.preventDefault() --> 새로고침 되지 않도록 함. 

querySelector 는 argument와 같은 이름의 html component 중 가장 첫번째를 찾음.

API에 접근할 때 사용할 수 있는 방법
fetch vs axios
https://hoorooroob.tistory.com/entry/React-React-Naive-TIPS-axios-%EC%99%80-fetch-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C
-> 이 방식은 html에서 form을 submit 하면 일어나는 일과 같은 방식이다

fake add comment 기능
- 실제로 db를 보고 댓글을 다는게 아니라
- status를 듣고 정상적인 상태면 html에 추가해주는 것
- 실시간인 것처럼 보인다

AJAX는 페이지 리로딩 없이 필요한 DB에 접근해서 수정하는 것. 
보이기에 실시간처럼 보이는 것은 fake add comment (frontend 작업으로 html에 추가해야함 )

AWS (amazon web service)
- S3 : 파일 업로드 서비스
- storage service (like Dropbox)
- bucket 단위로 구성됨

Bucket 생성
- region은 서버가 있는 곳, 주요 사용자들이 있을 곳과 가까운 곳으로
- bucket은 폴더와 같은 개념으로 보면 된다
- S3는 버킷이 공개적으로 액세스할 수 URL로 사용되는 것을 허용하기 때문에 선택하는 버킷 이름이 전세계적으로 고유해야 합니다. 다른 계정이 이미 선택한 이름을 가진 버킷을 생성한 경우 다른 이름을 사용해야 합니다

Bucket을 생성하고 우리는 여기에 multer를 이용해서 파일을 업로드하고 싶은것.

IAM - AWS 서비스 중 Security, identity & compliance section

1) 사용자 추가 - 사용자 이름 (wetube) - programmatic access 체크

* programmatic access는 프로그램이 사용하길 원하는 것. 사람이 aws의 자료를 변경하거나 설정을 변경하도록 하고 싶으면 AWS Management Console access를 선택. (패스워드 방식) 
* 우리는 패스워드 방식 아님. access key와 secret access key로 할거임.

- 그룹 권한 설정 
  s3에 접근 권한을 부여한다. 기존의 그룹에 연결시키거나 기존 정책 직접 연결을 통해서 s3 (AmazonS3FullAccess)에 접근하도록 한다)

- 사용자 생성
  이 단계에서 access key ID와 secret access key를 보여준다. 이 단계를 떠나면 다시는 이 둘을 알 수가 없음. 

  이걸 반드시 복사해서 보관해놓아야 함. 잃어버리면 사용자를 새로 만들어야 됨. 그리고 이게 노출되면 이걸 아는 사람들이 임의로 db를 바꿔버릴 수 있으니 보안에 신경써야 함. 
  

  middleware에서 multer 명령문 수정

import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-draft/video"
  })
});
const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-draft/avatar"
  })
});

현재는 녹화하고 파일을 다운 받을 때 크롬이 파일의 재생 시간을 정해주지 않음. 
-> get-blob-duration library 사용

fetch
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

blob method
https://developer.mozilla.org/en-US/docs/Web/API/Body/blob

CORS configuration
https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html

Mongo Atlas를 이용해서 AWS 서버에 db를 만들고 데이터를 저장하는 법
- mongo atlas에서 cluster 만들기
- user 만들기
- connection string 확보
- .env에 MONGO_URL에 복사 (with username, userpassword)
- mongoose.connect argument로 MONGO_URL 설정하면 db로 연결됨.

만들어진 db collections에 가면
- session db가 생겨있음.
  - mongo가 저장해놓은 cookie

session이란?
https://jiwondh.github.io/2017/01/29/session/

Build production
- server code를 예전 코드로 변환해줘야 함. 
- 예전 코드를 이용해서 실행할 폴더 하나를 만들어줘야 함. 
- 현재는 nodemon babel-node를 이용하고 있는데 이걸 변환해줘야 build가 가능함. 

src 폴더 생성 (wetube 프로젝트 폴더 하위에)

package.json 변경

<오류> 'babel'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다. 
--> npm i --save-dev @babel/cli

"scripts": {
    "dev:server": "nodemon --exec babel-node init.js --ignore '.scss' --ignore 'static' ",
    "dev:assets": "cross-env WEBPACK_ENV=development webpack -w",
    "build:assets": "cross-env WEBPACK_ENV=production webpack",
    "build:server": "babel src --out-dir build",
    "build": "npm run build:server && npm run build:assets"

npm run build:server 시행하면 
--> successfully compiled 21 files with Babel.
--> 이러고 build라는 폴더가 생성됨

build 폴더 내부에 static 폴더를 보면 css 파일은 사라지고 main.js만 남음 
&& views 파일도 안 보임. 
--> 왜냐하면 babel이 모든 js 파일을 찾아서 build 폴더에 담아줌. 

You need to compile the new code into the old code because the server where you're gonna upload the code does not understand new code.

"scripts": {
    "dev:server": "nodemon --exec babel-node init.js --ignore '.scss' --ignore 'static' ",
    "dev:assets": "cd src && cross-env WEBPACK_ENV=development webpack -w",
    "build:assets": "cd src && cross-env WEBPACK_ENV=production webpack",
    "build:server": "babel src --out-dir build --ignore 'src/assets','src/static','src/webpack.config.js'",
    "copyAll": "xcopy .\\src\\static .\\build\\static\\ /s /y && xcopy .\\src\\views .\\build\\views\\ /s /y",
    "build": "npm run build:server && npm run build:assets && npm run copyAll",
    "prebuild": "rd /s /q build",
    "start" : "node build/init.js"

모든게 잘 작동한다면 이제 init.js를 동작하면 되는데
원래는 dev:server에서 babel-node init.js를 했지만 이제는 node init.js라고 해야 함. 왜냐면 옛날 구문으로 바꿨기 때문임.

그러면 ReferenceError: regeneratorRuntime is not defined 에러가 나옴. 
--> babel/polyfill을 app.js에서 import해야 한다. 이건 우리가 async function을 사용하기 위해서 애초에 깔았던 dependency였음.

만약 babel과 관련된 error가 생긴다면 babel/core와 babel/node를 깔아라. 

heroku
- hosting service

heroku를 install
heroku login
** document에 prepare the app step은 건너뛰어도 된다
heroku create - 앱을 만든다

https://blog.jaeyoon.io/2018/01/git-crlf.html

gitbash 설정해서 하기

warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory

혹시 저처럼 이런 error 뜨는 분들은 아래 명령어 사용하시면 됩니다. 
같은 증상 댓글이 없기에 올려봅니다 ~

git config --global core.autocrlf true

https://blog.jaeyoon.io/2018/01/git-crlf.html

.env 파일에 server URL이 포함되어 있는데 이건 git에서 무시되도록 해놨다.
근데 heroku는 .env 파일을 사용해야한다.
이걸 해결하기 위해선?
heroku-config 설치

Push and pull your Heroku configs to your local environment.

Heavily inspired by ddollar's version, but using the new Heroku cli.

--> heroku plugins:install heroku-config 실행한다

https://www.npmjs.com/package/heroku-config

heroku config:push: Writes the contents of a local file into heroku config

이렇게 하면 된다리. 근데 github login은 아직 안됨.

<배포 환경일 때와 local 환경일 때 차이를 두는 법>
mongoose.connect(
  process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL, 
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://limitless-retreat-51969.herokuapp.com${routes.githubCallback}`
        : `https://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

github setting에서 developer setting -> OAuth app -> homepage URL이랑 authorization callback URL 수정해줄것

- express flash 
유저에게 메세지를 보낼 수 있게 하는 module
html에 임시로 추가하는 것
  > 로그인 하면 login
  > 업로드하면 upload 등등의 메세지를 주는 것

https://www.npmjs.com/package/express-flash

npm i express-flash

import flash from "express-flash"

app.use(flash()); // 이렇게 하면 끝

ERROR :
'WEBPACK_ENV'은 내부 또는 외부 명령 배치 파일이 아닙니다 오류
-> npm install cross-env 설치
-> "dev:assets": "cross-env WEBPACK_ENV=development webpack", 수정

https://velog.io/@mollang/191108-webpack-mhk2ps8ziu

view 파일에서는 line comment가 허용되지 않나봄.. 이것때매 한참 헤맴

flash는 메모리에 일시적으로 저장해놨다가 페이지 새로고침이나 이동 시에는 없어짐.

 에러 구문 E11000 duplicate key error collection: we-tube.users index: username_1 dup key: { username: null }
 -> https://ajh322.tistory.com/73

 색상 모음
 https://flatuicolors.com/palette/defo


 Prisma
 - https://www.prisma.io/
 - database와 대화하는 귀찮은 일들, 즉 mongoose와 했던 model setting, database 연결, username, password 등의 일들을 prisma가 대신 해줌

Prisma sign in -> add a service -> cd documents에 npm install -g prisma -> prisma login -k eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazV4eXFqcXpsODdnMDg2MXR3Z25hZmQwIiwiaWF0IjoxNTgwMjIwOTIzLCJleHAiOjE1ODI4MTI5MjN9.vV-C50k2F1pA8zExONs7McclGf-eqdtrSMPC6iuN0WM -> create a new service

-> prisma init bs-service -> demo-server (연습하고 있는 중임..)
-> /demo-eu1 선택
-> name for your service : bs-service
-> name for your stage : dev
-> generated Prisma client : Prisma JavaScript Client

prisma.yml과 datamodel.prisma가 생성됨

cd bs-service -> code .

npm i -y
npm init -y 하면 package.json 생김

datamodel.prisma 생김 -> model을 setting함. 

type User {
  id: ID! @id
  name: String!
  email : String!
  posts : [Posts!]! @connection
}

type Post {
  id : ID! @id
  title : String!
  content : String!
  views : Int!
  creator : User! @connection
}

여기서 !는 필수 입력 필드라는 뜻.
@connection은 둘이 연결되어 있다는 뜻.

prisma deploy

  User (Type)
  + Created type `User`
  + Created field `id` of type `ID!`
  + Created field `name` of type `String!`
  + Created field `email` of type `String!`

  Post (Type)
  + Created type `Post`
  + Created field `id` of type `ID!`
  + Created field `title` of type `String!`
  + Created field `content` of type `String!`
  + Created field `views` of type `Int!`

prisma web page에서 보면 bs-service가 생겨있음.

prisma admin에 들어가면 post와 user 가 생겨있음. 이 모든걸 prisma가 해준다는 것임. 
database가 생겨버림.

어떻게 db와 소통할까?

client를 다운로드 -> admin panel와 node.js를 연결하는 것

-> prisma generate -> prisma client 가 생성됨.

git init

이제 express server를 설치해야함.

npm i express
 
index.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.listen(3000);

위의 구문을 통해서 server를 생성.

이제 prisma랑 어떻게 소통할까?

const express = require("express");
const bodyParser = require("body-parser");
const { prisma } = require("./generated/prisma-client");
const app = express();

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const posts = await prisma.posts();
  res.json(posts);
});

app.listen(3000);

-> 결과 화면은 다음과 같다
[
{
id: "ck5zazdcs8qg909353wga9kis",
title: "something",
content: "something",
views: 123
},
{
id: "ck5zb08z5tieb0901v1r9tzie",
title: "second",
content: "second",
views: 12
}
]

즉 prisma를 통해서 db를 당신의 pug template에 전달해줄 수 있음.

mongoose, mongoDB, connect() 같은것 없이도 이런 일이 가능함!!

datamodel을 새로 setting 한 이후에는 prisma deploy && prisma generate

REST client - POST request 보내는 법
- advanced REST client (chrome에서 REST client chrome 검색해서 extension 설치)


Real-time nodeJS

<requirements>
node.JS
google chrome
express
vs code
git
mongoDB는 사용하지 않음. 모든 정보들이 웹소켓과 함께 서버의 메모리에 들어감. 

socket.IO
- realtime engine

gulp
- webpack을 싫어한다면
- webpack 만큼 해줄 수 있음

node.JS, express, babel









