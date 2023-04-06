export interface UserDomain {
	id: string;
	name: string;
	birthDate: string;
	email: string;
	password: string;
	image: string;
	cpf: string;
	clinicId?: string;
	doctorId?: string;
	patientId?: string;
}
