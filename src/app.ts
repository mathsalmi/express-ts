import * as express from "express"
import * as routes from "./routes"
import * as bodyparser from "body-parser"
import * as cors from "cors"

// constants
const PORT = process.env.PORT || 3000;

// app
const app: express.Express = express();

// content parsers
app.use(bodyparser.raw());
app.use(bodyparser.text());
app.use(bodyparser.json());

app.use(cors());

// routes
routes.set(app);

// start up
app.listen(PORT, () => console.log('Server started up on port ' + PORT));