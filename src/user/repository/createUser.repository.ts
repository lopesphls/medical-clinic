import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDomain } from '../../domain/user/entities/User.entity';

@Injectable()
export default class CreateUserRepository {
	constructor(private prisma: PrismaClient) {}
	public async Create({
		id,
		image,
		name,
		birthDate,
		cpf,
		email,
		password,
	}: UserDomain) {
		try {
			const user = await this.prisma.user.create({
				data: {
					id,
					birthDate: new Date(birthDate),
					name,
					cpf,
					email,
					password,
					image,
				},
			});
			return user;
		} catch (error) {
			return error;
		}
	}
}
