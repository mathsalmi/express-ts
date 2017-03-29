import * as user from "../entities/User"
import * as bcrypt from "bcrypt"

/**
 * Generates password
 */
export function genPassword(password: string): string {
	return bcrypt.hashSync(password, 10); // 10 is salt rounds
}