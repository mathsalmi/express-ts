import * as express from "express"
import * as routes from "./routes"
import * as bodyparser from "body-parser"
import * as sequelize from "sequelize"
import * as dbconfig from "./db"

// constants
const PORT = process.env.PORT || 3000;

// app
const app: express.Express = express();

// content parsers
app.use(bodyparser.raw());
app.use(bodyparser.text());
app.use(bodyparser.json());

// database
console.log('Starting up DB connection');
const db = new sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
	host: dbconfig.host,
	dialect: dbconfig.dialect
});

// routes
routes.set(app);

// start up
app.listen(PORT, () => console.log('Server started up on port ' + PORT));