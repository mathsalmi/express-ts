import * as express from "express"
import * as passport from "passport"
import * as auth from "./conf/authentication"
import * as IndexCtrl from "./controllers/IndexCtrl"

/**
 * Set routes to the app instance
 */
export function set(app: express.Express, passport: passport.Passport) {
	app.get('/', IndexCtrl.index);
	app.get('/:name', IndexCtrl.hello);
	app.get('/autenticado', auth.requireLogin, IndexCtrl.world);

	// login	
	app.post('/login', passport.authenticate('local', {}), auth.success);
}