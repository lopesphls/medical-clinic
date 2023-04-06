export class missingParams extends Error {
	message = '';
	constructor(public status: number, public data: object) {
		super();
		const empty = [];
		for (const key in this.data) {
			if (this.data[key] === undefined || this.data[key] === '') {
				empty.push(` ${key}`);
			}
		}
		if (empty.length === 1) {
			this.message = `O campo${empty} precisa ser preenchido`;
		} else {
			this.message = `Os campos${empty} precisam ser preenchidos`;
		}

		this.status = status;
	}
}
