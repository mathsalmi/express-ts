import * as sequelize from "sequelize"
import * as conf from "./database"

console.log('Start up database connection');
const db = new sequelize(conf.database, conf.username, conf.password, {
	host: conf.host,
	dialect: conf.dialect
});

export = db