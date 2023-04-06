import { Injectable } from '@nestjs/common';
import GetAllUserRepository from '../repository/getAllUser.repository';

@Injectable()
export default class GetAllUserService {
	constructor(private readonly userRepository: GetAllUserRepository) {}
	public async getAllService() {
		return await this.userRepository.getAll();
	}
}
