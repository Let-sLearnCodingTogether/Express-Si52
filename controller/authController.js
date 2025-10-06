import UserModel from "../models/userModel.js";

export const register = async (req, res) => {
	try {
		const request = req.body

		await UserModel.create({
			username : request.username,
			email : request.email,
			password : request.password
		}) 

		res.status(201).json({
			message: "Berhasil register, silahkan login",
			data: null,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null,
		});
	}
};
