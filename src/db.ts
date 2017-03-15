declare interface dbconfig {
	host: string,
	username: string,
	password: string,
	database: string,
	dialect: string,

	[key: string]: string
}

const conf: dbconfig = {
	host: 'localhost',
	username: 'root',
	password: 'root',
	database: 'express',
	dialect: 'mysql'
}

export = conf;