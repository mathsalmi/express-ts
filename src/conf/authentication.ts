import * as express from "express"
import * as passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import * as user from "../entities/User"

/**
 * Serialize user
 */
export function serializeUser(user: user.UserAttribute, done: (err: any, id?: any) => void) {
	done(null, user.id);
}

/**
 * Deserialize user
 */
export async function deserializeUser(id: number, done: (err: any, id?: any) => void) {
	const u = await user.User.findById(id);
	done(null, u);
}

/**
 * Verify whether or not use is authenticated
 */
export function requireLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
	if (req.isAuthenticated()) {
		return next();
	}
	error(req, res, next);
}

/**
 * If authentication succeeds
 */
export function success(req: express.Request, res: express.Response) {
	res.status(200).send();
}

/**
 * If authentication fails
 */
export function error(req: express.Request, res: express.Response, next: express.NextFunction) {
	res.status(403).send();
}

/**
 * Authenticate user
 */
export const authenticate = passport.authenticate;

/**
 * All strategies used for authentication
 */
export const strategies: passport.Strategy[] = [
	new LocalStrategy(async (username: string, password: string, done: (err: any, user?: any) => void) => {
		try {
			const u = await user.User.findOne({
				where: {
					username: username,
					password: password
				}
			})

			if (u != null) {
				done(null, u);
			}
		} catch (e) {
			console.log(e)
		}
		done('usuario nao reconhecido', null); // TODO melhorar
	})
]