import * as express from "express"
import * as routes from "./routes"
import * as bodyparser from "body-parser"
import * as cors from "cors"
import * as session from "express-session"
import * as passport from "passport"
import * as auth from "./conf/authentication"

// constants
const PORT = process.env.PORT || 3000;

// app
const app: express.Express = express();

// content parsers
app.use(bodyparser.raw());
app.use(bodyparser.text());
app.use(bodyparser.json());

app.use(cors());

app.use(session({
	secret: '79324fa7a2a1d50742ab4ea63d80382f', // TODO modificar o secret do session
	resave: false,
	saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);

// setup one or more strategies
for (const strategy of auth.strategies) {
	passport.use(strategy);
}

// routes
routes.set(app, passport);

// start up
app.listen(PORT, () => console.log('Server started up on port ' + PORT));