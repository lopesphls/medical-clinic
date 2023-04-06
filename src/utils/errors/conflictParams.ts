export class conflictParams extends Error {
	message = '';
	constructor(public status: number, public data: object, item: object) {
		super();
		const empty = [];
		for (const key in this.data) {
			if (this.data[key] === item[key]) {
				empty.push(` ${key}`);
			}
		}

		if (empty.length === 1) {
			this.message = `O dado${empty} é único e ja foi cadastrado`;
		} else {
			this.message = `Os dados${empty} são únicos e ja foram cadastrados`;
		}

		this.status = status;
	}
}
