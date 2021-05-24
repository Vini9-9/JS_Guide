// argument with a default value based on a function 

function User(id) {
	this.id = id;
}

function generateId() => Math.random()*999

function createAdminUser (user = new User(generateId()) {
	user.admin= true;
}