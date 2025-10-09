import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";

export const register = async (req, res) => {
	try {
		const request = req.body;

		const hashPassword = hash(req.password);

		await UserModel.create({
			username: request.username,
			email: request.email,
			password: hashPassword,
		});

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

export const login = async (req, res) => {
	try {
		const request = req.body;

		const user = await UserModel.findOne({
			email: request.email,
		});

		if (!user) {
			return res.status(401).json({
				message: "User tidak ditemukan",
				data: null,
			});
		}

		if (user.password === request.password) {
			return res.status(200).json({
				message: "Login berhasil",
				data: {
					username: user.username,
					email: user.email,
					token: "TOKEN",
				},
			});
		}

		return res.status(401).json({
			message: "Login tidak berhasil",
			data: null,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null,
		});
	}
};
