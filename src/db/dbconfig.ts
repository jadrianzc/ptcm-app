import knex from 'knex';

// Conexión con SQLServer
export const db = knex({
	client: 'mssql',
	connection: {
		host: process.env.HOST_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DATABASE,
		requestTimeout: 600000,
		options: {
			enableArithAbort: true,
			encrypt: false,
		},
	},
});
