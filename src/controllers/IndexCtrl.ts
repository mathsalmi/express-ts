import * as express from "express"
import * as user from "../entities/User"
import * as connect from "../conf/connection"

/**
 * Index says hello world
 */
export async function index(req: express.Request, res: express.Response) {
	try {
		const users = await user.User.findAll();
		res.send(users);
	} catch (e) {
		console.error(e)
	}
};

/**
 * Hello says hello to a specific user
 */
export async function hello(req: express.Request, res: express.Response) {
	const id = req.params.name;
	const u = await user.User.find({ where: { id: id } })
	if (u == null) {
		res.status(404);
		res.send('No user found');
		return;
	}
	res.send(u)
}

/**
 * Create a new user
 */
export async function create(req: express.Request, res: express.Response) {
	try {
		const u: user.UserAttribute = req.body;
		const nu = await user.User.create(u);
		console.log(nu);
		res.status(200).send();
	} catch (e) {
		res.status(500)
		res.send(e)
	}
}

/**
 * Say hello world
 */
export function world(req: express.Request, res: express.Response) {
	res.status(200).send('Você está autenticado');
}