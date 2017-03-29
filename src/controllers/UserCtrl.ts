import * as express from "express"
import * as user from "../entities/User"
import * as connect from "../conf/connection"

/**
 * List all users
 */
export async function list(req: express.Request, res: express.Response) {
	try {
		const users = await user.User.findAll();
		res.json(users);
	} catch (e) {
		res.status(500).json();
	}
}

/**
 * Create user
 */
export async function create(req: express.Request, res: express.Response) {
	try {
		const u: user.UserAttribute = req.body;
		const nu = await user.User.create(u);
		res.json();
	} catch (e) {
		res.status(500).json();
	}
}

/**
 * Delete user
 */
export async function deleteOne(req: express.Request, res: express.Response) {
	try {
		const id: number = req.params.id;
		const u = await user.User.findById(id);
		if (u == null) {
			res.status(404).json();
			return;
		}
		// if user is found
		u.destroy()
		res.json();
	} catch (e) {
		res.status(500).json();
	}
}

/**
 * Edit user
 */
export async function edit(req: express.Request, res: express.Response) {
	try {
		const id = req.params.id;
		const d: user.UserAttribute = req.body;
		const r = await user.User.update(d, {
			where: {
				id: id
			}
		});

		if (r[0] > 0) {
			res.json();
			return;
		}

		res.status(500).json();
	} catch (e) {
		res.status(500).json();
	}
}