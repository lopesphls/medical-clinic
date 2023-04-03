import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../../domain/user/dto/CreateUser.dto';
import CreateUserService from '../service/createUser.service';

@Controller('/user')
export default class CreateUser {
	constructor(private userService: CreateUserService) {}

	@Post('/')
	public async CreateUser(@Res() res: Response, @Req() req: Request) {
		try {
			const user: CreateUserDto = await req.body();
			const data = await this.userService.Create(user);
			return res.json(data.message).status(data.status);
		} catch (error) {
			return res.json(error.message).status(error.status);
		}
	}
}
