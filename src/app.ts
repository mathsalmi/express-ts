import * as express from "express"
import * as routes from "./routes"

// constants
const PORT = process.env.PORT || 3000;

// app
const app: express.Express = express();

// middlewares

// routes
routes.set(app);

// start up
app.listen(PORT, () => console.log('Server started up on port ' + PORT));