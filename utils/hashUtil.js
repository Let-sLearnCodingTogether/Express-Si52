import bcrypt from "bcrypt";

export const hash = (plainText) => {
	console.log(plainText);

	return bcrypt.hashSync(plainText, 10);
};

export const compare = (plainText, hashText) => {
	return bcrypt.compareSync(plainText, hashText);
};
