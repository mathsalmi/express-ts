import * as sequelize from "sequelize"
import * as connect from "../conf/connection"

export interface UserAttribute {
	id?: string;
	name?: string;
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
	name: {
		type: sequelize.STRING,
		validate: {
			obrigarNomeSalmi: (value: any) => {
				if (value != 'matheus') {
					throw Error("Must be user matheus")
				}
			}
		}
	},
}, {
		tableName: 'user',
		timestamps: false
	});