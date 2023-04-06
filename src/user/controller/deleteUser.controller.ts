import { Controller } from '@nestjs/common';

@Controller('/')
export default class DeleteUser {
	public async DeleteUser() {
		try {
			const test = 1;
			return test;
		} catch (error) {
			console.log(error);
		}
	}
}
