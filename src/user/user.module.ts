/** @format */

import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import CreateUserRepository from './repository/createUser.repository';
import GetAllUserRepository from './repository/getAllUser.repository';
import CreateUserService from './service/createUser.service';
import GetAllUserService from './service/getAllUser.service';
import UserController from './user.controller';

@Module({
	imports: [],
	controllers: [UserController],
	providers: [
		GetAllUserService,
		GetAllUserRepository,
		CreateUserService,
		CreateUserRepository,
		PrismaClient,
	],
})
export class UserModule {}
