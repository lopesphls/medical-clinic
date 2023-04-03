import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDomain } from '../../domain/user/entities/User.entity';

@Injectable()
export default class CreateUserRepository {
	constructor(private prisma: PrismaClient) {}
	public async Create(data: UserDomain) {
		try {
			return await this.prisma.user.create({ data: data });
		} catch (error) {
			return error;
		}
	}
}
