import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { conflictParams } from 'src/utils/errors/conflictParams';
import { missingParams } from 'src/utils/errors/missingParam';
import { CreateUserDto } from '../../domain/user/dto/CreateUser.dto';
import { UserDomain } from '../../domain/user/entities/User.entity';
import CreateUserRepository from '../repository/createUser.repository';

@Injectable()
export default class CreateUserService {
	constructor(
		private userRepository: CreateUserRepository,
		private readonly prisma: PrismaClient,
	) {}

	public async Create({
		cpf,
		birthDate,
		email,
		name,
		password,
		image,
	}: CreateUserDto) {
		const data: UserDomain = {
			id: randomUUID(),
			cpf,
			email,
			birthDate,
			image: 'Newbie',
			name,
			password,
		};

		const user = await this.prisma.user.findFirst({
			where: {
				OR: [{ cpf }, { email }],
			},
		});

		if (
			data.birthDate === undefined ||
			data.email === '' ||
			data.cpf === '' ||
			data.name === '' ||
			data.password === ''
		) {
			throw new missingParams(400, data);
		} else if (user.cpf === cpf && user.email === email) {
			throw new conflictParams(409, { cpf, email }, user);
		} else if (user.email === email) {
			throw new conflictParams(409, { email }, user);
		} else if (user.cpf === cpf) {
			throw new conflictParams(409, { cpf }, user);
		} else {
			return await this.userRepository.Create(data);
		}
	}
}
