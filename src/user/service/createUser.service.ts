import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from '../../domain/user/dto/CreateUser.dto';
import { UserDomain } from '../../domain/user/entities/User.entity';
import CreateUserRepository from '../repository/createUser.repository';

@Injectable()
export default class CreateUserService {
	constructor(private userRepository: CreateUserRepository) {}

	public async Create({
		cpf,
		birthDate,
		email,
		name,
		password,
		image,
	}: CreateUserDto) {
		try {
			const data: UserDomain = {
				id: randomUUID(),
				cpf,
				email,
				birthDate,
				image,
				name,
				password,
			};
			const user = await this.userRepository.Create(data);

			return user;
		} catch (error) {
			return error;
		}
	}
}
