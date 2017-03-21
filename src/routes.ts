import * as express from "express"
import * as IndexCtrl from "./controllers/IndexCtrl"

/**
 * Set routes to the app instance
 */
export function set(app: express.Express) {
	app.get('/', IndexCtrl.index);
	app.get('/:name', IndexCtrl.hello);
	app.post('/', IndexCtrl.create);
}