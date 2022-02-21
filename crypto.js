const {createHash, scryptSync, randomBytes} = require('crypto');

// Create a string hash
function hash(input) {
	return createHash('sha256').update(input).digest('hex');
}

// Compare two hashed passwords
let password1 = 'randomPassw0rd312';
const hash1 = hash(password1);
console.log(hash1); // 328daba6142a5daa45b52f43393515cd540f41dd3150cd89858f049759e74616
 
// Some time later... when checking if same password

let password2 = 'randomPassw0rd312';
let password3 = 'differentpass';

const hash2 = hash(password2);
const hash3 = hash(password3);

console.log(hash1 === hash2); // true
console.log(hash1 === hash3); // false


function signup(email, password) {
	const salt = randomBytes(16).toString('hex'); // eg. 8fdf52a829fa245a31fc968e7bdaf08f
	const hashedPassword = scryptSync(password, salt, 64).toString('hex');

	const user = {email: password: `${salt}:${hashedPassword}`}

	return user;
}

function login(email, password) {

}

signup()