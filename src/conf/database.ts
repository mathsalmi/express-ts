interface dbconfig {
	host: string,
	username: string,
	password: string,
	database: string,
	dialect: 'mysql' | 'mssql' | 'postgres',

	[key: string]: string
}

const db: dbconfig = {
	host: 'localhost',
	username: 'root',
	password: 'root',
	database: 'express',
	dialect: 'mysql'
}

export = db