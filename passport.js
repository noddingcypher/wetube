import passport from "passport";
import GithubStrategy from "passport-github";

import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy()); // passport가 local strategy 를 사용하여 authenticate할 수 있게하는 instance를 생성

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser()); // passport가 serialize에 사용할 수 있는 function을 생성
passport.deserializeUser(User.deserializeUser()); // passport가 deserialize에 사용할 수 있는 function을 생성
