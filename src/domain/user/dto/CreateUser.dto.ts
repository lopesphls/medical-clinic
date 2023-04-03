export interface CreateUserDto {
	name: string;
	birthDate: number;
	email: string;
	password: string;
	image?: string;
	cpf: string;
}
