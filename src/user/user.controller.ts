import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateUserDto } from '../domain/user/dto/CreateUser.dto';
import CreateUserService from './service/createUser.service';

@Controller('/user')
export default class UserController {
	constructor(
		private userService: CreateUserService,
		private prisma: PrismaClient,
	) {}

	@Get('/')
	public async getAll(@Res() res: Response) {
		const user = await this.prisma.user.findMany();
		return res.json(user);
	}

	@Post('/')
	public async CreateUser(@Res() res: Response, @Req() req: Request) {
		try {
			const user: CreateUserDto = await req.body;
			await this.userService.Create(user);
			return res.status(201).json('Usuário criado com sucesso');
		} catch (error) {
			return res
				.status(error.status || 500)
				.json(error.message || 'Erro interno no servidor');
		}
	}
}
