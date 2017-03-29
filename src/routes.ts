import * as express from "express"
import * as passport from "passport"
import * as auth from "./conf/authentication"
import * as UserCtrl from "./controllers/UserCtrl"

/**
 * Set routes to the app instance
 */
export function set(app: express.Express, passport: passport.Passport) {
	// login	
	app.post('/login', passport.authenticate('local', {}), auth.success);

	// users	
	app.get('/users', auth.requireLogin, UserCtrl.list);
	app.post('/users', auth.requireLogin, UserCtrl.create);
	app.put('/users/:id', auth.requireLogin, UserCtrl.edit);
	app.delete('/users/:id', auth.requireLogin, UserCtrl.deleteOne);
}