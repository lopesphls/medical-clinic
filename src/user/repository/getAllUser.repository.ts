import { PrismaClient } from '@prisma/client';

export default class GetAllUserRepository {
	constructor(private readonly prisma: PrismaClient) {}
	public async getAll() {
		return await this.prisma.user.findMany();
	}
}
