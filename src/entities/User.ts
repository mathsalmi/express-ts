import * as sequelize from "sequelize"
import * as connect from "../conf/connection"

export interface UserAttribute {
	id?: number;
	username?: string;
	password?: string;
	active?: boolean;
}

export interface UserInstance extends sequelize.Instance<UserAttribute>, UserAttribute {
}

export interface UserModel extends sequelize.Model<UserInstance, UserAttribute> {
}

export const User = connect.define<UserInstance, UserAttribute>('user', {
	id: {
		type: sequelize.INTEGER,
		primaryKey: true
	},
	username: {
		type: sequelize.STRING
	},
	password: {
		type: sequelize.STRING
	},
	active: {
		type: sequelize.BOOLEAN
	},
}, {
		tableName: 'user',
		timestamps: false
	});