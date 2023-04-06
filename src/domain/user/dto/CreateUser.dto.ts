export interface CreateUserDto {
	name: string;
	birthDate: string;
	email: string;
	password: string;
	image?: string | undefined;
	cpf: string;
}
