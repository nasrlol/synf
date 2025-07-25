enum Role {
	Admin,
	User,
}

class User {
	name: string;
	email: string;
	role: Role;

	constructor() {
		this.name = "";
		this.email = "";
		this.role = Role.User;
	}
}

function Login() {}
