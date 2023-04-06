import { CreateUserDto } from './CreateUser.dto';

export interface UpdateUserDto {
	id: string;
	user: CreateUserDto;
}
