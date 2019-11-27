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
어디서는 db의 object가 import되면 연결되었다고 뜰것이다. (videoController에서 videos라는 fake db를 import한 상태에서 저 명령을 치면 DB에 연결되었다고 뜰것))

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
- file을 upload하고 URL을 반환하는 middleware, multar를 사용할 것임

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

지금 현 상황에서 문제
= upload된 이후에 home 페이지로 가보면 video link가 깨져있다. 왜냐하면 해당 video의 route가 존재하지 않기 때문.
지금은 localhost://4000/uploads/videos/videoId로 되어 있지만 이에 해당하는 routes는 만든 적이 없다.

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
await Video.findOneAndUpdate({_id:id}, {title, description});

2019.11.26 #3.9

Webpack

- module bundler
- a bunch of files (js, css, saas 등등) 을 담아와서 브라우저가 이해할 수 있는 js, css 등으로 변환해줌
- npm install webpack webpack-cli
- package.json에서 script 부분에서 start 를 dev:server로 바꾸고, dev:assets를 추가해서 webpack 입력
- "dev:assets" : "webpack"
- npm run dev:assets을 실행하면 자동으로 webpack.config.js 파일을 찾음
- webpack은 exported configuration object를 찾는다

@babel/polyfil

인증- passport라는 middleware 사용
인증이란, 브라우저 상에 쿠키(cookie)를 설정해주면 쿠키를 통해서 사용자 ID
등을 알 수 있을 테고, passport가 자동으로 쿠키를 가져와서 인증이 완료된 user
object를 controller에 넘겨준다

Cookie란

- 브라우저 상에 저장할 수 있는 것
- 요청(req)에 대해서 백엔드(back-end)로 전송될 정보들이 담겨있음. 자동으로 이뤄짐
  Passport 쿠키를 생성하고 브라우저에 저장하고 유저에게 해당 쿠키를 제공. 자동으로.

Serialization

- 어떤 정보가 cookie로 넘어갈 지 알려주는 역할

Deserialization

- 어떤 사용자가 해당 필드(쿠키에 있는 정보)에 해당하는지 찾는것
