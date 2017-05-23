import * as express from "express"

export async function index(req: express.Request, res: express.Response) {
	let name = req.params.name;
	if (name == '') {
		name = 'World';
	}
	res.render('index', { world: name });
}