import * as express from "express"

/**
 * Index says hello world
 */
export function index(req: express.Request, res: express.Response) {
	res.status(200);
	res.send("Hello world");
};

/**
 * Hello says hello to a specific user
 */
export function hello(req: express.Request, res: express.Response) {
	const name = req.params.name;
	res.send("Hello " + name);
}