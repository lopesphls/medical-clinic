/** @format */

import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import CreateUser from './controller/createUser.controller';
import DeleteUser from './controller/deleteUser.controller';
import GetUser from './controller/getUser.controller';
import UpdateUser from './controller/updateUser.controller';
import CreateUserRepository from './repository/createUser.repository';
import CreateUserService from './service/createUser.service';
import GetServiceUser from './service/getUser.service';

@Module({
	imports: [],
	controllers: [GetUser, CreateUser, DeleteUser, UpdateUser],
	providers: [
		GetServiceUser,
		CreateUserService,
		CreateUserRepository,
		PrismaClient,
	],
})
export class UserModule {}
