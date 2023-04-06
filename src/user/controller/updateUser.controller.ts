import { Controller } from '@nestjs/common';

@Controller('/')
export default class UpdateUser {
	public async CreateUser() {
		try {
			const test = 'teste';
			return test;
		} catch (error) {
			console.log(error);
		}
	}
}
